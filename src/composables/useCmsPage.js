/**
 * CMS 数据获取 Composable
 * 用于在页面组件中获取 CMS 数据
 */

import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPage, fetchPageByRoute } from '@/api/cms'

/**
 * CMS 页面数据 Hook
 * @param {string} pageId - 页面标识（可选，默认从路由获取）
 */
export function useCmsPage(pageId) {
  const route = useRoute()

  const pageData = ref(null)
  const commonData = ref(null)
  const loading = ref(true)
  const error = ref(null)

  /**
   * 获取页面数据
   */
  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      let result

      // 如果提供了 pageId，直接使用；否则根据路由路径查找
      if (pageId) {
        result = await fetchPage(pageId)
      } else {
        result = await fetchPageByRoute(route.path)
      }

      if (!result) {
        throw new Error(`Page not found for route: ${route.path}`)
      }

      pageData.value = result.page
      commonData.value = result.common
    } catch (e) {
      error.value = e.message
      console.error('Failed to fetch CMS data:', e)
    } finally {
      loading.value = false
    }
  }

  /**
   * 刷新页面数据
   */
  const refresh = () => {
    return fetchData()
  }

  // 组件挂载时自动获取数据
  onMounted(() => {
    fetchData()
  })

  /**
   * 获取所有启用的模块
   */
  const enabledModules = computed(() => {
    if (!pageData.value?.modules) return []

    return Object.entries(pageData.value.modules)
      .filter(([_, module]) => module.enabled)
      .map(([moduleName, module]) => ({
        name: moduleName,
        data: module.data
      }))
  })

  return {
    pageData,
    commonData,
    loading,
    error,
    refresh,
    enabledModules
  }
}

/**
 * CMS 导航数据 Hook
 * 用于获取动态导航配置
 */
export function useCmsNavigation() {
  const navigation = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchNav = async () => {
    loading.value = true
    error.value = null

    try {
      const { fetchNavigation } = await import('@/api/cms')
      navigation.value = await fetchNavigation()
    } catch (e) {
      error.value = e.message
      console.error('Failed to fetch navigation:', e)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchNav()
  })

  return {
    navigation,
    loading,
    error,
    refresh: fetchNav
  }
}
