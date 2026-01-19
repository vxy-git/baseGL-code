/**
 * Home Unit2 产品展示数据配置
 */

/**
 * Home Unit2 数据对象
 */
export const homeUnit2Data = {
  /**
   * 单元标题
   */
  unitTitle: `Innovative products:\nThe most advanced, the best fit.`,

  /**
   * 箭头图标路径
   */
  arrowIcon: '/api/uploads/file/default/assets/img/icon4_active.png',

  /**
   * Splide 轮播配置
   */
  splideOptions: {
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
  },
}
