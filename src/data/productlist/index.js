/**
 * ProductList 页面 CMS 数据配置
 */

import { productsData } from './products.js'
import { productListData } from './productlist.js'

export default {
  // 路由配置
  route: '/list',
  routeName: 'productlist',

  // 导航配置
  showInHeader: true,
  showInFooter: false,
  navLabel: 'Products',
  navOrder: 2,

  // 页面模板
  template: 'ProductListPage',

  // 页面元数据
  meta: {
    title: 'Products - Caleaf',
    description: 'Explore our full range of premium vaporizers'
  },

  // 模块数据集合
  modules: {
    products: {
      enabled: true,
      data: productsData
    },
    productlist: {
      enabled: true,
      data: productListData
    }
  }
}
