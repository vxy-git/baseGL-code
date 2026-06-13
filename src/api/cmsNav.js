/**
 * CMS 导航 API 服务模块
 * 用于从后端获取网站导航配置数据
 */

import request from '@/utils/request'
import { logger } from '@/utils/logger'
import {
  isEnabled,
  isTopLevel,
  isHeaderVisible,
  isFooterVisible,
  isFooterChild,
  formatNavItem,
  resolveNavLink,
} from '@/utils/navFilter'

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

  const defaultParams = {
    page: 1,
    pageSize: 100,
    order: 'sort',
  }

  _pendingRequest = (async () => {
    try {
      const result = await request.get('/cmsnav/getCmsNavPublicList', {
        ...defaultParams,
        ...queryParams,
      })

      if (result.success) {
        const cached = {
          success: true,
          data: result.data?.list || [],
          total: result.data?.total,
          page: result.data?.page,
          pageSize: result.data?.pageSize,
        }
        _cachedResult = cached
        return cached
      }

      logger.error('❌ getCmsNavPublicList API 业务错误:', result.message)
      return { success: false, message: result.message, data: [] }
    } finally {
      _pendingRequest = null
    }
  })()

  return await _pendingRequest
}

// ========== 内部工具函数 ==========

/** 从全部导航列表中筛选 Header 导航（顶级 + 格式化 + 子项） */
function buildHeaderNavs(allNavs) {
  return allNavs
    .filter(nav => isTopLevel(nav) && isHeaderVisible(nav))
    .map(nav => formatNavItem(nav, { allNavs, includeIcon: true }))
}

/** 从全部导航列表中筛选 Footer 导航列结构 */
function buildFooterColumns(allNavs) {
  return allNavs
    .filter(nav => isTopLevel(nav) && isFooterVisible(nav))
    .map(parentNav => ({
      title: parentNav.navName || '',
      links: allNavs
        .filter(child => isFooterChild(child, parentNav.ID))
        .map(child => {
          const item = { text: child.navName || '' }
          if (child.navUrl) {
            Object.assign(item, resolveNavLink(child.navUrl, child.target))
          }
          return item
        }),
    }))
}

/** 按 category 筛选顶级导航 */
function buildCategoryNavs(allNavs, category) {
  return allNavs
    .filter(nav => isEnabled(nav) && nav.category === category && isTopLevel(nav))
    .map(nav => formatNavItem(nav, { allNavs, includeIcon: true }))
}

/** 构建 Banner 数据 */
function buildBanners(allNavs) {
  return allNavs
    .filter(nav => isEnabled(nav) && nav.category === 'banner')
    .sort((a, b) => (a.sort || 0) - (b.sort || 0))
    .map(nav => ({
      id: nav.ID,
      title: nav.navName || '',
      image: nav.navUrl || '',
      link: nav.link || null,
      description: nav.description || '',
      alt: nav.alt || nav.navName || '',
    }))
}

// ========== 公开 API ==========

/**
 * 获取全部导航数据并分类
 * @returns {Promise<Object>} 包含全部导航数据的对象
 */
export async function getAllNavigation() {
  const result = await getCmsNavPublicList({ page: 1, pageSize: 100, order: 'sort' })

  if (!result.success) {
    logger.warn('⚠️ 获取导航数据失败,返回空对象')
    return { all: [], header: [], footer: [] }
  }

  const allNavs = result.data
  logger.log('📊 获取到全部导航数据:', allNavs.length, '条')

  const headerNavs = buildHeaderNavs(allNavs)
  const footerNavs = buildFooterColumns(allNavs)

  logger.log('✅ 导航数据分配完成:')
  logger.log('  - 全部导航:', allNavs.length, '条')
  logger.log('  - Header 导航:', headerNavs.length, '条')
  logger.log('  - Footer 导航:', footerNavs.length, '条')

  return { all: allNavs, header: headerNavs, footer: footerNavs }
}

/**
 * 获取所有分类的导航数据（含产品、技术、公司、Banner）
 * @returns {Promise<Object>}
 */
export async function getAllCategorizedNavigation() {
  const navData = await getAllNavigation()
  const allNavs = navData.all

  if (!allNavs.length) {
    return {
      all: [],
      header: [],
      footer: [],
      product: [],
      technology: [],
      company: [],
      banner: [],
    }
  }

  const productNavs = buildCategoryNavs(allNavs, 'product')
  const technologyNavs = buildCategoryNavs(allNavs, 'technology')
  const companyNavs = buildCategoryNavs(allNavs, 'company')
  const banners = buildBanners(allNavs)

  logger.log('✅ 分类导航数据分配完成:')
  logger.log('  - Header 导航:', navData.header.length, '条')
  logger.log('  - Footer 导航:', navData.footer.length, '条')
  logger.log('  - 产品导航:', productNavs.length, '条')
  logger.log('  - 技术导航:', technologyNavs.length, '条')
  logger.log('  - 公司导航:', companyNavs.length, '条')
  logger.log('  - Banner 数据:', banners.length, '条')

  return {
    all: allNavs,
    header: navData.header,
    footer: navData.footer,
    product: productNavs,
    technology: technologyNavs,
    company: companyNavs,
    banner: banners,
  }
}

