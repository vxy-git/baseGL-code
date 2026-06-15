/**
 * Unit Pro (UNIT Pro) 页面 CMS 数据配置
 */

import { itemData } from './item.js'
import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit3Data } from './unit3.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'
import { unit7Data } from './unit7.js'
import { unit8Data } from './unit8.js'
import { unit9Data } from './unit9.js'

export default {
  // 路由配置
  route: '/unit_pro',
  routeName: 'unit_pro',

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
    description: 'Professional vaporizer designed for rosin, from lab to award',
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
    unit3: {
      enabled: true,
      data: unit3Data,
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
    unit7: {
      enabled: true,
      data: unit7Data,
    },
    unit8: {
      enabled: true,
      data: unit8Data,
    },
    unit9: {
      enabled: true,
      data: unit9Data,
    },
  },
}
