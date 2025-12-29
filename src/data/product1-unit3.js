/**
 * Product1 Unit3 滚动动画展示数据配置
 */

/**
 * 图标路径
 */
export const ICON_FLAVOR = '/assets/img/icon19.png'
export const ICON_DEVICE = '/assets/img/icon18.png'

/**
 * 帧序列动画配置
 */
export const FRAME_CONFIG = {
  frames: 71,
  tarURL: '/product1.tar',
  imageURL: (i) => `product1/frame${i + 1}.jpg`
}

/**
 * 文本块1数据
 */
export const TB1_DATA = {
  title: 'UNICORE\nPOWERED'
}

/**
 * 文本块2数据
 */
export const TB2_DATA = {
  smallTitle: 'Award-Winning',
  wTitle: 'Simply the best',
  text: `In June 2025, UNIT PRO secured 1st place in the Live Resin vape category at the 2025 California State Fair Cannabis Awards. This victory is a testament to our product's excellence. With this market validation, we are not just confident, but eager to bring this golden standard to more brands using Resin and Rosin.`
}

/**
 * 文本块3数据
 */
export const TB3_DATA = {
  smallTitle: 'A Significant Breakthrough',
  wTitle: 'U-shape design\nPioneering industry',
  text: `Our patented U-shape ceramic design is the result of extensive testing and validation of various structures. It is the optimal structure for the vast majority of Resin and Rosin oils on the market.`
}

/**
 * 文本块4数据
 */
export const TB4_DATA = {
  smallTitle: '100% Rosin-Ready',
  wTitle: 'Savor the most natural and rich flavors',
  text: `Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene molecules are filtered out and the rich, natural flavors are preserved.`,
  stats: [
    {
      value: '30%',
      label: 'Thinner in Structure'
    },
    {
      value: '45%',
      label: 'Flavor Retention',
      hasIcon: true
    }
  ]
}
