import { createRouter, createWebHistory } from 'vue-router'
import { fetchAllPages } from '@/api/cms'
import { getCmsNavPublicList } from '@/api/cmsNav'
import { useCmsNavStore } from '@/stores/cmsNav'

/**
 * pageType 到组件的映射表
 * 根据 CMS 数据中的 pageType 字段选择对应的视图组件
 */
const pageTypeComponentMap = {
  'home': () => import('@/views/Home/index.vue'),
  'technology': () => import('@/views/Technology/index.vue'),
  'contactus': () => import('@/views/ContactUs/index.vue'),
  'list': () => import('@/views/ProductList/index.vue'),
  'product': () => import('@/views/Product1/index.vue'), // 通用产品页
}

/**
 * 动态生成路由配置
 * 优先使用本地配置，如果本地配置不足则从 CMS API 补充
 */
async function generateRoutes() {
  // 1. 获取本地配置的路由
  const { pages: localPages } = await fetchAllPages()

  // 2. 从 CMS API 获取所有导航数据
  let cmsPages = []
  try {
    const result = await getCmsNavPublicList({
      page: 1,
      pageSize: 100,
      order: 'sort'
    })

    if (result.success && result.data) {
      // 转换 CMS 数据为路由格式
      cmsPages = result.data
        .filter(nav => nav.status === '启用')
        .map(nav => ({
          route: nav.navUrl.startsWith('/') ? nav.navUrl : `/${nav.navUrl}`,
          routeName: nav.navName, // 使用 navName 作为 routeName
          pageType: nav.pageType || 'home',
          template: nav.pageType === 'home' ? 'HomePage' : undefined,
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
    console.error('❌ 获取 CMS 路由数据失败，仅使用本地配置:', error)
  }

  // 3. 合并本地配置和 CMS 数据
  // 本地配置作为基础，CMS 数据作为补充
  const localRoutesMap = new Map()
  localPages.forEach(page => {
    localRoutesMap.set(page.route, page)
  })

  // 添加 CMS 路由（如果本地没有该路由）
  cmsPages.forEach(cmsPage => {
    if (!localRoutesMap.has(cmsPage.route)) {
      localRoutesMap.set(cmsPage.route, cmsPage)
    }
  })

  const allPages = Array.from(localRoutesMap.values())

  // 4. 生成路由配置
  return allPages.map(page => {
    // 本地组件映射表（用于向后兼容）
    const templateComponentMap = {
      'HomePage': () => import('@/views/Home/index.vue'),
      'ProductPage': () => import('@/views/Product1/index.vue'),
      'ProductListPage': () => import('@/views/ProductList/index.vue'),
      'TechnologyPage': () => import('@/views/Technology/index.vue'),
      'ContactPage': () => import('@/views/ContactUs/index.vue')
    }

    // routeName 映射表（用于向后兼容）
    const componentMap = {
      'home': () => import('@/views/Home/index.vue'),
      'product1': () => import('@/views/Product1/index.vue'),
      'product2': () => import('@/views/Product2/index.vue'),
      'product3': () => import('@/views/Product3/index.vue'),
      'product4': () => import('@/views/Product4/index.vue'),
      'productlist': () => import('@/views/ProductList/index.vue'),
      'technology': () => import('@/views/Technology/index.vue'),
      'contactus': () => import('@/views/ContactUs/index.vue')
    }

    // 组件选择优先级：routeName → template → pageType
    const component = componentMap[page.routeName] ||
                      templateComponentMap[page.template] ||
                      pageTypeComponentMap[page.pageType] ||
                      componentMap['home'] // 默认使用 Home 组件

    return {
      path: page.route,
      name: page.routeName || page.route.replace('/', ''),
      component,
      meta: {
        ...page.meta,
        pageId: page.routeName,
        template: page.template,
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

const router = createRouter({
  history: createWebHistory(),
  routes: await generateRoutes(),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到页面顶部，即使是浏览器前进/后退
    return { top: 0 }
  }
})

export default router