/**
 * 获取 Header 导航数据（向后兼容的简化版本）
 */
export async function getHeaderNavigation() {
  const navData = await getAllNavigation()
  return navData.header
}

/**
 * 获取 Footer 导航数据（向后兼容的简化版本）
 */
export async function getFooterNavigation() {
  const navData = await getAllNavigation()
  return navData.footer
}

/**
 * 按分类获取导航数据
 */
export async function getNavigationByCategory(category) {
  const result = await getCmsNavPublicList({ page: 1, pageSize: 100, order: 'sort' })

  if (!result.success) {
    logger.warn(`⚠️ 获取 ${category} 分类数据失败`)
    return []
  }

  logger.log(`📊 获取 ${category} 分类数据:`, result.data.length, '条')
  const categoryNavs = buildCategoryNavs(result.data, category)
  logger.log(`✅ ${category} 分类导航数据:`, categoryNavs.length, '条')

  return categoryNavs
}

/**
 * 获取产品/技术/公司相关导航数据
 */
export const getProductNavigation = () => getNavigationByCategory('product')
export const getTechnologyNavigation = () => getNavigationByCategory('technology')
export const getCompanyNavigation = () => getNavigationByCategory('company')

/**
 * 获取 Banner/轮播图数据
 */
export async function getBannerNavigation() {
  const result = await getCmsNavPublicList({ page: 1, pageSize: 100, order: 'sort' })

  if (!result.success) {
    logger.warn('⚠️ 获取 Banner 数据失败')
    return []
  }

  logger.log('📊 获取导航数据，准备提取 Banner...')

  const homeNav = result.data.find(
    nav => isEnabled(nav) && nav.pageType === 'home' && nav.moduleList?.unit1?.data?.bannerList
  )

  const banners = homeNav ? homeNav.moduleList.unit1.data.bannerList : []
  logger.log('✅ Banner 数据提取成功:', banners.length, '条')

  return banners
}

/**
 * 获取所有页面路由配置
 * 从 CMS 导航数据中提取页面路由信息,用于动态生成路由
 */
export async function getAllPageRoutes() {
  const result = await getCmsNavPublicList({ page: 1, pageSize: 100, order: 'sort' })

  if (!result.success) {
    logger.warn('⚠️ 获取页面路由配置失败')
    return []
  }

  logger.log('📊 获取页面路由配置:', result.data.length, '条')

  const pageRoutes = result.data
    .filter(nav => isEnabled(nav) && isTopLevel(nav))
    .map(nav => ({
      route: nav.navUrl || '/',
      routeName: nav.routeName || nav.ID.toString(),
      linkType: nav.linkType || nav.navUrl?.replace('/', ''),
      showInHeader: nav.headerShow || false,
      showInFooter: nav.footerShow || false,
      navLabel: nav.navName || '',
      navOrder: nav.sort || 0,
      template: nav.template || 'DefaultPage',
      category: nav.category || 'page',
      meta: {
        title: nav.navName || '',
        description: nav.description || '',
        icon: nav.icon || '',
        ...nav.meta,
      },
      id: nav.ID,
      enabled: isEnabled(nav),
      modules: nav.modules || {},
      extra: nav.extra || {},
    }))
    .sort((a, b) => a.navOrder - b.navOrder)

  logger.log('✅ 页面路由配置提取完成:', pageRoutes.length, '条')

  return pageRoutes
}

/**
 * 根据 linkType 获取页面配置
 */
export async function getPageByLinkType(linkType) {
  const pageRoutes = await getAllPageRoutes()
  const page = pageRoutes.find(p => p.linkType === linkType)

  if (page) {
    logger.log('✅ 找到页面配置:', linkType, '→', page.routeName)
  } else {
    logger.warn('⚠️ 未找到页面配置:', linkType)
  }
  return page || null
}

/**
 * 根据路由路径获取页面配置
 */
export async function getPageByRoute(routePath) {
  const pageRoutes = await getAllPageRoutes()
  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`
  const page = pageRoutes.find(p => p.route === normalizedPath)

  if (page) {
    logger.log('✅ 找到页面配置:', normalizedPath, '→', page.routeName)
  } else {
    logger.warn('⚠️ 未找到页面配置:', normalizedPath)
  }
  return page || null
}

/**
 * 获取完整的导航和路由配置
 */
export async function getNavigationAndRoutes() {
  const [navigation, pageRoutes] = await Promise.all([
    getAllCategorizedNavigation(),
    getAllPageRoutes(),
  ])

  return {
    navigation,
    routes: pageRoutes,
    headerNav: navigation.header,
    footerNav: navigation.footer,
    productNav: navigation.product,
    technologyNav: navigation.technology,
    companyNav: navigation.company,
    bannerData: navigation.banner,
  }
}
