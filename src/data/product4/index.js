/**
 * Product4 (DUKES) 页面 CMS 数据配置
 */

import { product4ItemData } from './product4-item.js'
import { product4Unit1Data } from './product4-unit1.js'
import { product4Unit2Data } from './product4-unit2.js'
import { product4Unit4Data } from './product4-unit4.js'
import { product4Unit5Data } from './product4-unit5.js'
import { product4Unit6Data } from './product4-unit6.js'
import { product4Unit8Data } from './product4-unit8.js'
import { product4Unit9Data } from './product4-unit9.js'
import { product4Unit10Data } from './product4-unit10.js'
import { product4Unit11Data } from './product4-unit11.js'
import { product4Unit12Data } from './product4-unit12.js'

export default {
  // 路由配置
  route: '/dukes',
  routeName: 'product4',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'DUKES',
  navOrder: 6,

  // 页面模板
  template: 'ProductPage',

  // 页面元数据
  meta: {
    title: 'DUKES - Caleaf',
    description: 'The best of both worlds, every puff with more hits',
  },

  // 模块数据集合
  modules: {
    item: {
      enabled: true,
      data: product4ItemData,
    },
    unit1: {
      enabled: true,
      data: product4Unit1Data,
    },
    unit2: {
      enabled: true,
      data: product4Unit2Data,
    },
    unit4: {
      enabled: true,
      data: product4Unit4Data,
    },
    unit5: {
      enabled: true,
      data: product4Unit5Data,
    },
    unit6: {
      enabled: true,
      data: product4Unit6Data,
    },
    unit8: {
      enabled: true,
      data: product4Unit8Data,
    },
    unit9: {
      enabled: true,
      data: product4Unit9Data,
    },
    unit10: {
      enabled: true,
      data: product4Unit10Data,
    },
    unit11: {
      enabled: true,
      data: product4Unit11Data,
    },
    unit12: {
      enabled: true,
      data: product4Unit12Data,
    },
  },
}
