/**
 * Product1 (UNIT Pro) 页面 CMS 数据配置
 */

import { product1ItemData } from './product1-item.js'
import { product1Unit1Data } from './product1-unit1.js'
import { product1Unit2Data } from './product1-unit2.js'
import { product1Unit3Data } from './product1-unit3.js'
import { product1Unit4Data } from './product1-unit4.js'
import { product1Unit5Data } from './product1-unit5.js'
import { product1Unit6Data } from './product1-unit6.js'
import { product1Unit7Data } from './product1-unit7.js'
import { product1Unit8Data } from './product1-unit8.js'
import { product1Unit9Data } from './product1-unit9.js'

export default {
  // 路由配置
  route: '/unit_pro',
  routeName: 'product1',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'UNIT Pro',
  navOrder: 3,

  // 页面模板
  template: 'ProductPage',

  // 页面元数据
  meta: {
    title: 'UNIT Pro - Caleaf',
    description: 'Professional vaporizer designed for rosin, from lab to award'
  },

  // 模块数据集合
  modules: {
    item: {
      enabled: true,
      data: product1ItemData
    },
    unit1: {
      enabled: true,
      data: product1Unit1Data
    },
    unit2: {
      enabled: true,
      data: product1Unit2Data
    },
    unit3: {
      enabled: true,
      data: product1Unit3Data
    },
    unit4: {
      enabled: true,
      data: product1Unit4Data
    },
    unit5: {
      enabled: true,
      data: product1Unit5Data
    },
    unit6: {
      enabled: true,
      data: product1Unit6Data
    },
    unit7: {
      enabled: true,
      data: product1Unit7Data
    },
    unit8: {
      enabled: true,
      data: product1Unit8Data
    },
    unit9: {
      enabled: true,
      data: product1Unit9Data
    }
  }
}
