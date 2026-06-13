/**
 * Home 页面 CMS 数据配置
 * 包含路由、导航、模板和模块数据
 */

import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit3Data } from './unit3.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'

export default {
  // ==================== 路由配置 ====================
  route: '/',
  routeName: 'home',

  // ==================== 导航配置 ====================
  showInHeader: true,
  showInFooter: false,
  navLabel: 'Home',
  navOrder: 1,

  // ==================== 页面模板 ====================
  template: 'HomePage',

  // ==================== 页面元数据 ====================
  meta: {
    title: 'Caleaf - Premium Vaporizer Technology',
    description: "Discover Caleaf's innovative vaporizer series featuring UNICORE technology",
  },

  // ==================== 模块数据集合 ====================
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
  },
}
