/**
 * Home Unit2 产品展示数据配置
 */

/**
 * 单元标题
 */
export const UNIT_TITLE = `Innovative products:\nThe most advanced, the best fit.`

/**
 * 箭头图标路径
 */
export const ARROW_ICON = '/assets/img/icon4_active.png'

/**
 * Splide 轮播配置
 */
export const splideOptions = {
  type: 'slide',
  perPage: 4,
  perMove: 4,
  gap: '2%',
  padding: 0,
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100%',
  breakpoints: {
    1200: {
      perPage: 3,
      perMove: 3,
    },
    860: {
      perPage: 2,
      perMove: 2,
    },
  },
  focus: 0,
  omitEnd: true,
}
