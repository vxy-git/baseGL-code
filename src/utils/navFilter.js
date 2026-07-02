/**
 * 导航数据筛选工具函数
 * 消除项目中各处重复的 nav.status === '启用' && nav.xxxShow === true 模式
 */

/** 导航项是否已启用 */
export const isEnabled = nav => nav.status === '启用'

/** 是否为顶级导航（无父级） */
export const isTopLevel = nav => !nav.parentId || nav.parentId === 0

/** 是否需要在 Header 显示 */
export const isHeaderVisible = nav => isEnabled(nav) && nav.headerShow === true

/** 是否需要在 Footer 显示 */
export const isFooterVisible = nav => isEnabled(nav) && nav.footerShow === true

/** Header 顶级导航项 */
export const isTopLevelHeader = nav => isTopLevel(nav) && isHeaderVisible(nav)

/** Footer 顶级导航项 */
export const isTopLevelFooter = nav => isTopLevel(nav) && isFooterVisible(nav)

/** 导航排序值 */
export const getNavSortValue = nav => {
  const sort = Number(nav?.sort)
  return Number.isFinite(sort) ? sort : 0
}

/** 按 CMS 排序值升序排序，排序值相同时按 ID 稳定排序 */
export const compareNavSort = (a, b) => {
  const sortDiff = getNavSortValue(a) - getNavSortValue(b)
  if (sortDiff !== 0) return sortDiff
  return (Number(a?.ID) || 0) - (Number(b?.ID) || 0)
}

/** 返回按 CMS 排序值排序后的新数组 */
export const sortNavsBySort = navs => (Array.isArray(navs) ? navs.slice().sort(compareNavSort) : [])

/** 子导航项（headerShow=true） */
export const isHeaderChild = (nav, parentId) =>
  isEnabled(nav) && nav.headerShow === true && nav.parentId === parentId

/** 子导航项（footerShow=true） */
export const isFooterChild = (nav, parentId) =>
  isEnabled(nav) && nav.footerShow === true && nav.parentId === parentId

/**
 * 解析导航链接 URL
 * 区分内部路由（返回 to）和外部链接（返回 href）
 */
export function resolveNavLink(navUrl, target) {
  const isExternal = navUrl.startsWith('http://') || navUrl.startsWith('https://')
  if (isExternal) {
    return { href: navUrl, target: target || '_blank' }
  }
  return { to: navUrl.startsWith('/') ? navUrl : `/${navUrl}`, target: target || '_self' }
}

/**
 * 格式化单个导航项（Header 或 Footer 通用）
 * @param {Object} nav - 原始导航数据
 * @param {Object} [opts] - 可选配置
 * @param {Array}  [opts.allNavs] - 全部导航数据（用于查找子项，传入后自动处理 children）
 * @param {boolean} [opts.includeIcon] - 是否包含图标字段
 * @returns {Object} { text, id, to?, href?, target?, type?, children?, icon? }
 */
export function formatNavItem(nav, opts = {}) {
  const { allNavs, includeIcon } = opts

  const item = {
    text: nav.navName || '',
    id: nav.ID,
  }

  // 处理导航链接
  if (nav.navUrl) {
    Object.assign(item, resolveNavLink(nav.navUrl, nav.target))
  }

  // 处理子导航（仅当传入了 allNavs 时）
  if (allNavs && isTopLevel(nav)) {
    const children = sortNavsBySort(allNavs.filter(child => isHeaderChild(child, nav.ID)))
    if (children.length > 0) {
      item.type = 'dropdown'
      item.children = children.map(child => formatNavItem(child, { allNavs, includeIcon }))
    }
  }

  // 图标
  if (includeIcon && nav.icon) {
    item.icon = nav.icon
  }

  return item
}
