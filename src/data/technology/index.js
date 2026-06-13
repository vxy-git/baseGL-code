/**
 * Technology 页面 CMS 数据配置
 */

import { technologyUnit1Data } from './technology-unit1.js'
import { technologyUnit2Data } from './technology-unit2.js'
import { technologyUnit4Data } from './technology-unit4.js'
import { technologyUnit5Data } from './technology-unit5.js'
import { technologyUnit6Data } from './technology-unit6.js'
import { technologyUnit7Data } from './technology-unit7.js'

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
      data: technologyUnit1Data,
    },
    unit2: {
      enabled: true,
      data: technologyUnit2Data,
    },
    unit4: {
      enabled: true,
      data: technologyUnit4Data,
    },
    unit5: {
      enabled: true,
      data: technologyUnit5Data,
    },
    unit6: {
      enabled: true,
      data: technologyUnit6Data,
    },
    unit7: {
      enabled: true,
      data: technologyUnit7Data,
    },
  },
}
