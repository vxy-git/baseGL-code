import { buildBlogDetailPath } from '@/utils/blogRoute'

/**
 * Blog 页面列表数据配置
 */

/**
 * Blog 列表数据对象
 */
export const listData = {
  title: 'Blog',
  pageSize: 8,
  newsList: [
    {
      date: 'Mar 4, 2026',
      title: 'Top Exhibit Designs from MJBizCon 2024',
      logo: '/api/uploads/file/default/assets/blog-detail/TopExhibitDesignsFromMJBizCon2024/logo1.jpg',
      link: buildBlogDetailPath('tips', 32),
    },
  ],
}
