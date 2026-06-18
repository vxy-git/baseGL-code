/**
 * Footer 组件数据配置
 *
 * 注意:
 * - columns (导航列) 现在由 API 动态获取 (从 getCmsNavPublicList 接口)
 * - 本地配置作为降级方案 (API 失败时使用)
 * - subscribe, social, bottom 等静态配置保持不变
 */
export const footerData = {
  /**
   * Footer 列配置 (降级配置)
   *
   * 优先使用 API 数据,API 失败时使用此本地配置
   */
  columns: [
    {
      title: 'Products',
      links: [
        { text: 'For Resin/Rosin', to: { path: '/list', query: { tab: 0 } } },
        { text: 'D9 Distillate', to: { path: '/list', query: { tab: 1 } } },
      ],
    },
    {
      title: 'Technology',
      links: [{ text: 'UNICORE', to: '/technology' }],
    },
    {
      title: 'Customize',
      links: [],
    },
    {
      title: 'Why Caleaf',
      links: [],
    },
  ],

  /**
   * 订阅部分配置 (静态内容,不从 API 获取)
   */
  subscribe: {
    title: 'Subscribe',
    description: 'Get the latest news from CALEAF TECH',
    inputPlaceholder: 'Email',
    buttonText: 'Sign Up',
    privacyText: 'I agree with the',
    privacyLinkText: 'Privacy Policy',
    privacySuffix: "and I'd like to receive the latest CALEAF TECH news and deals by email.",
  },

  /**
   * 社交媒体配置 (静态内容,不从 API 获取)
   */
  social: {
    title: 'Follow',
    links: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/caleaftechofficial/',
      },
    ],
  },

  /**
   * 底部版权信息配置 (静态内容,不从 API 获取)
   */
  bottom: {
    copyright: 'Copyright © 2025 CALEAF TECH All rights reserved.',
    designer: 'Designed by HOLY',
  },
}
