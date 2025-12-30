/**
 * Home 页面 CMS 数据配置
 * 包含路由、导航、模板和模块数据
 */

import { homeUnit1Data } from './home-unit1.js'
import { homeUnit2Data } from './home-unit2.js'
import { homeUnit3Data } from './home-unit3.js'
import { homeUnit4Data } from './home-unit4.js'
import { homeUnit5Data } from './home-unit5.js'
import { homeUnit6Data } from './home-unit6.js'

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
    description: 'Discover Caleaf\'s innovative vaporizer series featuring UNICORE technology'
  },

  // ==================== 模块数据集合 ====================
  modules: {
    unit1: {
      enabled: true,
      data: homeUnit1Data
    },
    unit2: {
      enabled: true,
      data: homeUnit2Data
    },
    unit3: {
      enabled: true,
      data: homeUnit3Data
    },
    unit4: {
      enabled: true,
      data: homeUnit4Data
    },
    unit5: {
      enabled: true,
      data: homeUnit5Data
    },
    unit6: {
      enabled: true,
      data: homeUnit6Data
    }
  }
}
