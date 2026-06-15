/**
 * Blog Unit2 列表数据配置
 */
export const unit2Data = {
  title: 'Blog',
  tabs: [
    'Tips',
    'News',
    'Creator Stories',
    'Community Stories',
    'Conferencing',
    'Enterprise',
  ],
  posts: Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    category: 'Tips',
    title: 'Top Exhibit Designs from MJBizCon 2024',
    description:
      'After MJBizCon 2024, one thing was clear: Companies raised the bar with exhibit designs that were both impressive and inspirational. From innovative use of ...',
    date: 'Mar 4, 2026',
    image: '/assets/blog/card-thumb.png',
  })),
  pages: [1, 2, 3, 4, 5, 6, 7],
  currentPage: 1,
}
