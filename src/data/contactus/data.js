/**
 * ContactUs 页面数据配置
 */

/**
 * ContactUs 数据对象
 */
export const data = {
  /**
   * Hero Banner 图片
   */
  heroBanner: '/api/uploads/file/default/assets/contact/banner.jpg',

  /**
   * 移动端 Hero Banner 图片
   */
  heroBannerMobile: '/api/uploads/file/default/assets/contact/m_banner.jpg',

  /**
   * 图标路径
   */
  icons: {
    /**
     * Instagram 图标
     */
    instagram: '/api/uploads/file/default/assets/img/icon44.png',

    /**
     * 下拉箭头图标
     */
    dropdown: '/api/uploads/file/default/assets/img/icon46.png',

    /**
     * 产品展示图标
     */
    product: '/api/uploads/file/default/assets/img/icon45.png',
  },

  /**
   * 联系信息
   */
  contact: {
    /**
     * Instagram 链接
     */
    instagramLink: 'https://www.instagram.com/caleaftechofficial/',

    /**
     * 联系邮箱
     */
    email: 'info@caleaftech.com',
  },

  /**
   * 文本内容
   */
  content: {
    /**
     * Hero 标题
     */
    heroTitle: 'Get in Touch',

    /**
     * Follow Us 文本
     */
    followText: 'Follow Us',

    /**
     * 表单标题
     */
    formTitle: 'Get Samples and Pricing',

    /**
     * 表单提交按钮文本
     */
    submitButtonText: 'SUBMIT',
  },

  /**
   * 表单数据
   */
  formData: {
    /**
     * 国家列表
     */
    countries: [
      'United States',
      'Canada',
      'United Kingdom',
      'Australia',
      'Germany',
      'France',
      'China',
      'Japan',
      'South Korea',
      'Singapore',
      'India',
      'Brazil',
      'Mexico',
      'Netherlands',
      'Sweden',
    ],

    /**
     * 各国家对应的州/省列表
     */
    statesByCountry: {
      'United States': [
        'California',
        'Texas',
        'Florida',
        'New York',
        'Pennsylvania',
        'Illinois',
        'Ohio',
        'Georgia',
        'North Carolina',
        'Michigan',
        'New Jersey',
        'Virginia',
        'Washington',
        'Arizona',
        'Massachusetts',
      ],
      Canada: [
        'Ontario',
        'Quebec',
        'British Columbia',
        'Alberta',
        'Manitoba',
        'Saskatchewan',
        'Nova Scotia',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Prince Edward Island',
      ],
      China: [
        'Beijing',
        'Shanghai',
        'Guangdong',
        'Zhejiang',
        'Jiangsu',
        'Sichuan',
        'Hubei',
        'Fujian',
        'Shaanxi',
        'Hunan',
      ],
      Australia: [
        'New South Wales',
        'Victoria',
        'Queensland',
        'Western Australia',
        'South Australia',
        'Tasmania',
        'Australian Capital Territory',
        'Northern Territory',
      ],
    },
  },
}
