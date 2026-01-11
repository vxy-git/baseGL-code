import { createRouter, createWebHistory } from 'vue-router'
import { getCmsNavPublicList } from '@/api/cmsNav'

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

    const isSuccess = result?.success === true || result?.code === 0

    if (isSuccess && navList.length > 0) {
      // 保存原始数据供 Store 使用
      initialCmsNavData = navList
      
      // 转换 CMS 数据为路由格式
      cmsPages = navList
        .filter(nav => nav.status === '启用' || nav.status === true || nav.status === 1)
        .filter(nav => typeof nav.navUrl === 'string' && nav.navUrl.trim() !== '')
        .map(nav => ({
          route: nav.navUrl.trim().startsWith('/') ? nav.navUrl.trim() : `/${nav.navUrl.trim()}`,
          routeName: `${nav.navName}_${nav.ID}`,
          pageType: nav.pageType || 'page',
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
    console.error('❌ 获取 CMS 路由数据失败:', error)
  }

  // 2. 生成路由配置
  return cmsPages.map(page => {
    // 组件选择优先级：pageType
    const component = pageTypeComponentMap[page.pageType] ||
                      pageTypeComponentMap['page']
    if (!component) {
      console.warn(`⚠️ [Router] 未找到 pageType "${page.pageType}" 对应的组件，使用默认 Page 组件。路由: ${page.route}`)
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

export async function createAppRouter() {
  const routes = await generateRoutes()
  return createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  })
}
