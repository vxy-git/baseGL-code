/**
 * Product2 Unit7 数据配置
 */

/**
 * Product2 Unit7 数据对象
 */
export const product2Unit7Data = {
  /**
   * 主标题
   */
  mainTitle: 'Every Detail Matters',

  /**
   * 标签列表
   */
  tabsList: [
    'Crystal-clear Design',
    'Unibody Enclosure',
    'Medical-grade Chamber'
  ],

  /**
   * 媒体资源列表
   */
  mediaList: [
    {
      src: '/api/uploads/file/default/assets/product2/every_Crystal-clear-Design.jpg',
      type: 'image'
    },
    {
      src: '/api/uploads/file/default/assets/product2/every_Unibody-Enclosure.mp4',
      type: 'video'
    },
    {
      src: '/api/uploads/file/default/assets/product2/every_Medical-grade-Chamber.jpg',
      type: 'image'
    }
  ],

  /**
   * Splide 轮播配置
   */
  splideOptions: {
    perPage: 1,
    perMove: 1,
    gap: '1.25rem',
    speed: 800,
    arrows: false,
    pagination: false,
    drag: true,
    keyboard: true,
    width: '100vw',
    fixedWidth: '50rem',
    focus: 'center',
    trimSpace: false
  },
}
