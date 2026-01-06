/**
 * Product3 (UNICORN Series) 页面 CMS 数据配置
 */

import { product3ItemData } from './product3-item.js'
import { product3Unit1Data } from './product3-unit1.js'
import { product3Unit2Data } from './product3-unit2.js'
import { product3Unit3Data } from './product3-unit3.js'
import { product3Unit4Data } from './product3-unit4.js'
import { product3Unit5Data } from './product3-unit5.js'
import { product3Unit6Data } from './product3-unit6.js'
import { product3Unit7Data } from './product3-unit7.js'
import { product3Unit8Data } from './product3-unit8.js'
import { product3Unit9Data } from './product3-unit9.js'
import { product3Unit9BlockData } from './product3-unit9-block.js'

export default {
  // 路由配置
  route: '/unicorn_series',
  routeName: 'product3',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'UNICORN Series',
  navOrder: 5,

  // 页面模板
  template: 'ProductPage',

  // 页面元数据
  meta: {
    title: 'UNICORN Series - Caleaf',
    description: 'UNICORE powered, the way to infinite'
  },

  // 模块数据集合
  modules: {
    item: {
      enabled: true,
      data: product3ItemData
    },
    unit1: {
      enabled: true,
      data: product3Unit1Data
    },
    unit2: {
      enabled: true,
      data: product3Unit2Data
    },
    unit3: {
      enabled: true,
      data: product3Unit3Data
    },
    unit4: {
      enabled: true,
      data: product3Unit4Data
    },
    unit5: {
      enabled: true,
      data: product3Unit5Data
    },
    unit6: {
      enabled: true,
      data: product3Unit6Data
    },
    unit7: {
      enabled: true,
      data: product3Unit7Data
    },
    unit8: {
      enabled: true,
      data: product3Unit8Data
    },
    unit9: {
      enabled: true,
      data: product3Unit9Data
    },
    unit9Block: {
      enabled: true,
      data: product3Unit9BlockData
    }
  }
}
