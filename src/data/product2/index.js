/**
 * Product2 (UNIVERSE Series) 页面 CMS 数据配置
 */

import { product2ItemData } from './product2-item.js'
import { product2Unit1Data } from './product2-unit1.js'
import { product2Unit2Data } from './product2-unit2.js'
import { product2Unit3Data } from './product2-unit3.js'
import { product2Unit4Data } from './product2-unit4.js'
import { product2Unit5Data } from './product2-unit5.js'
import { product2Unit6Data } from './product2-unit6.js'
import { product2Unit7Data } from './product2-unit7.js'
import { product2Unit8Data } from './product2-unit8.js'
import { product2GsapUData } from './product2-gsapu.js'

export default {
  // 路由配置
  route: '/universe_series',
  routeName: 'product2',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'UNIVERSE Series',
  navOrder: 4,

  // 页面模板
  template: 'ProductPage',

  // 页面元数据
  meta: {
    title: 'UNIVERSE Series - Caleaf',
    description: 'UNICORE powered, the way to infinite'
  },

  // 模块数据集合
  modules: {
    item: {
      enabled: true,
      data: product2ItemData
    },
    unit1: {
      enabled: true,
      data: product2Unit1Data
    },
    unit2: {
      enabled: true,
      data: product2Unit2Data
    },
    unit3: {
      enabled: true,
      data: product2Unit3Data
    },
    unit4: {
      enabled: true,
      data: product2Unit4Data
    },
    unit5: {
      enabled: true,
      data: product2Unit5Data
    },
    unit6: {
      enabled: true,
      data: product2Unit6Data
    },
    unit7: {
      enabled: true,
      data: product2Unit7Data
    },
    unit8: {
      enabled: true,
      data: product2Unit8Data
    },
    gsapu: {
      enabled: true,
      data: product2GsapUData
    }
  }
}
