/**
 * Unit Pro Unit3 滚动动画展示数据配置
 */

/**
 * Unit Pro Unit3 数据对象
 */
export const unit3Data = {
  /**
   * 图标路径
   */
  icons: {
    /**
     * 口味图标
     */
    flavor: '/api/uploads/file/default/assets/img/icon19.png',

    /**
     * 设备图标
     */
    device: '/api/uploads/file/default/assets/img/icon18.png',
  },

  /**
   * 帧序列动画配置
   */
  frameConfig: {
    frames: 71,
    tarURL: '/api/uploads/file/default/frame/unit_pro.tar',
    imageFile: 'unit_pro',
    imageName: 'frame',
    imageExtension: '.jpg',
  },

  /**
   * 文本块数据
   */
  textBlocks: {
    /**
     * 文本块1数据
     */
    tb1: {
      title: 'UNICORE\nPOWERED',
    },

    /**
     * 文本块2数据
     */
    tb2: {
      smallTitle: 'Award-Winning',
      wTitle: 'Simply the best',
      text: `In June 2025, UNIT PRO secured 1st place in the Live Resin vape category at the 2025 California State Fair Cannabis Awards. This victory is a testament to our product's excellence. With this market validation, we are not just confident, but eager to bring this golden standard to more brands using Resin and Rosin.`,
    },

    /**
     * 文本块3数据
     */
    tb3: {
      smallTitle: 'A Significant Breakthrough',
      wTitle: 'U-shape design\nPioneering industry',
      text: `Our patented U-shape ceramic design is the result of extensive testing and validation of various structures. It is the optimal structure for the vast majority of Resin and Rosin oils on the market.`,
    },

    /**
     * 文本块4数据
     */
    tb4: {
      smallTitle: '100% Rosin-Ready',
      wTitle: 'Savor the most natural\nand rich flavors',
      text: `Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene molecules are filtered out and the rich, natural flavors are preserved.`,
      stats: [
        {
          value: '30%',
          label: 'Thinner in Structure',
        },
        {
          value: '45%',
          label: 'Flavor Retention',
          hasIcon: true,
        },
      ],
    },
  },
}
