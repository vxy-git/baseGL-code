/**
 * Blog 文章数据配置
 */

/**
 * Blog 文章数据对象
 */
export const postsData = {
  /**
   * 标签列表
   * @type {string[]}
   */
  tabs: ['Tips', 'News', 'Creator Stories', 'Community Stories', 'Conferencing', 'Enterprise'],

  posts: Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    category: 'Tips',
    title: 'Top Exhibit Designs from MJBizCon 2024',
    description:
      'After MJBizCon 2024, one thing was clear: Companies raised the bar with exhibit designs that were both impressive and inspirational. From innovative use of ...',
    date: 'Mar 4, 2026',
    image: '/api/uploads/file/default/assets/blog/card-thumb.png',
    featuredImage:
      index === 0
        ? '/api/uploads/file/default/assets/blog/featured-prev.png'
        : index === 1
          ? '/api/uploads/file/default/assets/blog/featured.png'
          : '/api/uploads/file/default/assets/blog/featured-next.png',
    alt: 'Top Exhibit Designs from MJBizCon 2024',
    isTop: index < 3,
  })),
}
