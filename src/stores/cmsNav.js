import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getCmsNavPublicList } from '@/api/cmsNav'
import { logger } from '@/utils/logger'
import { isEnabled, isTopLevel, isHeaderVisible, isFooterVisible, resolveNavLink } from '@/utils/navFilter'

/**
 * CMS 导航数据 Store
 * 基于"路由驱动"架构，根据 navName 获取对应页面数据
 */
export const useCmsNavStore = defineStore('cmsNav', () => {
  // 状态
  const navList = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const isLoaded = ref(false)

  // 缓存正在进行的请求 Promise（防止并发重复请求）
  let requestPromise = null

  /**
   * 获取所有导航数据（原始列表）
   * 只在第一次调用时执行 API 请求，之后永久使用缓存
   */
  async function fetchAllNavs() {
    if (isLoaded.value && navList.value.length > 0) {
      logger.log('📦 使用缓存的 CMS 导航数据')
      return navList.value
    }

    if (requestPromise) {
      logger.log('⏳ 请求正在进行中，等待现有请求完成...')
      return await requestPromise
    }

    isLoading.value = true
    error.value = null

    try {
      logger.log('🔄 开始获取 CMS 导航数据...')

      requestPromise = getCmsNavPublicList({ page: 1, pageSize: 100, order: 'sort' })
      const result = await requestPromise

      if (!result.success) {
        throw new Error(result.msg || '获取导航数据失败')
      }

      navList.value = Array.isArray(result.data) ? result.data : []
      isLoaded.value = true

      logger.log('✅ CMS 导航数据加载完成，共', navList.value.length, '条')
      return navList.value
    } catch (err) {
      logger.error('❌ 获取 CMS 导航数据失败:', err)
      error.value = err.message || '获取导航数据失败'
      throw err
    } finally {
      isLoading.value = false
      requestPromise = null
    }
  }

  /**
   * 手动设置导航数据（用于从路由预加载的数据同步）
   */
  function setNavData(data) {
    if (data && Array.isArray(data) && data.length > 0) {
      navList.value = data
      isLoaded.value = true
      logger.log('📦 从外部同步 CMS 导航数据，共', data.length, '条')
    }
  }

  /**
   * 根据 navName 获取导航项
   */
  function getNavByName(navName) {
    if (!navList.value.length) {
      logger.warn('⚠️ 导航数据未加载，请先调用 fetchAllNavs()')
      return null
    }

    const nav = navList.value.find(n => n.navName === navName)

    if (!nav) {
      logger.warn(`⚠️ 未找到 navName='${navName}' 的导航项`)
      return null
    }

    return nav
  }

  /**
   * 根据 navName 获取页面数据（moduleList）
   */
  function getPageData(navName) {
    const nav = getNavByName(navName)
    return nav?.moduleList || null
  }

  /**
   * 根据路由路径获取导航项
   */
  function getNavByRoute(route) {
    if (!navList.value.length) {
      logger.warn('⚠️ 导航数据未加载，请先调用 fetchAllNavs()')
      return null
    }

    const normalizedPath = route.startsWith('/') ? route : `/${route}`
    const nav = navList.value.find(n => n.navUrl === normalizedPath)

    if (!nav) {
      logger.warn(`⚠️ 未找到路由='${normalizedPath}' 的导航项`)
      return null
    }

    return nav
  }

  // ========== 内部工具函数 ==========

  /** 格式化导航项为 Header/Footer 组件期望的格式 */
  function formatNavItemForDisplay(nav, allNavs) {
    const item = { text: nav.navName || '', id: nav.ID }

    if (nav.navUrl) {
      Object.assign(item, resolveNavLink(nav.navUrl, nav.target))
    }

    // 检查是否有子菜单
    const hasChildren = allNavs.some(n =>
      n.parentId === nav.ID && isEnabled(n) && n.headerShow === true
    )

    if (hasChildren) {
      if (nav.navName === 'Products') {
        // Products 只在 productCategories 有数据时才显示下拉
        if (productCategories.value && productCategories.value.length > 0) {
          item.type = 'dropdown'
        }
      } else {
        item.type = 'dropdown'
      }
    }

    return item
  }

  /** 构建 Footer 列结构 */
  function formatFooterColumn(nav, allNavs) {
    const column = { title: nav.navName || '', links: [] }

    const children = allNavs.filter(n =>
      n.parentId === nav.ID && isEnabled(n) && n.footerShow === true
    )

    column.links = children.map(child => {
      const link = { text: child.navName || '' }
      if (child.navUrl) {
        Object.assign(link, resolveNavLink(child.navUrl, child.target))
      }
      return link
    })

    // 如果没有子项且顶级本身有链接，则作为单链接展示
    if (column.links.length === 0 && nav.navUrl) {
      const topLink = { text: nav.navName || '' }
      Object.assign(topLink, resolveNavLink(nav.navUrl, nav.target))
      column.links.push(topLink)
    }

    return column
  }

  // ========== Getters ==========

  const allNavs = computed(() => navList.value)

  // Header 导航数据（筛选 headerShow === true 的顶级导航）
  const headerNavs = computed(() => {
    if (!navList.value || !Array.isArray(navList.value) || !navList.value.length) {
      return []
    }
    return navList.value
      .filter(nav => isTopLevel(nav) && isHeaderVisible(nav))
      .map(nav => formatNavItemForDisplay(nav, navList.value))
  })

  // Footer 导航数据
  const footerNavs = computed(() => {
    if (!navList.value || !Array.isArray(navList.value) || !navList.value.length) {
      return []
    }
    return navList.value
      .filter(nav => isTopLevel(nav) && isFooterVisible(nav))
      .map(nav => formatNavItemForDisplay(nav, navList.value))
  })

  // Footer 列数据
  const footerColumns = computed(() => {
    if (!navList.value || !Array.isArray(navList.value) || !navList.value.length) {
      return []
    }
    return navList.value
      .filter(nav => isTopLevel(nav) && isFooterVisible(nav))
      .map(nav => formatFooterColumn(nav, navList.value))
  })

  // Banner 数据（从 Home 页面的 moduleList 中提取）
  const bannerNavs = computed(() => {
    const homeNav = getNavByName('Home')
    return homeNav?.moduleList?.unit1?.data?.bannerList || []
  })

  // 产品分类数据（供 Nav 下拉菜单使用）
  const productCategories = computed(() => {
    if (!navList.value || !navList.value.length) return []

    const productsNav = navList.value.find(n =>
      n.navName === 'Products' && isEnabled(n)
    )

    if (!productsNav) return []

    const categories = navList.value.filter(n =>
      n.parentId === productsNav.ID && isEnabled(n) && n.headerShow === true
    )

    return categories.map(cat => {
      const products = navList.value.filter(p =>
        p.parentId === cat.ID && isEnabled(p) && p.headerShow === true
      )

      return {
        id: cat.ID,
        label: cat.navName,
        navUrl: cat.navUrl,
        products: products.map(p => {
          const itemData = p.moduleList?.item?.data || {}
          return {
            id: p.ID,
            name: itemData.name || p.navName,
            description: itemData.description || '',
            capacity: itemData.capacity || '',
            image: itemData.image || '',
            background: itemData.background || '',
            alt: itemData.name || p.navName,
            isNew: itemData.isNew || false,
            linkType: p.navUrl?.replace(/^\//, '') || '',
            navUrl: p.navUrl,
            moduleList: p.moduleList
          }
        })
      }
    })
  })

  const hasData = computed(() => isLoaded.value && navList.value.length > 0)

  return {
    // 状态
    navList,
    isLoading,
    error,
    isLoaded,

    // Actions
    fetchAllNavs,
    setNavData,
    getNavByName,
    getPageData,
    getNavByRoute,

    // Getters
    allNavs,
    headerNavs,
    footerNavs,
    footerColumns,
    bannerNavs,
    productCategories,
    hasData
  }
})
