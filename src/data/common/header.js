/**
 * Header 组件数据配置
 *
 * 注意:
 * - navItems 现在由 API 动态获取 (从 getCmsNavPublicList 接口)
 * - 本地配置作为降级方案 (API 失败时使用)
 * - logo, search, buttonText 等静态配置保持不变
 */
export const headerData = {
  /**
   * Logo 相关配置
   */
  logo: {
    default: '/assets/img/icon11.png',
    active: '/assets/img/icon11_active.png',
  },

  /**
   * 搜索图标配置
   */
  search: {
    default: '/assets/img/icon12.png',
    active: '/assets/img/icon12_active.png'
  },

  /**
   * 导航菜单项 (降级配置)
   *
   * 优先使用 API 数据,API 失败时使用此本地配置
   * Products 项特殊处理: 保留为下拉菜单类型
   */
  navItems: [
    { text: 'Products', type: 'dropdown' },
    { text: 'Technology', to: '/technology' },
    { text: 'Customize', href: '#' },
    { text: 'US Local Service', href: '#' },
    { text: 'Why Caleaf', href: '#' }
  ],

  /**
   * 按钮文本配置
   */
  buttonText: {
    contact: 'Contact',
    contactUs: 'Contact Us'
  }
}
