/**
 * Product2 Unit5 规格参数数据配置
 */

/**
 * Product2 Unit5 数据对象
 */
export const unit5Data = {
  /**
   * 主标题
   */
  titleText: 'Specifications',

  /**
   * 视频路径
   */
  videos: {
    /**
     * UNIVERSE 视频路径
     */
    universe: '/api/uploads/file/default/assets/product2/UNIVERSE.mp4',

    /**
     * UNIVERSE Pro 视频路径
     */
    universePro: '/api/uploads/file/default/assets/product2/UNIVERSE_Pro.mp4',
  },

  /**
   * 设备规格
   */
  deviceSpecs: {
    /**
     * UNIVERSE 规格列表
     */
    universe: [
      { label: 'Dimension(mm)', value: '99.3H*22.3W*10.4D' },
      { label: 'Tank Volume', value: '0.5mL / 1mL' },
      { label: 'Battery Capability', value: '280mAh' },
      { label: 'Resistance', value: '1.8ohm' },
      { label: 'Voltage Setting', value: '2.0V' },
      { label: 'Housing Material', value: 'Plastic' },
      { label: 'Ceramic Core', value: 'UNICORE' },
      { label: 'Central Post', value: 'Post-free' },
      { label: 'Charging', value: 'Type-C' },
      { label: 'Options of Activation', value: 'Inhale Activated' },
    ],

    /**
     * UNIVERSE Pro 规格列表
     */
    universePro: [
      { label: 'Dimension(mm)', value: '93.3H*23.5W*13.5D' },
      { label: 'Tank Volume', value: '0.5mL / 1mL' },
      { label: 'Battery Capability', value: '280mAh' },
      { label: 'Resistance', value: '1.8ohm' },
      { label: 'Voltage Setting', value: '1.8V - 2.0V - 2.2V' },
      { label: 'Housing Material', value: 'Plastic' },
      { label: 'Ceramic Core', value: 'UNICORE' },
      { label: 'Central Post', value: 'Post-free' },
      { label: 'Charging', value: 'Type-C' },
      { label: 'Options of Activation', value: 'Button & Inhale Activated' },
    ],
  },

  /**
   * 产品名称
   */
  productNames: {
    /**
     * UNIVERSE 产品名称
     */
    universe: 'UNIVERSE',

    /**
     * UNIVERSE Pro 产品名称
     */
    universePro: 'UNIVERSE Pro',
  },
}
