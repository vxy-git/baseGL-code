/**
 * Product3 Unit3 数据配置
 */

/**
 * 箭头图标
 */
export const ARROW_ICON = '/assets/product3/arrow.svg'

/**
 * 帧序列配置
 */
export const FRAME_SEQUENCE_1 = {
  frames: 32,
  tarURL: '/product3_1.tar',
  imageURL: (i) => `product3_1/frame${i + 1}.jpg`
}

export const FRAME_SEQUENCE_2 = {
  frames: 27,
  tarURL: '/product3_2.tar',
  imageURL: (i) => `product3_2/frame${i + 1}.jpg`
}

/**
 * TB1 标题文本
 */
export const TB1_TITLE_TEXT = 'Gold standard for Resin/Rosin'

/**
 * TB2 内容
 */
export const TB2_CONTENT = {
  smallTitle: 'UNICORE powered',
  title: '33% in pore uniformity',
  description: 'We pioneered the use of aerospace-grade, high-thermal-conductivity ceramics, firing temperature at 1832 °F to create a 20% denser, uniformly porous structure that perfectly matches resin and rosin molecules, eliminating any risk of dry burn for consistently optimal performance.'
}

/**
 * TB3 内容
 */
export const TB3_CONTENT = {
  figure: '20%',
  label: 'Firing temp',
  bar1Text: 'CALEAF TECH 1832 ℉ (1000℃)',
  bar2Text: 'Others 1472 ℉ (800℃)'
}
