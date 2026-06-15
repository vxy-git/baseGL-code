/**
 * Blog 页面 CMS 数据配置
 */

import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'

export default {
  route: '/blog',
  routeName: 'blog',

  showInHeader: true,
  showInFooter: true,
  navLabel: 'Blog',
  navOrder: 7,

  template: 'BlogPage',

  meta: {
    title: 'Blog - Caleaf Tech',
    description: 'CALEAF TECH blog, news, tips and community stories.',
  },

  modules: {
    unit1: {
      enabled: true,
      data: unit1Data,
    },
    unit2: {
      enabled: true,
      data: unit2Data,
    },
  },
}
