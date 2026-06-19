/**
 * Blog Detail 页面 CMS 数据配置
 */

import { itemData } from './item.js'
import { unit1Data } from './unit1.js'
import { unit2Data } from './unit2.js'

export default {
  route: '/blog/:tag/:id',
  routeName: 'blog_detail',

  showInHeader: false,
  showInFooter: false,
  navLabel: 'Blog Detail',
  navOrder: 0,

  template: 'BlogDetailPage',

  meta: {
    title: 'Blog Detail - Caleaf Tech',
    description: 'CALEAF TECH blog article detail.',
  },

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
  },
}
