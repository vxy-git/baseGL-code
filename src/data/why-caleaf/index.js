/**
 * Why Caleaf 页面 CMS 数据配置
 */

import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit3Data } from './unit3.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'
import { unit7Data } from './unit7.js'
import { unit8Data } from './unit8.js'

export default {
  // 路由配置
  route: '/why-caleaf',
  routeName: 'whyCaleaf',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'Why Caleaf',
  navOrder: 9,

  // 页面模板
  template: 'WhyCaleafPage',

  // 页面元数据
  meta: {
    title: 'Why Caleaf - Caleaf Tech',
    description:
      'Beyond Limits - Discover why Caleaf Tech is the industry leader in cannabis vaporization technology',
  },

  // 模块数据集合
  modules: {
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
  },
}
