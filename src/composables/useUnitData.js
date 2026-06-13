import { computed } from 'vue'

/**
 * 通用 Unit 组件数据合并 composable
 *
 * 优先级：props.data > cmsData > localData
 * 支持浅合并和可选深层合并
 *
 * @param {Object}   props              - 组件的 props（需包含 data 字段）
 * @param {Object}   localData          - 本地默认数据对象
 * @param {Object}   [options]          - 可选配置
 * @param {import('vue').Ref|import('vue').ComputedRef} [options.cmsData] - CMS Store 降级数据
 * @param {string[]} [options.deepMergeKeys] - 需要深层合并的嵌套字段名
 * @returns {import('vue').ComputedRef<Object>}
 *
 * @example
 * // 标准用法（仅 props.data 合并）
 * const unitData = useUnitData(props, product1Unit1Data)
 *
 * @example
 * // 带 CMS Store 降级
 * const cmsData = computed(() => cmsNavStore.getNavByName('Home')?.moduleList?.unit5?.data)
 * const unitData = useUnitData(props, homeUnit5Data, { cmsData })
 *
 * @example
 * // 带深层合并
 * const unitData = useUnitData(props, product4Unit12Data, { deepMergeKeys: ['content', 'images'] })
 */
export function useUnitData(props, localData, options = {}) {
  const { cmsData, deepMergeKeys } = options

  return computed(() => {
    // 1. 优先使用 CMS 通过 props 传入的数据
    if (props.data && typeof props.data === 'object') {
      if (deepMergeKeys && deepMergeKeys.length > 0) {
        const result = { ...localData, ...props.data }
        for (const key of deepMergeKeys) {
          if (localData[key] && typeof localData[key] === 'object' && !Array.isArray(localData[key])) {
            result[key] = {
              ...localData[key],
              ...(props.data[key] || {})
            }
          }
        }
        return result
      }
      return { ...localData, ...props.data }
    }

    // 2. 降级到 CMS Store 数据
    if (cmsData?.value && typeof cmsData.value === 'object') {
      return { ...localData, ...cmsData.value }
    }

    // 3. 使用本地默认数据
    return localData
  })
}
