/**
 * Header 组件数据配置
 */
export const headerData = {
  /**
   * Logo 相关配置
   */
  logo: {
    default: '/assets/img/icon11.png',
    active: '/assets/img/icon11_active.png',
    text: 'CALEAF TECH',
    alt: 'Caleaf Tech logo'
  },

  /**
   * 搜索图标配置
   */
  search: {
    default: '/assets/img/icon12.png',
    active: '/assets/img/icon12_active.png'
  },

  /**
   * 导航菜单项
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
