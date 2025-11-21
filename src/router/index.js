import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('@/views/ContactUs/index.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import('@/views/Technology/index.vue')
  },
  {
    path: '/list',
    name: 'ProductList',
    component: () => import('@/views/ProductList/index.vue')
  },
  {
    path: '/product1',
    name: 'Product1',
    component: () => import('@/views/Product1/index.vue')
  },
  {
    path: '/product2',
    name: 'Product2',
    component: () => import('@/views/Product2/index.vue')
  },
  {
    path: '/product3',
    name: 'Product3',
    component: () => import('@/views/Product3/index.vue')
  },
  {
    path: '/product4',
    name: 'Product4',
    component: () => import('@/views/Product4/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到页面顶部，即使是浏览器前进/后退
    return { top: 0 }
  }
})

export default router
