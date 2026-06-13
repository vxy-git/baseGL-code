/**
 * Technology 页面 CMS 数据配置
 */

import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'
import { unit4Data } from './unit4.js'
import { unit5Data } from './unit5.js'
import { unit6Data } from './unit6.js'
import { unit7Data } from './unit7.js'

export default {
  // 路由配置
  route: '/technology',
  routeName: 'technology',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'Technology',
  navOrder: 7,

  // 页面模板
  template: 'TechnologyPage',

  // 页面元数据
  meta: {
    title: 'Technology - Caleaf',
    description: 'Discover our innovative UNICORE technology',
  },

  // 模块数据集合（注：unit3 已被移除/淘汰，故跳过）
  modules: {
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
    unit7: {
      enabled: true,
      data: unit7Data,
    },
  },
}
