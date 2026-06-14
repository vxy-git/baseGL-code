/**
 * Dukes Unit11 Specifications 数据配置
 */

/**
 * Dukes Unit11 数据对象
 */
export const unit11Data = {
  /**
   * 视频路径
   * 注意：字段名 universe/universePro 为内部 key，实际加载的视频文件为 DUKES 产品所用
   */
  videos: {
    /**
     * DUKES 主视频（复用 UNICORN 视频资源）
     */
    universe: '/api/uploads/file/default/assets/dukes/UNICORN.mp4',

    /**
     * DUKES Pro 视频（复用 UNICORN Pro 视频资源）
     */
    universePro: '/api/uploads/file/default/assets/dukes/UNICORN-Pro.mp4',
  },

  /**
   * 文本内容
   */
  content: {
    /**
     * 标题文本
     */
    title: 'Specifications',

    /**
     * 产品名称
     */
    productName: 'DUKES',
  },

  /**
   * 设备规格
   */
  deviceSpecs: {
    /**
     * DUKES 设备规格
     */
    dukes: [
      { label: 'Dimension(mm)', value: '76.6H*38.0W*16.0D' },
      { label: 'Tank Volume', value: '0.5+0.5mL/1+1mL' },
      { label: 'Battery Capability', value: '300mAh' },
      { label: 'Resistance', value: '1.8ohm' },
      { label: 'Voltage Setting', value: '2.2V' },
      { label: 'Housing Material', value: 'Plastic' },
      { label: 'Ceramic Core', value: 'Dual Gemco' },
      { label: 'Central Post', value: 'Post-free' },
      { label: 'Charging', value: 'Type-C' },
      { label: 'Options of Activation', value: 'Button & Inhale Activated' },
    ],

    /**
     * DUKES Pro 设备规格
     */
    dukesPro: [
      { label: 'Dimension(mm)', value: '76.6H*38.0W*16.0D' },
      { label: 'Tank Volume', value: '1.5+1.5mL' },
      { label: 'Battery Capability', value: '300mAh' },
      { label: 'Resistance', value: '1.8ohm' },
      { label: 'Voltage Setting', value: '2.2V' },
      { label: 'Housing Material', value: 'Plastic' },
      { label: 'Ceramic Core', value: 'Dual Gemco' },
      { label: 'Central Post', value: 'Post-free' },
      { label: 'Charging', value: 'Type-C' },
      { label: 'Options of Activation', value: 'Button & Inhale Activated' },
    ],
  },
}
