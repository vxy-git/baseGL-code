/**
 * Product3 Unit6 数据配置
 */

/**
 * Product3 Unit6 数据对象
 */
export const product3Unit6Data = {
  /**
   * 屏幕背景图片
   * TODO: 确认是否应指向 product3 路径，当前使用 product3 资源
   */
  screenBg: '/api/uploads/file/default/assets/product3/screen-bg-1.png',

  /**
   * 屏幕图片列表
   * TODO: 确认这些图片是否应放在 product3 目录下
   */
  screenImages: [
    '/api/uploads/file/default/assets/product3/screen1.png',
    '/api/uploads/file/default/assets/product3/screen2.png',
    '/api/uploads/file/default/assets/product3/screen3.png',
    '/api/uploads/file/default/assets/product3/screen4.png',
    '/api/uploads/file/default/assets/product3/screen5.png',
    '/api/uploads/file/default/assets/product3/screen6.png'
  ],

  /**
   * 文本内容
   */
  content: {
    /**
     * 小标题
     */
    smallTitle: 'ULTRA-LARGE SMART DISPLAY',

    /**
     * 主标题
     */
    mainTitle: 'Design Your Own',

    /**
     * 描述文本
     */
    description: `Customize it further with any brand graphics to create your unique brand screen. Drive market trends with a design that breaks the mold and leads the way.`,
  },

  /**
   * 轮播配置
   */
  carouselConfig: {
    intervalMs: 2600,
    transitionMs: 700
  },
}
