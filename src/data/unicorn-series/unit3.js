/**
 * Unicorn Series Unit3 数据配置
 */

/**
 * Unicorn Series Unit3 数据对象
 */
export const unit3Data = {
  /**
   * 箭头图标
   */
  arrowIcon: '/api/uploads/file/default/assets/unicorn_series/arrow.svg',

  /**
   * 帧序列配置
   */
  frameSequences: {
    /**
     * 帧序列1配置
     */
    sequence1: {
      frames: 32,
      tarURL: '/api/uploads/file/default/unicorn_series_1.tar',
      imageName: 'frame',
      imageExtension: '.jpg',
    },

    /**
     * 帧序列2配置
     */
    sequence2: {
      frames: 27,
      tarURL: '/api/uploads/file/default/unicorn_series_2.tar',
      imageName: 'frame',
      imageExtension: '.jpg',
    },
  },

  /**
   * 文本块内容
   */
  textBlocks: {
    /**
     * TB1 标题文本
     */
    tb1TitleText: 'Gold standard for Resin/Rosin',

    /**
     * TB2 内容
     */
    tb2Content: {
      smallTitle: 'UNICORE powered',
      title: '33% in pore uniformity',
      description:
        'We pioneered the use of aerospace-grade, high-thermal-conductivity ceramics, firing temperature at 1832 °F to create a 20% denser, uniformly porous structure that perfectly matches resin and rosin molecules, eliminating any risk of dry burn for consistently optimal performance.',
    },

    /**
     * TB3 内容
     */
    tb3Content: {
      figure: '20%',
      label: 'Firing temp',
      bar1Text: 'CALEAF TECH 1832 ℉ (1000℃)',
      bar2Text: 'Others 1472 ℉ (800℃)',
    },
  },
}
