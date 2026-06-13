import { computed } from 'vue'

/**
 * 通用页面模块渲染列表 composable
 * 封装基于 pageConfig.moduleList 的动态组件渲染逻辑，
 * 支持 CMS 数据合并和本地数据降级。
 *
 * @param {Object}  props         - 组件的 props（需包含 pageConfig）
 * @param {Object}  componentMap  - 组件映射表，如 { unit1: Unit1, m_unit3: m_Unit3 }
 * @param {Ref|Array} defaultOrder - 默认 Unit 渲染顺序（computed 或普通数组）
 * @returns {{ renderList: ComputedRef }}
 */
export function useRenderList(props, componentMap, defaultOrder) {
  const renderList = computed(() => {
    // 兼容 moduleList 和 modules 两种 key 命名
    const moduleList = props.pageConfig?.moduleList || props.pageConfig?.modules

    const order = typeof defaultOrder.value !== 'undefined'
      ? defaultOrder.value
      : defaultOrder

    if (moduleList && Object.keys(moduleList).length > 0) {
      return order
        .filter(key => moduleList[key] && moduleList[key].enabled !== false)
        .map(key => ({
          key,
          component: componentMap[key],
          data: moduleList[key].data
        }))
    }

    // 降级：无 CMS 数据时使用默认渲染（组件内部使用本地数据）
    return order.map(key => ({
      key,
      component: componentMap[key],
      data: null
    }))
  })

  return { renderList }
}
