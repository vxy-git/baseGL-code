import { ref, onMounted, onUnmounted } from 'vue'
import { MOBILE_BREAKPOINT } from '@/composables/fit'

/**
 * 移动端检测 composable
 * @deprecated 此 composable 未被任何组件使用。
 * 项目中所有移动端检测都是直接在组件内通过 composables/fit.js 的 MOBILE_BREAKPOINT 常量自行判断。
 * 如需统一移动端检测逻辑，建议删除此文件并迁移到 MediaAsset.vue 中的 updateIsMobile 模式。
 *
 * 封装 isMobile ref + resize 事件监听 + 生命周期管理
 * 供页面组件和全局组件统一使用
 */
export function useMobileDetect() {
  const isClient = typeof window !== 'undefined'
  const isMobile = ref(isClient ? window.innerWidth < MOBILE_BREAKPOINT : false)

  const updateIsMobile = () => {
    if (!isClient) return
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  }

  onMounted(() => {
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile)
  })

  return { isMobile }
}
