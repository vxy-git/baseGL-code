/**
 * Product3 Unit5 数据配置
 */

/**
 * Product3 Unit5 数据对象
 */
export const product3Unit5Data = {
  /**
   * 产品标签
   */
  productTag: 'UNICORN PRO',

  /**
   * 文本内容
   */
  content: {
    /**
     * 主标题
     */
    mainTitle: 'Smart Display',

    /**
     * 副标题
     */
    subtitle: 'Upgrade your adventure',
  },

  /**
   * 功能卡片配置
   */
  featureCards: [
    {
      tag: '3-Temperature Control',
      video: '/api/uploads/file/default/assets/product3/3-Temperature-Control.mp4',
      wide: false
    },
    {
      tag: 'Battery Life Monitor',
      video: '/api/uploads/file/default/assets/product3/Battery-Life-Monitor.mp4',
      wide: true
    },
    {
      tag: 'Preheat Status Indication',
      video: '/api/uploads/file/default/assets/product3/Preheat-Status-Indication.mp4',
      wide: true
    },
    {
      tag: 'Dosing Timer',
      video: '/api/uploads/file/default/assets/product3/Puff-Counter.mp4',
      wide: false
    }
  ],
}
