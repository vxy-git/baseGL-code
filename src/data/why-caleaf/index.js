/**
 * Why Caleaf 页面 CMS 数据配置
 */

import { whyCaleafUnit1Data } from './why-caleaf-unit1.js'
import { whyCaleafUnit2Data } from './why-caleaf-unit2.js'
import { whyCaleafUnit3Data } from './why-caleaf-unit3.js'
import { whyCaleafUnit4Data } from './why-caleaf-unit4.js'
import { whyCaleafUnit5Data } from './why-caleaf-unit5.js'
import { whyCaleafUnit6Data } from './why-caleaf-unit6.js'
import { whyCaleafUnit7Data } from './why-caleaf-unit7.js'
import { whyCaleafUnit8Data } from './why-caleaf-unit8.js'

export default {
  // 路由配置
  route: '/why-caleaf',
  routeName: 'whyCaleaf',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'Why Caleaf',
  navOrder: 8,

  // 页面模板
  template: 'WhyCaleafPage',

  // 页面元数据
  meta: {
    title: 'Why Caleaf - Caleaf Tech',
    description: 'Beyond Limits - Discover why Caleaf Tech is the industry leader in cannabis vaporization technology'
  },

  // 模块数据集合
  modules: {
    unit1: {
      enabled: true,
      data: whyCaleafUnit1Data
    },
    unit2: {
      enabled: true,
      data: whyCaleafUnit2Data
    },
    unit3: {
      enabled: true,
      data: whyCaleafUnit3Data
    },
    unit4: {
      enabled: true,
      data: whyCaleafUnit4Data
    },
    unit5: {
      enabled: true,
      data: whyCaleafUnit5Data
    },
    unit6: {
      enabled: true,
      data: whyCaleafUnit6Data
    },
    unit7: {
      enabled: true,
      data: whyCaleafUnit7Data
    },
    unit8: {
      enabled: true,
      data: whyCaleafUnit8Data
    }
  }
}
