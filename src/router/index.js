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
  },{
    path: '/product5',
    name: 'Product5',
    component: () => import('@/views/Product5/Product5.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import('@/views/Nav.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
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
    path: '/technology',
    name: 'Technology',
    component: () => import('@/views/Technology/Technology.vue')
  },
  {
    path: '/product-detail3',
    name: 'product-detail3',
    component: () => import('@/views/product-detail3/index.vue')
  },
  {
    path: '/product-detail2',
    name: 'product-detail2',
    component: () => import('@/views/product-detail2/index.vue')
  }
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
