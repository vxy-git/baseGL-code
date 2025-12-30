/**
 * CMS API 模拟层
 * 模拟从 CMS 后端获取页面数据
 */

// 导入所有页面配置
import homeConfig from '@/data/home/index.js'
import product1Config from '@/data/product1/index.js'
import product2Config from '@/data/product2/index.js'
import product3Config from '@/data/product3/index.js'
import product4Config from '@/data/product4/index.js'
import productlistConfig from '@/data/productlist/index.js'
import technologyConfig from '@/data/technology/index.js'
import contactusConfig from '@/data/contactus/index.js'
import commonConfig from '@/data/common/index.js'

// 所有页面配置映射
const pages = {
  home: homeConfig,
  product1: product1Config,
  product2: product2Config,
  product3: product3Config,
  product4: product4Config,
  productlist: productlistConfig,
  technology: technologyConfig,
  contactus: contactusConfig
}

/**
 * 模拟网络延迟
 * @param {number} ms - 延迟毫秒数
 * @returns {Promise}
 */
function mockDelay(ms = 100) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 获取所有页面配置（用于生成路由和导航）
 * @returns {Promise<Object>} 包含所有页面和全局配置的对象
 */
export async function fetchAllPages() {
  await mockDelay(100)

  return {
    pages: Object.values(pages),
    common: commonConfig
  }
}

/**
 * 获取单个页面配置
 * @param {string} pageId - 页面标识（如 'home', 'product1'）
 * @returns {Promise<Object>} 页面配置和全局配置
 */
export async function fetchPage(pageId) {
  await mockDelay(100)

  const page = pages[pageId]

  if (!page) {
    throw new Error(`Page not found: ${pageId}`)
  }

  return {
    page,
    common: commonConfig
  }
}

/**
 * 获取多个页面配置
 * @param {string[]} pageIds - 页面标识数组
 * @returns {Promise<Object[]>} 页面配置数组
 */
export async function fetchMultiplePages(pageIds) {
  await mockDelay(150)

  const pagePromises = pageIds.map(async (pageId) => {
    const page = pages[pageId]
    if (!page) {
      throw new Error(`Page not found: ${pageId}`)
    }
    return page
  })

  return Promise.all(pagePromises)
}

/**
 * 根据路由路径获取页面配置
 * @param {string} routePath - 路由路径（如 '/', '/unit_pro'）
 * @returns {Promise<Object|null>} 页面配置，未找到返回 null
 */
export async function fetchPageByRoute(routePath) {
  await mockDelay(100)

  const page = Object.values(pages).find(p => p.route === routePath)

  if (!page) {
    return null
  }

  return {
    page,
    common: commonConfig
  }
}

/**
 * 获取导航数据（Header 和 Footer）
 * @returns {Promise<Object>} 包含 header 和 footer 导航数据的对象
 */
export async function fetchNavigation() {
  await mockDelay(50)

  const { pages, common } = await fetchAllPages()

  // Header 导航：过滤出需要在 header 显示的页面
  const headerNav = pages
    .filter(page => page.showInHeader)
    .sort((a, b) => a.navOrder - b.navOrder)
    .map(page => ({
      label: page.navLabel,
      to: page.route,
      routeName: page.routeName
    }))

  // Footer 导航：过滤出需要在 footer 显示的页面
  const footerNav = pages
    .filter(page => page.showInFooter)
    .sort((a, b) => a.navOrder - b.navOrder)
    .map(page => ({
      label: page.navLabel,
      to: page.route,
      routeName: page.routeName
    }))

  return {
    header: {
      ...common.header,
      navigation: headerNav
    },
    footer: {
      ...common.footer,
      navigation: footerNav
    }
  }
}
