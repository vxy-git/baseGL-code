import { ref, onMounted, onUnmounted } from 'vue'
import { MOBILE_BREAKPOINT } from '@/composables/fit'

/**
 * 移动端检测 composable
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
