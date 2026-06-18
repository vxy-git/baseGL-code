/**
 * Blog 页面 CMS 数据配置
 */

import { listData } from './list.js'

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
    unit: {
      enabled: true,
      data: listData,
    },
  },
}
