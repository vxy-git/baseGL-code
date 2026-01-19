/**
 * Banner/轮播图降级配置
 * 当 CMS API 调用失败时,使用这些静态配置数据
 */

/**
 * @typedef {Object} BannerItem
 * @property {number} id - Banner ID
 * @property {string} title - 主标题
 * @property {string} image - 图片/视频路径
 * @property {string|null} link - 跳转链接
 * @property {string} description - 描述文本
 * @property {string} alt - 替代文本
 */

/**
 * Banner 降级配置数据
 * 从现有首页 Banner 数据提取
 * @type {BannerItem[]}
 */
export const bannerFallbackData = [
  {
    id: 1,
    title: "UNIVERSE Series",
    image: '/api/uploads/file/default/assets/home/Banner-1-UNIVERSE.mp4',
    link: '/universe_series',
    description: "UNICORE powered, the way to infinite.",
    alt: "UNIVERSE Series"
  },
  {
    id: 2,
    title: "UNICORN Series",
    image: '/api/uploads/file/default/assets/home/Banner-2-UNICORN.mp4',
    link: '/unicorn_series',
    description: "UNICORE powered, the way to infinite.",
    alt: "UNICORN Series"
  },
  {
    id: 3,
    title: "UNIT Pro",
    image: '/api/uploads/file/default/assets/home/Banner-3-UNIT.mp4',
    link: '/unit_pro',
    description: "From lab to award, 100% for Rosin we've perfected",
    alt: "UNIT Pro"
  },
  {
    id: 4,
    title: "DUKES",
    image: '/api/uploads/file/default/assets/home/Banner-4-DUKES.mp4',
    link: '/dukes',
    description: "The best of both worlds, every puff with more hits.",
    alt: "DUKES"
  }
]

/**
 * 产品降级配置数据
 * 从现有产品列表数据提取
 */
export const productFallbackData = [
  {
    text: 'For Resin/Rosin',
    id: 'resin-roSin',
    type: 'tab',
    children: [
      {
        text: 'UNIVERSE Series',
        to: '/universe_series',
        id: 105
      },
      {
        text: 'UNICORN Series',
        to: '/unicorn_series',
        id: 101
      },
      {
        text: 'UNIT Pro',
        to: '/unit_pro',
        id: 102
      }
    ]
  },
  {
    text: 'D9 Distillate',
    id: 'd9-distillate',
    type: 'tab',
    children: [
      {
        text: 'DUKES',
        to: '/dukes',
        id: 2
      }
    ]
  }
]

/**
 * 技术降级配置数据
 * 技术页面常用的导航链接
 */
export const technologyFallbackData = [
  {
    text: 'Technology',
    to: '/technology',
    id: 'tech-home'
  },
  {
    text: 'UNICORE Technology',
    to: '/technology#unicore',
    id: 'tech-unicore'
  },
  {
    text: 'Innovation',
    to: '/technology#innovation',
    id: 'tech-innovation'
  }
]

/**
 * 公司信息降级配置数据
 */
export const companyFallbackData = [
  {
    text: 'About Us',
    to: '/about',
    id: 'about'
  },
  {
    text: 'Contact Us',
    to: '/contact',
    id: 'contact'
  },
  {
    text: 'Careers',
    href: 'https://example.com/careers',
    id: 'careers',
    target: '_blank'
  },
  {
    text: 'News',
    to: '/news',
    id: 'news'
  }
]

/**
 * 导出所有降级配置
 */
export const fallbackData = {
  banner: bannerFallbackData,
  product: productFallbackData,
  technology: technologyFallbackData,
  company: companyFallbackData
}
