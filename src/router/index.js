import { createRouter, createWebHistory } from 'vue-router'
import { getCmsNavPublicList } from '@/api/cmsNav'
import { logger } from '@/utils/logger'
import { isEnabled, isTopLevel } from '@/utils/navFilter'

/**
 * pageType 到组件的映射表
 * 根据 CMS 数据中的 pageType 字段选择对应的视图组件
 */
const pageTypeComponentMap = {
  'home': () => import('@/views/Home/index.vue'),
  'technology': () => import('@/views/Technology/index.vue'),
  'contactus': () => import('@/views/ContactUs/index.vue'),
  'universe_series': () => import('@/views/Product2/index.vue'),
  'unicorn_series': () => import('@/views/Product3/index.vue'),
  'unit_pro': () => import('@/views/Product1/index.vue'),
  'dukes': () => import('@/views/Product4/index.vue'),
  'list': () => import('@/views/ProductList/index.vue'),
  'page': () => import('@/views/Page/index.vue'),
  'why_caleaf': () => import('@/views/WhyCaleaf/index.vue'),
}

/**
 * 判断 pageType 是否为有效的页面类型
 * 无效值：null、undefined、空字符串、字符串 'null'、'page'
 */
const isValidPageType = (pageType) => {
  if (!pageType || pageType === 'null' || pageType === 'page') return false
  return pageType in pageTypeComponentMap
}

export let initialCmsNavData = null

/**
 * 动态生成路由配置
 * 仅从 CMS API 获取数据
 */
async function generateRoutes() {
  // 1. 从 CMS API 获取所有导航数据
  let cmsPages = []
  try {
    const result = await getCmsNavPublicList({
      page: 1,
      pageSize: 100,
      order: 'sort'
    })

    const navList = Array.isArray(result?.data)
      ? result.data
      : (Array.isArray(result?.data?.list) ? result.data.list : [])

    const isSuccess = result?.success === true

    if (isSuccess && navList.length > 0) {
      // 保存原始数据供 Store 使用
      initialCmsNavData = navList

      // 转换 CMS 数据为路由格式
      cmsPages = navList
        .filter(nav => isEnabled(nav) || nav.status === true || nav.status === 1)
        .filter(nav => typeof nav.navUrl === 'string' && nav.navUrl.trim() !== '')
        .map(nav => ({
          route: nav.navUrl.trim().startsWith('/') ? nav.navUrl.trim() : `/${nav.navUrl.trim()}`,
          routeName: `${nav.navName}_${nav.ID}`,
          pageType: isValidPageType(nav.pageType) ? nav.pageType : 'page',
          navLabel: nav.navName,
          showInHeader: nav.headerShow === true,
          showInFooter: nav.footerShow === true,
          navOrder: nav.sort || 0,
          // 保存原始导航数据供组件使用
          moduleList: nav.moduleList,
          ID: nav.ID
        }))
    }
  } catch (error) {
    logger.error('❌ 获取 CMS 路由数据失败:', error)
  }

  // 2. 生成路由配置
  return cmsPages.map(page => {
    // 组件选择优先级：pageType
    const component = pageTypeComponentMap[page.pageType] ||
      pageTypeComponentMap['page']
    if (!component) {
      logger.warn(`⚠️ [Router] 未找到 pageType "${page.pageType}" 对应的组件，使用默认 Page 组件。路由: ${page.route}`)
    }

    return {
      path: page.route,
      name: page.routeName || page.route.replace('/', ''),
      component,
      meta: {
        pageId: page.routeName,
        pageType: page.pageType,
        showInHeader: page.showInHeader,
        showInFooter: page.showInFooter,
        navLabel: page.navLabel,
        navOrder: page.navOrder,
        ID: page.ID
      },
      props: {
        // 将页面配置传递给组件
        pageConfig: page
      }
    }
  })
}

/**
 * 静态降级路由
 * 当 CMS 中没有对应页面数据时，这些路由仍然可访问，使用本地默认数据渲染
 */
const staticFallbackRoutes = [
  {
    path: '/why_caleaf',
    name: 'why_caleaf_default',
    component: () => import('@/views/WhyCaleaf/index.vue'),
    meta: {
      pageType: 'why_caleaf',
      navLabel: 'Why Caleaf'
    },
    props: {
      pageConfig: {
        route: '/why-caleaf',
        routeName: 'WhyCaleaf_0',
        pageType: 'why_caleaf',
        moduleList: {
          unit1: { enabled: true, data: null },
          unit2: { enabled: true, data: null },
          unit3: { enabled: true, data: null },
          unit4: { enabled: true, data: null },
          unit5: { enabled: true, data: null },
          unit6: { enabled: true, data: null },
          unit7: { enabled: true, data: null },
          unit8: { enabled: true, data: null }
        }
      }
    }
  }
]

export async function createAppRouter() {
  const routes = await generateRoutes()

  // 建立静态降级路由的路径 → 路由 映射，用于比对
  const fallbackMap = new Map(
    staticFallbackRoutes.map(f => [f.path, f])
  )

  // 筛选 CMS 路由：pageType 无效或 moduleList 为空则丢弃，由降级路由兜底
  const cmsRoutePaths = new Set()
  const finalRoutes = []

  for (const route of routes) {
    const fallback = fallbackMap.get(route.path)
    if (fallback) {
      // CMS 有同路径路由，但数据不完整 → 丢弃，用降级路由
      const pageType = route.meta?.pageType
      const moduleList = route.props?.pageConfig?.moduleList
      const hasModuleData = moduleList && typeof moduleList === 'object' && Object.keys(moduleList).length > 0
      if (!isValidPageType(pageType) || !hasModuleData) {
        continue
      }
    }
    finalRoutes.push(route)
    cmsRoutePaths.add(route.path)
  }

  // 添加 CMS 中没有（或被丢弃）的静态降级路由
  const effectiveFallbacks = staticFallbackRoutes.filter(
    f => !cmsRoutePaths.has(f.path)
  )

  // CMS 有效路由在前，静态降级在后兜底
  return createRouter({
    history: createWebHistory(),
    routes: [...finalRoutes, ...effectiveFallbacks],
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  })
}

/**
 * 创建包含静态降级路由的路由器（不等待 CMS API）
 * 应用启动后立即挂载，随后异步补充 CMS 路由
 */
export function createStaticRouter() {
  return createRouter({
    history: createWebHistory(),
    routes: [...staticFallbackRoutes],
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  })
}
