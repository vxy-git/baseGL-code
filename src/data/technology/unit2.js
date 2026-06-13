/**
 * Technology Unit2 数据配置
 */

/**
 * Technology Unit2 数据对象
 */
export const unit2Data = {
  /**
   * 媒体资源
   */
  media: {
    /**
     * 左侧视频路径
     */
    leftVideo: '/api/uploads/file/default/assets/technology/t1/l1.mp4',

    /**
     * 右侧第一张图片路径
     */
    rightImage1: '/api/uploads/file/default/assets/technology/t1/r1.jpg',

    /**
     * 右侧视频路径
     */
    rightVideo: '/api/uploads/file/default/assets/technology/t1/r2.mp4',
  },

  /**
   * 内容区块
   */
  sections: {
    /**
     * 内容1
     */
    section1: {
      /**
       * 标题1
       */
      title1: '100% Rosin-Ready',

      /**
       * 标题2
       */
      title2: 'Savor the most natural\nand rich flavors',

      /**
       * 标题3
       */
      title3: `We always strive to be pioneers in the industry.
Our patented U-shape ceramic design is the result of extensive testing and validation of various
structures.
It is the optimal structure for the vast majority of Resin and Rosin oils on the market.
It is 30% thinner than ordinary ceramics while maintaining the strength, which means fewer terpene
molecules
are filtered out, and the rich, natural flavors are preserved.`,

      /**
       * 数据项
       */
      stats: [
        {
          percentage: '30%',
          label: 'Thinner in Structure',
        },
        {
          percentage: '45%',
          label: 'Flavor Retention',
        },
      ],
    },

    /**
     * 内容2
     */
    section2: {
      /**
       * 标题1
       */
      title1: 'We Fixed It First',

      /**
       * 标题2
       */
      title2: 'The most effective\nanti-clogging solution ever built.',

      /**
       * 标题3
       */
      title3: `Most customers have reported bubble issues to us with various devices from different suppliers during oil
filling. Our U-shape ceramic design solves this problem perfectly. No more burnt taste caused by clogged
bubbles.`,
    },
  },
}
