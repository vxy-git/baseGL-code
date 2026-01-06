import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getCmsNavPublicList } from '@/api/cmsNav'

/**
 * CMS 导航数据 Store
 * 基于"路由驱动"架构，根据 navName 获取对应页面数据
 */
export const useCmsNavStore = defineStore('cmsNav', () => {
  // 状态：存储所有导航项的原始数据列表
  const navList = ref([])

  // 状态：加载状态
  const isLoading = ref(false)

  // 状态：错误信息
  const error = ref(null)

  // 状态：是否已加载过数据（用于永久缓存判断）
  const isLoaded = ref(false)

  // 缓存正在进行的请求 Promise（防止并发重复请求）
  let requestPromise = null

  /**
   * 获取所有导航数据（原始列表）
   * 只在第一次调用时执行 API 请求，之后永久使用缓存
   * 使用 Promise 缓存机制防止并发调用时的重复请求
   */
  async function fetchAllNavs() {
    // 如果已经加载过，直接返回缓存数据
    if (isLoaded.value && navList.value.length > 0) {
      console.log('📦 使用缓存的 CMS 导航数据')
      return navList.value
    }

    // 如果有请求正在进行，等待该请求完成（防止并发重复请求）
    if (requestPromise) {
      console.log('⏳ 请求正在进行中，等待现有请求完成...')
      return await requestPromise
    }

    isLoading.value = true
    error.value = null

    try {
      console.log('🔄 开始获取 CMS 导航数据...')

      // 创建请求 Promise 并缓存
      requestPromise = getCmsNavPublicList({
        page: 1,
        pageSize: 100,
        order: 'sort'
      })
      const result = await requestPromise

      if (!result.success) {
        throw new Error(result.msg || '获取导航数据失败')
      }

      // 存储原始导航列表（确保是数组）
      navList.value = Array.isArray(result.data) ? result.data : []
      isLoaded.value = true

      console.log('✅ CMS 导航数据加载完成，共', navList.value.length, '条')

      return navList.value
    } catch (err) {
      console.error('❌ 获取 CMS 导航数据失败:', err)
      error.value = err.message || '获取导航数据失败'
      throw err
    } finally {
      isLoading.value = false
      // 清除缓存的 Promise，允许后续重新请求
      requestPromise = null
    }
  }

  /**
   * 手动设置导航数据（用于从路由预加载的数据同步）
   * @param {Array} data - 导航列表数据
   */
  function setNavData(data) {
    if (data && Array.isArray(data) && data.length > 0) {
      navList.value = data
      isLoaded.value = true
      console.log('📦 从外部同步 CMS 导航数据，共', data.length, '条')
    }
  }

  /**
   * 根据 navName 获取导航项
   * @param {string} navName - 导航名称，如 'Home', 'Technology'
   * @returns {Object|null} 导航项对象
   */
  function getNavByName(navName) {
    if (!navList.value.length) {
      console.warn('⚠️ 导航数据未加载，请先调用 fetchAllNavs()')
      return null
    }

    const nav = navList.value.find(n => n.navName === navName)

    if (!nav) {
      console.warn(`⚠️ 未找到 navName='${navName}' 的导航项`)
      return null
    }

    return nav
  }

  /**
   * 根据 navName 获取页面数据（moduleList）
   * @param {string} navName - 导航名称
   * @returns {Object|null} 页面 moduleList 数据
   */
  function getPageData(navName) {
    const nav = getNavByName(navName)
    return nav?.moduleList || null
  }

  /**
   * 根据路由路径获取导航项
   * @param {string} route - 路由路径，如 '/', '/technology'
   * @returns {Object|null} 导航项对象
   */
  function getNavByRoute(route) {
    if (!navList.value.length) {
      console.warn('⚠️ 导航数据未加载，请先调用 fetchAllNavs()')
      return null
    }

    // 标准化路径
    const normalizedPath = route.startsWith('/') ? route : `/${route}`

    const nav = navList.value.find(n => n.navUrl === normalizedPath)

    if (!nav) {
      console.warn(`⚠️ 未找到路由='${normalizedPath}' 的导航项`)
      return null
    }

    return nav
  }

  /**
   * 格式化导航项为 Header 组件期望的格式
   * @param {Object} nav - 原始导航对象
   * @param {Array} allNavs - 所有导航列表（用于查找子菜单）
   * @returns {Object} 格式化后的导航项
   */
  function formatNavItemForHeader(nav, allNavs) {
    const item = {
      text: nav.navName || '',
      id: nav.ID
    }

    // 处理导航链接
    if (nav.navUrl) {
      // 判断是外部链接还是内部路由
      if (nav.navUrl.startsWith('http://') || nav.navUrl.startsWith('https://')) {
        item.href = nav.navUrl
        item.target = nav.target || '_blank'
      } else {
        item.to = nav.navUrl.startsWith('/') ? nav.navUrl : `/${nav.navUrl}`
        item.target = nav.target || '_self'
      }
    }

    // 检查是否有子菜单
    const hasChildren = allNavs.some(n =>
      n.parentId === nav.ID &&
      n.status === '启用' &&
      n.headerShow === true
    )

    if (hasChildren) {
      item.type = 'dropdown'
    }

    return item
  }

  /**
   * Getters: 提供便捷访问各类导航数据
   */

  // 所有导航数据
  const allNavs = computed(() => navList.value)

  // Header 导航数据（筛选 headerShow === true 的顶级导航，并格式化）
  const headerNavs = computed(() => {
    // 防御性检查：确保 navList 存在且是数组
    if (!navList.value || !Array.isArray(navList.value) || !navList.value.length) {
      return []
    }

    return navList.value
      .filter(nav =>
        nav.status === '启用' &&
        nav.headerShow === true &&
        (!nav.parentId || nav.parentId === 0)
      )
      .map(nav => formatNavItemForHeader(nav, navList.value))
  })

  // Footer 导航数据（筛选 footerShow === true 的顶级导航，并格式化）
  const footerNavs = computed(() => {
    // 防御性检查：确保 navList 存在且是数组
    if (!navList.value || !Array.isArray(navList.value) || !navList.value.length) {
      return []
    }

    return navList.value
      .filter(nav =>
        nav.status === '启用' &&
        nav.footerShow === true &&
        (!nav.parentId || nav.parentId === 0)
      )
      .map(nav => formatNavItemForHeader(nav, navList.value))
  })

  /**
   * 将顶级 Footer 导航项格式化为列结构
   * @param {Object} nav - 顶级导航
   * @param {Array} allNavs - 所有导航列表
   * @returns {{title: string, links: Array<{text: string, to?: any, href?: string, target?: string}>}}
   */
  function formatFooterColumn(nav, allNavs) {
    const column = {
      title: nav.navName || '',
      links: []
    }

    // 查找子项（仅一层）
    const children = allNavs.filter(n =>
      n.parentId === nav.ID &&
      n.status === '启用' &&
      n.footerShow === true
    )

    // 子项转链接
    column.links = children.map(child => {
      const link = {
        text: child.navName || ''
      }
      if (child.navUrl) {
        if (child.navUrl.startsWith('http://') || child.navUrl.startsWith('https://')) {
          link.href = child.navUrl
          link.target = child.target || '_blank'
        } else {
          link.to = child.navUrl.startsWith('/') ? child.navUrl : `/${child.navUrl}`
          link.target = child.target || '_self'
        }
      }
      return link
    })

    // 如果没有子项且顶级本身有链接，则作为单链接展示
    if (column.links.length === 0 && nav.navUrl) {
      const topLink = {
        text: nav.navName || ''
      }
      if (nav.navUrl.startsWith('http://') || nav.navUrl.startsWith('https://')) {
        topLink.href = nav.navUrl
        topLink.target = nav.target || '_blank'
      } else {
        topLink.to = nav.navUrl.startsWith('/') ? nav.navUrl : `/${nav.navUrl}`
        topLink.target = nav.target || '_self'
      }
      column.links.push(topLink)
    }

    return column
  }

  // Footer 列数据（按顶级导航分列，并包含其子链接）
  const footerColumns = computed(() => {
    if (!navList.value || !Array.isArray(navList.value) || !navList.value.length) {
      return []
    }
    const topLevel = navList.value.filter(nav =>
      nav.status === '启用' &&
      nav.footerShow === true &&
      (!nav.parentId || nav.parentId === 0)
    )
    return topLevel.map(nav => formatFooterColumn(nav, navList.value))
  })

  // Banner 数据（从 Home 页面的 moduleList 中提取）
  const bannerNavs = computed(() => {
    const homeNav = getNavByName('Home')
    return homeNav?.moduleList?.unit1?.data?.bannerList || []
  })

  // 判断数据是否已加载
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
    hasData
  }
})
