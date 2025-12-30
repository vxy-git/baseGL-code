import { createRouter, createWebHistory } from 'vue-router'
import { fetchAllPages } from '@/api/cms'

/**
 * 动态生成路由配置
 * 根据 CMS 数据生成路由
 */
async function generateRoutes() {
  const { pages } = await fetchAllPages()

  return pages.map(page => {
    // 根据模板类型映射到对应的视图组件
    const templateComponentMap = {
      'HomePage': () => import('@/views/Home/index.vue'),
      'ProductPage': () => import('@/views/Product1/index.vue'), // 暂时使用 Product1 作为通用产品页
      'ProductListPage': () => import('@/views/ProductList/index.vue'),
      'TechnologyPage': () => import('@/views/Technology/index.vue'),
      'ContactPage': () => import('@/views/ContactUs/index.vue')
    }

    // 根据页面 ID 映射到具体组件
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

    return {
      path: page.route,
      name: page.routeName,
      component: componentMap[page.routeName] || templateComponentMap[page.template],
      meta: {
        ...page.meta,
        pageId: page.routeName,
        template: page.template
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
