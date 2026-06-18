/**
 * Blog Detail Unit2 相关文章数据配置
 */
export const unit2Data = {
  title: 'You may also like',
  viewAllText: 'View all',
  viewAllPath: '/blog',
  posts: Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    category: 'Tips',
    title: 'Top Exhibit Designs from MJBizCon 2024',
    description:
      'After MJBizCon 2024, one thing was clear: Companies raised the bar with exhibit designs that were both impressive and inspirational. From innovative use of ...',
    date: 'Mar 4, 2026',
    image: '/api/uploads/file/default/assets/blog-detail/related-thumb.png',
  })),
}
