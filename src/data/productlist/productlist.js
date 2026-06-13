/**
 * ProductList 页面数据配置
 */

/**
 * ProductList 数据对象
 */
export const productListData = {
  /**
   * 页面标题
   */
  pageTitle: 'Innovative products',

  /**
   * 导航项目列表
   */
  navItems: [
    'Products',
    'Technology',
    'Customize',
    'US Local Service',
    'Why Caleaf'
  ],

  /**
   * 卡片配置
   */
  card: {
    /**
     * 产品卡片宽度
     */
    width: 305,

    /**
     * 卡片间距
     */
    gap: 26,
  },

  /**
   * 分页配置
   */
  pagination: {
    /**
     * 默认激活的过滤器索引
     */
    activeFilterIndex: 0,

    /**
     * 当前页码
     */
    currentPage: 1,

    /**
     * 可用页码数组
     */
    pages: [1],
  }
}
