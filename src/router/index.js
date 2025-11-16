import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/Product/Product.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import('@/views/Nav.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: () => import('@/views/ProductList.vue')
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/product-detail2',
    name: 'ProductDetail2',
    component: () => import('@/views/ProductDetail2.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  // {
  //   path: '/technology',
  //   name: 'Technology',
  //   component: () => import('@/views/technology.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
