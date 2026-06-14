import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import { MOBILE_BREAKPOINT } from '@/composables/fit'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'

/**
 * Header 导航交互逻辑 composable
 * 管理桌面端下拉、移动端抽屉、滚动响应等状态
 *
 * @param {import('vue').Ref|import('vue').ComputedRef} propsHeaderClass - 父组件传入的 headerClass
 * @returns {Object} 导航状态和方法
 */
const SCROLL_HEADER_THRESHOLD = 20

export function useHeaderNav(propsHeaderClass) {
  const router = useRouter()
  const { lock: lockScroll, unlock: unlockScroll } = useBodyScrollLock()

  // ========== Header 样式状态 ==========
  const currentHeaderClass = ref(propsHeaderClass.value || 'opacity')

  watch(propsHeaderClass, val => {
    currentHeaderClass.value = val
  })

  // ========== 移动端检测 ==========
  const screenWidth = ref(window.innerWidth)
  const isMobile = computed(() => screenWidth.value < MOBILE_BREAKPOINT)

  // ========== 移动端菜单状态 ==========
  const isMobileMenuOpen = ref(false)
  const currentLevel = ref(0) // 0=关闭, 1=一级菜单, 2=二级页面
  const currentMenuItem = ref(null)
  const expandedCategoryId = ref(null)

  // ========== 下拉菜单状态 ==========
  const showDropdown = ref(false)
  let hoverTimer = null
  let closeTimer = null

  // ========== 桌面端下拉交互 ==========
  function handleProductsMouseEnter() {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      hoverTimer = null
    }
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }
    currentHeaderClass.value = 'white'
    hoverTimer = setTimeout(() => {
      showDropdown.value = true
    }, 100)
  }

  function handleProductsMouseLeave() {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      hoverTimer = null
    }
    closeTimer = setTimeout(() => {
      showDropdown.value = false
      restoreHeaderClass()
    }, 300)
  }

  function handleDropdownMouseEnter() {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      hoverTimer = null
    }
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }
  }

  function handleDropdownMouseLeave() {
    closeTimer = setTimeout(() => {
      showDropdown.value = false
    }, 100)
  }

  function restoreHeaderClass() {
    if (propsHeaderClass.value === 'white') {
      currentHeaderClass.value = 'white'
    } else {
      currentHeaderClass.value =
        document.documentElement.scrollTop > SCROLL_HEADER_THRESHOLD ? 'white' : 'opacity'
    }
  }

  function closeDropdown() {
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      hoverTimer = null
    }
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }
    showDropdown.value = false
    restoreHeaderClass()
  }

  // ========== 移动端交互方法 ==========
  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (isMobileMenuOpen.value) {
      currentLevel.value = 1
      lockScroll()
    } else {
      currentLevel.value = 0
      currentMenuItem.value = null
      expandedCategoryId.value = null
      unlockScroll()
    }
  }

  function openProductsPage() {
    currentLevel.value = 2
    currentMenuItem.value = null
  }

  function openSubmenuPage(item) {
    currentLevel.value = 3
    currentMenuItem.value = item
  }

  function goBackToLevel1() {
    currentLevel.value = 1
    currentMenuItem.value = null
    expandedCategoryId.value = null
  }

  function toggleCategory(categoryId) {
    expandedCategoryId.value = expandedCategoryId.value === categoryId ? null : categoryId
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
    currentLevel.value = 0
    currentMenuItem.value = null
    expandedCategoryId.value = null
    unlockScroll()
  }

  // ========== 导航方法 ==========
  function goContact() {
    closeMobileMenu()
    router.push('/contact')
  }

  function goHome() {
    closeMobileMenu()
    router.push('/')
  }

  function productLink(linkType) {
    return `/${linkType}`
  }

  function handleProductClick(linkType) {
    closeMobileMenu()
    if (!linkType) return
    router.push(productLink(linkType))
  }

  // ========== 生命周期 ==========
  let scrollHandler = null
  let scrollTicking = false

  onMounted(() => {
    scrollHandler = () => {
      if (scrollTicking) return
      scrollTicking = true
      requestAnimationFrame(() => {
        if (propsHeaderClass.value !== 'white') {
          currentHeaderClass.value =
            document.documentElement.scrollTop > SCROLL_HEADER_THRESHOLD ? 'white' : 'opacity'
        }
        scrollTicking = false
      })
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
  })

  useEventListener(window, 'resize', () => {
    screenWidth.value = window.innerWidth
    if (!isMobile.value && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  })

  onUnmounted(() => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler = null
    }
    if (hoverTimer) {
      clearTimeout(hoverTimer)
      hoverTimer = null
    }
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }
    unlockScroll()
  })

  function handleSubmenuOpen() {
    currentHeaderClass.value = 'white'
  }

  function handleSubmenuClose() {
    if (propsHeaderClass.value === 'white') return
    if (document.documentElement.scrollTop > SCROLL_HEADER_THRESHOLD) return
    currentHeaderClass.value = propsHeaderClass.value
  }

  return {
    // 状态
    currentHeaderClass,
    isMobile,
    isMobileMenuOpen,
    currentLevel,
    currentMenuItem,
    expandedCategoryId,
    showDropdown,

    // 桌面端方法
    handleProductsMouseEnter,
    handleProductsMouseLeave,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
    closeDropdown,

    // 移动端方法
    toggleMobileMenu,
    openProductsPage,
    openSubmenuPage,
    goBackToLevel1,
    toggleCategory,
    closeMobileMenu,

    // 导航方法
    goContact,
    goHome,
    handleProductClick,
    handleSubmenuOpen,
    handleSubmenuClose,
  }
}
