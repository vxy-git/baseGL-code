import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import { MOBILE_BREAKPOINT } from '@/composables/fit'

/**
 * Header 导航交互逻辑 composable
 * 管理桌面端下拉、移动端抽屉、滚动响应等状态
 *
 * @param {import('vue').Ref|import('vue').ComputedRef} propsHeaderClass - 父组件传入的 headerClass
 * @returns {Object} 导航状态和方法
 */
export function useHeaderNav(propsHeaderClass) {
  const router = useRouter()

  // ========== Header 样式状态 ==========
  const currentHeaderClass = ref(propsHeaderClass.value || 'opacity')

  watch(propsHeaderClass, (val) => {
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
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null }
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
    currentHeaderClass.value = 'white'
    hoverTimer = setTimeout(() => { showDropdown.value = true }, 100)
  }

  function handleProductsMouseLeave() {
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null }
    closeTimer = setTimeout(() => { showDropdown.value = false }, 300)
  }

  function handleDropdownMouseEnter() {
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null }
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
  }

  function handleDropdownMouseLeave() {
    closeTimer = setTimeout(() => { showDropdown.value = false }, 100)
  }

  function closeDropdown() {
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null }
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
    showDropdown.value = false

    if (propsHeaderClass.value === 'white') {
      currentHeaderClass.value = 'white'
    } else {
      currentHeaderClass.value = document.documentElement.scrollTop > 20 ? 'white' : 'opacity'
    }
  }

  // ========== 移动端交互方法 ==========
  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    if (isMobileMenuOpen.value) {
      currentLevel.value = 1
      document.body.style.overflow = 'hidden'
    } else {
      currentLevel.value = 0
      currentMenuItem.value = null
      expandedCategoryId.value = null
      document.body.style.overflow = ''
    }
  }

  function openProductsPage() {
    currentLevel.value = 2
    currentMenuItem.value = 'products'
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
    document.body.style.overflow = ''
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

  onMounted(() => {
    scrollHandler = () => {
      if (propsHeaderClass.value === 'white') return
      currentHeaderClass.value = document.documentElement.scrollTop > 20 ? 'white' : 'opacity'
    }
    window.addEventListener('scroll', scrollHandler)

    useEventListener(window, 'resize', () => {
      screenWidth.value = window.innerWidth
      if (!isMobile.value && isMobileMenuOpen.value) {
        closeMobileMenu()
      }
    })
  })

  onUnmounted(() => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler = null
    }
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null }
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
    document.body.style.overflow = ''
  })

  return {
    // 状态
    currentHeaderClass,
    isMobile,
    isMobileMenuOpen,
    currentLevel,
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
    goBackToLevel1,
    toggleCategory,
    closeMobileMenu,

    // 导航方法
    goContact,
    goHome,
    handleProductClick
  }
}
