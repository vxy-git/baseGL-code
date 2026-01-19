/**
 * Home Unit1 Banner 数据配置
 * @typedef {Object} BannerItem
 * @property {string} title - 主标题
 * @property {string} subTitle - 副标题
 * @property {string} src - 媒体资源路径(视频/图片)
 * @property {'video' | 'image'} type - 媒体类型
 * @property {string} dotText - 底部指示器显示文本
 * @property {string} path - 路由跳转路径
 */

/**
 * Home Unit1 数据对象
 */
export const homeUnit1Data = {
  /**
   * Banner 列表数据
   * @type {BannerItem[]}
   */
  bannerList: [
    {
      title: "UNIVERSE Series",
      subTitle: "UNICORE powered, the way to infinite.",
      src: '/api/uploads/file/default/assets/home/Banner-1-UNIVERSE.mp4',
      type: 'video',
      dotText: "UNIVERSE Series",
      path: '/universe_series'
    },
    {
      title: "UNICORN Series",
      subTitle: "UNICORE powered, the way to infinite.",
      src: '/api/uploads/file/default/assets/home/Banner-2-UNICORN.mp4',
      type: 'video',
      dotText: "UNICORN Series",
      path: '/unicorn_series'
    },
    {
      title: "UNIT Pro",
      subTitle: "From lab to award, 100% for Rosin we've perfected",
      src: '/api/uploads/file/default/assets/home/Banner-3-UNIT.mp4',
      type: 'video',
      dotText: "UNIT Pro",
      path: '/unit_pro'
    },
    {
      title: "DUKES",
      subTitle: "The best of both worlds, every puff with more hits.",
      src: '/api/uploads/file/default/assets/home/Banner-4-DUKES.mp4',
      type: 'video',
      dotText: "DUKES",
      path: '/dukes'
    }
  ],

  /**
   * 按钮图标路径
   */
  buttonIcon: '/api/uploads/file/default/assets/img/icon2.png',
}
