/**
 * Product4 (DUKES) 产品映射数据配置
 */

/**
 * Product4 Item 数据对象
 * 用于产品列表页面的产品卡片展示和链接映射
 */
export const itemData = {
  /**
   * 产品 ID
   * @type {number}
   */
  id: 2,

  /**
   * 产品名称
   * @type {string}
   */
  name: 'DUKES',

  /**
   * 产品描述
   * @type {string}
   */
  description: 'Dual chamber & postless tech',

  /**
   * 产品容量
   * @type {string}
   */
  capacity: '1ml/2ml/3ml',

  /**
   * 产品图片路径
   * @type {string}
   */
  image: '/api/uploads/file/default/assets/list/D9_Distillate/DUKES.jpg',

  /**
   * 产品悬停背景图片路径
   * @type {string}
   */
  background: '/api/uploads/file/default/assets/list/D9_Distillate/DUKES-hover.jpg',

  /**
   * 图片 alt 文本
   * @type {string}
   */
  alt: 'DUKES',

  /**
   * 是否为新产品
   * @type {boolean}
   */
  isNew: true,

  /**
   * 链接类型（对应路由和页面类型）
   * @type {string}
   */
  linkType: 'dukes',

  /**
   * 产品分类
   * @type {string}
   */
  category: 'D9 Distillate',
}
