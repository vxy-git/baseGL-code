/**
 * ContactUs 页面 CMS 数据配置
 */

import { data } from './data.js'

export default {
  // 路由配置
  route: '/contact',
  routeName: 'contactus',

  // 导航配置
  showInHeader: true,
  showInFooter: true,
  navLabel: 'Contact Us',
  navOrder: 8,

  // 页面模板
  template: 'ContactPage',

  // 页面元数据
  meta: {
    title: 'Contact Us - Caleaf',
    description: 'Get in touch with the Caleaf team',
  },

  // 模块数据集合
  modules: {
    contactus: {
      enabled: true,
      data: data,
    },
  },
}
