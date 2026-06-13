/**
 * 全局配置数据
 * 包含所有页面共享的 Header 和 Footer 基础数据
 */

import { headerData } from './header.js'
import { footerData } from './footer.js'

export default {
  // 模块数据集合
  modules: {
    headerData: {
      enabled: true,
      data: headerData,
    },
    footerData: {
      enabled: true,
      data: footerData,
    },
  },
}
