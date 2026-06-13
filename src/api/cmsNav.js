/**
 * CMS 导航 API 服务模块
 * 用于从后端获取网站导航配置数据
 */

import request from '@/utils/request'
import { logger } from '@/utils/logger'

// 模块级缓存：防止同一页面生命周期内重复请求 CMS API
let _cachedResult = null
let _pendingRequest = null

/**
 * getCmsNavPublicList API 调用
 *
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码 (默认: 1)
 * @param {number} params.pageSize - 每页大小 (默认: 100)
 * @param {string} params.order - 排序字段: 'ID', 'CreatedAt', 'sort'
 * @param {boolean} params.forceRefresh - 是否强制刷新缓存
 * @returns {Promise<Object>} API 响应数据
 */
export async function getCmsNavPublicList(params = {}) {
  const { forceRefresh, ...queryParams } = params

  // 有缓存数据时直接返回，避免重复 API 调用
  if (_cachedResult && !forceRefresh) {
    return _cachedResult
  }

  // 有正在进行的请求时，复用该请求（防并发）
  if (_pendingRequest) {
    return await _pendingRequest
  }

  // 构建查询参数 - 只保留分页和排序参数
  const defaultParams = {
    page: 1,
    pageSize: 100,  // 获取足够多的数据
    order: 'sort'   // 按排序字段排序
  }

  _pendingRequest = (async () => {
    const result = await request.get('/cmsnav/getCmsNavPublicList', { ...defaultParams, ...queryParams })

    if (result.success) {
      const cached = {
        success: true,
        data: result.data?.list || [],
        total: result.data?.total,
        page: result.data?.page,
        pageSize: result.data?.pageSize
      }
      _cachedResult = cached
      _pendingRequest = null
      return cached
    }

    _pendingRequest = null
    logger.error('❌ getCmsNavPublicList API 业务错误:', result.message)
    return {
      success: false,
      message: result.message,
      data: []
    }
  })()

  return await _pendingRequest
}

/**
 * 获取全部导航数据并分配
 *
 * @returns {Promise<Object>} 包含全部导航数据的对象
 */
export async function getAllNavigation() {
  const result = await getCmsNavPublicList({
    page: 1,
    pageSize: 100,
    order: 'sort'
  })

  if (!result.success) {
    logger.warn('⚠️ 获取导航数据失败,返回空对象')
    return {
      all: [],
      header: [],
      footer: []
    }
  }

  logger.log('📊 获取到全部导航数据:', result.data.length, '条')

  // 客户端筛选和分配数据
  const allNavs = result.data

  // 筛选 Header 导航 (启用状态 + 在 Header 显示)
  const headerNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.headerShow === true)
    .filter(nav => !nav.parentId || nav.parentId === 0)  // 只显示顶级导航
    .map(nav => formatNavItem(nav, allNavs))

  // 筛选 Footer 导航 (启用状态 + 在 Footer 显示)
  // 顶级导航作为列,子导航作为列下的链接
  const footerNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.footerShow === true)
    .filter(nav => !nav.parentId || nav.parentId === 0)  // 获取顶级导航(列)
    .map(parentNav => ({
      title: parentNav.navName || '',  // 列标题
      links: allNavs
        .filter(childNav =>
          childNav.parentId === parentNav.ID &&
          childNav.status === '启用' &&
          childNav.footerShow === true  // 子导航也必须 footerShow=true
        )
        .map(childNav => ({
          text: childNav.navName || '',
          to: childNav.navUrl && !childNav.navUrl.startsWith('http') ? childNav.navUrl : undefined,
          href: childNav.navUrl?.startsWith('http') ? childNav.navUrl : undefined
        }))
    }))

  logger.log('✅ 导航数据分配完成:')
  logger.log('  - 全部导航:', allNavs.length, '条')
  logger.log('  - Header 导航:', headerNavs.length, '条')
  logger.log('  - Footer 导航:', footerNavs.length, '条')

  return {
    all: allNavs,
    header: headerNavs,
    footer: footerNavs
  }
}

/**
 * 格式化单个导航项
 * @param {Object} nav - 原始导航数据
 * @param {Array} allNavs - 全部导航数据 (用于查找子导航)
 * @returns {Object} 格式化后的导航项
 */
function formatNavItem(nav, allNavs) {
  const navItem = {
    text: nav.navName || '',
    id: nav.ID
  }

  // 处理导航链接
  if (nav.navUrl) {
    // 判断是否为外部链接
    if (nav.navUrl.startsWith('http://') || nav.navUrl.startsWith('https://')) {
      navItem.href = nav.navUrl
      navItem.target = nav.target || '_blank'
    } else {
      // 内部路由
      navItem.to = nav.navUrl
      navItem.target = nav.target || '_self'
    }
  }

  // 处理下拉菜单 (有子导航的情况)
  if (nav.parentId === null || nav.parentId === 0) {
    // 顶级导航,检查是否有子导航
    const hasChildren = allNavs.some(item =>
      item.parentId === nav.ID &&
      item.status === '启用' &&
      item.headerShow === true  // 子导航也必须 headerShow=true
    )
    if (hasChildren) {
      navItem.type = 'dropdown'
      navItem.children = allNavs
        .filter(item =>
          item.parentId === nav.ID &&
          item.status === '启用' &&
          item.headerShow === true  // 添加 headerShow 筛选
        )
        .map(child => formatNavItem(child, allNavs))
    }
  }

  // 添加图标
  if (nav.icon) {
    navItem.icon = nav.icon
  }

  return navItem
}

