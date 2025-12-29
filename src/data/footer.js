/**
 * Footer 组件数据配置
 */
export const footerData = {
  /**
   * Footer 列配置
   */
  columns: [
    {
      title: 'Products',
      links: [
        { text: 'For Resin/Rosin', to: { path: '/list', query: { tab: 0 } } },
        { text: 'D9 Distillate', to: { path: '/list', query: { tab: 1 } } }
      ]
    },
    {
      title: 'Technology',
      links: [
        { text: 'UNICORE', to: '/technology' }
      ]
    },
    {
      title: 'Customize',
      links: []
    },
    {
      title: 'Why Caleaf',
      links: []
    }
  ],

  /**
   * 订阅部分配置
   */
  subscribe: {
    title: 'Subscribe',
    description: 'Get the latest news from CALEAF TECH',
    inputPlaceholder: 'Email',
    buttonText: 'Sign Up',
    privacyText: 'I agree with the',
    privacyLinkText: 'Privacy Policy',
    privacySuffix: "and I'd like to receive the latest CALEAF TECH news and deals by email."
  },

  /**
   * 社交媒体配置
   */
  social: {
    title: 'Follow',
    links: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/caleaftechofficial/',
        ariaLabel: 'Instagram'
      }
    ]
  },

  /**
   * 底部版权信息配置
   */
  bottom: {
    copyright: 'Copyright © 2025 CALEAF TECH All rights reserved.',
    designer: 'Designed by HOLY'
  }
}
