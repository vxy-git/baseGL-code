/**
 * Home Unit5 新闻轮播数据配置
 * @typedef {Object} NewsItem
 * @property {string} type - 媒体类型
 * @property {string} img - 图片路径
 * @property {string} title - 新闻标题
 */

/**
 * Home Unit5 数据对象
 */
export const homeUnit5Data = {
  /**
   * 单元标题
   */
  unitTitle: 'The latest news and inspiring stories',

  /**
   * 箭头图标路径
   */
  arrowIcon: '/api/uploads/file/default/assets/img/icon4_active.png',

  /**
   * Splide 轮播配置
   */
  splideOptions: {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    gap: '2.18rem',
    speed: 800,
    arrows: false,
    pagination: false,
    drag: true,
    keyboard: true,
    width: '100vw',
    focus: 0,
    omitEnd: true,
  },

  /**
   * 新闻列表数据
   * @type {NewsItem[]}
   */
  newsList: [
    {
      type: 'image',
      img: '/api/uploads/file/default/assets/home/new/1.jpg',
      title: 'titlemg Magazine Names CALEAF TECH Among Top Exhibit Designs at MJBizCon 2024',
    },
    {
      type: 'image',
      img: '/api/uploads/file/default/assets/home/new/2.jpg',
      title: 'CALEAF TECH Unveils UNICORE: The Gold Standard for Resin/Rosin Oils at MJBIZCON 2025',
    },
    // 备用新闻项(可根据需要取消注释)
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/3.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/4.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/5.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/6.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/7.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/8.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/9.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/10.jpg', title: '' },
    // { type: 'image', img: '/api/uploads/file/default/assets/home/new/11.jpg', title: '' },
  ],
}