/**
 * 获取 Header 导航数据 (向后兼容的简化版本)
 * @returns {Promise<Array>} Header 导航数组
 */
export async function getHeaderNavigation() {
  const navData = await getAllNavigation()
  return navData.header
}

/**
 * 获取 Footer 导航数据 (向后兼容的简化版本)
 * @returns {Promise<Array>} Footer 导航数组
 */
export async function getFooterNavigation() {
  const navData = await getAllNavigation()
  return navData.footer
}

/**
 * 按分类获取导航数据
 *
 * @param {string} category - 分类名称 (如: 'product', 'technology', 'company', 'banner')
 * @returns {Promise<Array>} 该分类下的导航数组
 */
export async function getNavigationByCategory(category) {
  const result = await getCmsNavPublicList({
    page: 1,
    pageSize: 100,
    order: 'sort'
  })

  if (!result.success) {
    logger.warn(`⚠️ 获取 ${category} 分类数据失败`)
    return []
  }

  logger.log(`📊 获取 ${category} 分类数据:`, result.data.length, '条')

  // 筛选指定分类的导航数据
  const categoryNavs = result.data
    .filter(nav => nav.status === '启用')
    .filter(nav => nav.category === category)
    .filter(nav => !nav.parentId || nav.parentId === 0)  // 只返回顶级导航
    .map(nav => formatNavItem(nav, result.data))

  logger.log(`✅ ${category} 分类导航数据:`, categoryNavs.length, '条')

  return categoryNavs
}

/**
 * 获取产品相关导航数据
 * @returns {Promise<Array>} 产品导航数组
 */
export async function getProductNavigation() {
  return getNavigationByCategory('product')
}

/**
 * 获取技术相关导航数据
 * @returns {Promise<Array>} 技术导航数组
 */
export async function getTechnologyNavigation() {
  return getNavigationByCategory('technology')
}

/**
 * 获取公司信息相关导航数据
 * @returns {Promise<Array>} 公司信息导航数组
 */
export async function getCompanyNavigation() {
  return getNavigationByCategory('company')
}

/**
 * 获取 Banner/轮播图数据
 * @returns {Promise<Array>} Banner 数组
 */
export async function getBannerNavigation() {
  const result = await getCmsNavPublicList({
    page: 1,
    pageSize: 100,
    order: 'sort'
  })

  if (!result.success) {
    logger.warn('⚠️ 获取 Banner 数据失败')
    return []
  }

  logger.log('📊 获取导航数据，准备提取 Banner...')

  // 找到 pageType === 'home' 的导航项，并提取 bannerList
  const homeNav = result.data.find(nav =>
    nav.status === '启用' &&
    nav.pageType === 'home' &&
    nav.moduleList?.unit1?.data?.bannerList
  )

  const banners = homeNav ? homeNav.moduleList.unit1.data.bannerList : []

  logger.log('✅ Banner 数据提取成功:', banners.length, '条')

  return banners
}

/**
 * 获取所有分类的导航数据
 *
 * @returns {Promise<Object>} 包含所有分类数据的对象
 */
export async function getAllCategorizedNavigation() {
  const result = await getCmsNavPublicList({
    page: 1,
    pageSize: 100,
    order: 'sort'
  })

  if (!result.success) {
    logger.warn('⚠️ 获取分类导航数据失败')
    return {
      all: [],
      header: [],
      footer: [],
      product: [],
      technology: [],
      company: [],
      banner: []
    }
  }

  logger.log('📊 获取到全部导航数据:', result.data.length, '条')

  const allNavs = result.data

  // 复用现有的格式化逻辑
  const headerNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.headerShow === true)
    .filter(nav => !nav.parentId || nav.parentId === 0)
    .map(nav => formatNavItem(nav, allNavs))

  const footerNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.footerShow === true)
    .filter(nav => !nav.parentId || nav.parentId === 0)
    .map(parentNav => ({
      title: parentNav.navName || '',
      links: allNavs
        .filter(childNav =>
          childNav.parentId === parentNav.ID &&
          childNav.status === '启用' &&
          childNav.footerShow === true
        )
        .map(childNav => ({
          text: childNav.navName || '',
          to: childNav.navUrl && !childNav.navUrl.startsWith('http') ? childNav.navUrl : undefined,
          href: childNav.navUrl?.startsWith('http') ? childNav.navUrl : undefined
        }))
    }))

  // 按分类获取导航
  const productNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.category === 'product')
    .filter(nav => !nav.parentId || nav.parentId === 0)
    .map(nav => formatNavItem(nav, allNavs))

  const technologyNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.category === 'technology')
    .filter(nav => !nav.parentId || nav.parentId === 0)
    .map(nav => formatNavItem(nav, allNavs))

  const companyNavs = allNavs
    .filter(nav => nav.status === '启用' && nav.category === 'company')
    .filter(nav => !nav.parentId || nav.parentId === 0)
    .map(nav => formatNavItem(nav, allNavs))

  // Banner 数据特殊处理
  const banners = allNavs
    .filter(nav => nav.status === '启用' && nav.category === 'banner')
    .sort((a, b) => (a.sort || 0) - (b.sort || 0))
    .map(nav => ({
      id: nav.ID,
      title: nav.navName || '',
      image: nav.navUrl || '',
      link: nav.link || null,
      description: nav.description || '',
      alt: nav.alt || nav.navName || ''
    }))

  logger.log('✅ 分类导航数据分配完成:')
  logger.log('  - 全部导航:', allNavs.length, '条')
  logger.log('  - Header 导航:', headerNavs.length, '条')
  logger.log('  - Footer 导航:', footerNavs.length, '条')
  logger.log('  - 产品导航:', productNavs.length, '条')
  logger.log('  - 技术导航:', technologyNavs.length, '条')
  logger.log('  - 公司导航:', companyNavs.length, '条')
  logger.log('  - Banner 数据:', banners.length, '条')

  return {
    all: allNavs,
    header: headerNavs,
    footer: footerNavs,
    product: productNavs,
    technology: technologyNavs,
    company: companyNavs,
    banner: banners
  }
}

