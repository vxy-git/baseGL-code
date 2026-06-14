/**
 * Dukes (DUKES) 页面 CMS 数据配置
 */

import { itemData } from './item.js'
import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'
import { unit8Data } from './unit8.js'
import { unit9Data } from './unit9.js'
import { unit10Data } from './unit10.js'
import { unit11Data } from './unit11.js'
import { unit12Data } from './unit12.js'

export default {
  // 路由配置
  route: '/dukes',
  routeName: 'dukes',

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
      data: itemData,
    },
    unit1: {
      enabled: true,
      data: unit1Data,
    },
    unit2: {
      enabled: true,
      data: unit2Data,
    },
    unit4: {
      enabled: true,
      data: unit4Data,
    },
    unit5: {
      enabled: true,
      data: unit5Data,
    },
    unit6: {
      enabled: true,
      data: unit6Data,
    },
    unit8: {
      enabled: true,
      data: unit8Data,
    },
    unit9: {
      enabled: true,
      data: unit9Data,
    },
    unit10: {
      enabled: true,
      data: unit10Data,
    },
    unit11: {
      enabled: true,
      data: unit11Data,
    },
    unit12: {
      enabled: true,
      data: unit12Data,
    },
  },
}