/**
 * 获取所有页面路由配置
 * 从 CMS 导航数据中提取页面路由信息,用于动态生成路由
 *
 * @returns {Promise<Array>} 页面路由配置数组
 */
export async function getAllPageRoutes() {
  const result = await getCmsNavPublicList({
    page: 1,
    pageSize: 100,
    order: 'sort'
  })

  if (!result.success) {
    logger.warn('⚠️ 获取页面路由配置失败')
    return []
  }

  logger.log('📊 获取页面路由配置:', result.data.length, '条')

  // 提取页面级别的导航项 (parentId 为 0 或 null)
  const pageRoutes = result.data
    .filter(nav => nav.status === '启用')
    .filter(nav => !nav.parentId || nav.parentId === 0)
    .map(nav => ({
      // 路由配置
      route: nav.navUrl || '/',                    // URL 路径
      routeName: nav.routeName || nav.ID.toString(), // 路由名称
      linkType: nav.linkType || nav.navUrl?.replace('/', ''),  // 链接类型

      // 导航配置
      showInHeader: nav.headerShow || false,
      showInFooter: nav.footerShow || false,
      navLabel: nav.navName || '',
      navOrder: nav.sort || 0,

      // 页面配置
      template: nav.template || 'DefaultPage',
      category: nav.category || 'page',

      // 元数据
      meta: {
        title: nav.navName || '',
        description: nav.description || '',
        icon: nav.icon || '',
        ...nav.meta
      },

      // 扩展配置 (存储在扩展字段中)
      id: nav.ID,
      enabled: nav.status === '启用',
      modules: nav.modules || {},
      extra: nav.extra || {}
    }))
    .sort((a, b) => a.navOrder - b.navOrder)

  logger.log('✅ 页面路由配置提取完成:', pageRoutes.length, '条')

  return pageRoutes
}

/**
 * 根据 linkType 获取页面配置
 * 用于产品列表点击时获取对应的产品详情页配置
 *
 * @param {string} linkType - 链接类型 (如 'unit_pro', 'universe_series')
 * @returns {Promise<Object|null>} 页面配置对象
 */
export async function getPageByLinkType(linkType) {
  const pageRoutes = await getAllPageRoutes()

  const page = pageRoutes.find(p => p.linkType === linkType)

  if (page) {
    logger.log('✅ 找到页面配置:', linkType, '→', page.routeName)
    return page
  } else {
    logger.warn('⚠️ 未找到页面配置:', linkType)
    return null
  }
}

/**
 * 根据路由路径获取页面配置
 *
 * @param {string} routePath - 路由路径 (如 '/unit_pro', '/')
 * @returns {Promise<Object|null>} 页面配置对象
 */
export async function getPageByRoute(routePath) {
  const pageRoutes = await getAllPageRoutes()

  // 标准化路径 (确保以 / 开头)
  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`

  const page = pageRoutes.find(p => p.route === normalizedPath)

  if (page) {
    logger.log('✅ 找到页面配置:', normalizedPath, '→', page.routeName)
    return page
  } else {
    logger.warn('⚠️ 未找到页面配置:', normalizedPath)
    return null
  }
}

/**
 * 获取完整的导航和路由配置
 * 整合导航数据和路由配置,供路由生成使用
 *
 * @returns {Promise<Object>} 完整配置对象
 */
export async function getNavigationAndRoutes() {
  const [navigation, pageRoutes] = await Promise.all([
    getAllCategorizedNavigation(),
    getAllPageRoutes()
  ])

  return {
    navigation,
    routes: pageRoutes,
    // 提供便捷访问
    headerNav: navigation.header,
    footerNav: navigation.footer,
    productNav: navigation.product,
    technologyNav: navigation.technology,
    companyNav: navigation.company,
    bannerData: navigation.banner
  }
}
