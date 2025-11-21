<script setup>
import {onMounted, ref, watch, computed, onUnmounted} from "vue";
import { useEventListener } from '@vueuse/core'
import NavDropdown from "@/components/Nav/index.vue";

const logoImage = "@/assets/img/icon11.png";
const productImage = 'https://www.figma.com/api/mcp/asset/7cfd8a26-51a1-4fef-a8d0-b5764e769beb'

// 从Nav组件迁移分类和产品数据
const categories = ref([
  {
    id: 1,
    label: 'For Resin/Rosin',
    products: [
      { id: 1, name: 'UNIT PRO', badge: 'New', variant: '1mL/2mL', image: productImage },
      { id: 2, name: 'UNIT MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 3, name: 'UNIT MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 4, name: 'UNIT PLUS', badge: 'New', variant: '1.5mL', image: productImage },
      { id: 5, name: 'UNIT SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 6, name: 'UNIT BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 2,
    label: 'Pod System',
    products: [
      { id: 7, name: 'POD X1', badge: 'New', variant: '1mL', image: productImage },
      { id: 8, name: 'POD X2', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 9, name: 'POD PRO', badge: '', variant: '1.5mL', image: productImage },
      { id: 10, name: 'POD MINI', badge: '', variant: '0.8mL', image: productImage },
      { id: 11, name: 'POD MAX', badge: 'New', variant: '3mL', image: productImage },
      { id: 12, name: 'POD LITE', badge: '', variant: '1mL', image: productImage },
    ]
  },
  {
    id: 3,
    label: 'Full Ceramic',
    products: [
      { id: 13, name: 'CERAMIC PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 14, name: 'CERAMIC MAX', badge: '', variant: '2mL', image: productImage },
      { id: 15, name: 'CERAMIC MINI', badge: 'Hot', variant: '0.5mL', image: productImage },
      { id: 16, name: 'CERAMIC PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 17, name: 'CERAMIC SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 18, name: 'CERAMIC BASIC', badge: 'New', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 4,
    label: 'D9 Distillate',
    products: [
      { id: 19, name: 'D9 PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 20, name: 'D9 MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 21, name: 'D9 MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 22, name: 'D9 PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 23, name: 'D9 SLIM', badge: 'New', variant: '1mL', image: productImage },
      { id: 24, name: 'D9 BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 5,
    label: 'US Stock',
    products: [
      { id: 25, name: 'US PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 26, name: 'US MAX', badge: '', variant: '2mL', image: productImage },
      { id: 27, name: 'US MINI', badge: 'Hot', variant: '0.5mL', image: productImage },
      { id: 28, name: 'US PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 29, name: 'US SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 30, name: 'US BASIC', badge: 'New', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 6,
    label: 'Dab Pen',
    products: [
      { id: 31, name: 'DAB PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 32, name: 'DAB MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 33, name: 'DAB MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 34, name: 'DAB PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 35, name: 'DAB SLIM', badge: 'New', variant: '1mL', image: productImage },
      { id: 36, name: 'DAB BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 7,
    label: '510 Cartridge',
    products: [
      { id: 37, name: '510 PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 38, name: '510 MAX', badge: '', variant: '2mL', image: productImage },
      { id: 39, name: '510 MINI', badge: 'Hot', variant: '0.5mL', image: productImage },
      { id: 40, name: '510 PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 41, name: '510 SLIM', badge: '', variant: '1mL', image: productImage },
      { id: 42, name: '510 BASIC', badge: 'New', variant: '1mL/2mL', image: productImage },
    ]
  },
  {
    id: 8,
    label: 'D8 Distillate',
    products: [
      { id: 43, name: 'D8 PRO', badge: 'New', variant: '1mL', image: productImage },
      { id: 44, name: 'D8 MAX', badge: 'Hot', variant: '2mL', image: productImage },
      { id: 45, name: 'D8 MINI', badge: '', variant: '0.5mL', image: productImage },
      { id: 46, name: 'D8 PLUS', badge: '', variant: '1.5mL', image: productImage },
      { id: 47, name: 'D8 SLIM', badge: 'New', variant: '1mL', image: productImage },
      { id: 48, name: 'D8 BASIC', badge: '', variant: '1mL/2mL', image: productImage },
    ]
  },
])

const props = defineProps({
  headerClass:{
    type:String,
    default:"opacity"
  },
  border:{
    type:Boolean
  }
})

// 使用本地可变状态而不是直接修改只读的 props
const currentHeaderClass = ref(props.headerClass)

// 若父组件变更传入的值，则同步到本地状态
watch(() => props.headerClass, (val) => {
  currentHeaderClass.value = val
})

// ========== 移动端状态管理 ==========
const screenWidth = ref(window.innerWidth)
const isMobile = computed(() => screenWidth.value < 768)

// 移动端菜单状态
const isMobileMenuOpen = ref(false)
const currentLevel = ref(0) // 0=关闭, 1=一级菜单, 2=二级页面
const currentMenuItem = ref(null) // 当前二级页面的菜单项
const expandedCategoryId = ref(null) // 二级页面中当前展开的分类ID(单一展开模式)

// 下拉菜单相关
const showDropdown = ref(false)
let hoverTimer = null
let closeTimer = null

// 鼠标进入 Products 链接
const handleProductsMouseEnter = () => {
  // 清除所有定时器
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }

  // 立即切换为白色背景
  currentHeaderClass.value = "white"

  // 稍微延迟打开，避免误触
  hoverTimer = setTimeout(() => {
    showDropdown.value = true
  }, 100)
}

// 鼠标离开 Products 链接
const handleProductsMouseLeave = () => {
  // 清除打开定时器
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }

  // 延迟关闭，给用户时间移动到下拉菜单
  closeTimer = setTimeout(() => {
    showDropdown.value = false
  }, 300)
}

// 鼠标进入下拉菜单
const handleDropdownMouseEnter = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

// 鼠标离开下拉菜单
const handleDropdownMouseLeave = () => {
  closeTimer = setTimeout(() => {
    showDropdown.value = false
  }, 100)
}

// 关闭下拉菜单
const closeDropdown = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  showDropdown.value = false

  // 智能恢复背景颜色
  // 如果 props.headerClass 强制为 white，保持白色
  if (props.headerClass === "white") {
    currentHeaderClass.value = "white"
  } else {
    // 否则根据滚动位置决定
    if (document.documentElement.scrollTop > 20) {
      currentHeaderClass.value = "white"
    } else {
      currentHeaderClass.value = "opacity"
    }
  }
}

// ========== 移动端交互方法 ==========
// 切换移动端菜单
const toggleMobileMenu = () => {
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

// 打开 Products 二级页面
const openProductsPage = () => {
  currentLevel.value = 2
  currentMenuItem.value = 'products'
}

// 返回一级菜单
const goBackToLevel1 = () => {
  currentLevel.value = 1
  currentMenuItem.value = null
  expandedCategoryId.value = null
}

// 切换分类展开/折叠(单一展开模式)
const toggleCategory = (categoryId) => {
  // 如果点击的是当前展开的分类,则关闭它
  if (expandedCategoryId.value === categoryId) {
    expandedCategoryId.value = null
  } else {
    // 否则关闭其他分类,展开新点击的分类
    expandedCategoryId.value = categoryId
  }
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  currentLevel.value = 0
  currentMenuItem.value = null
  expandedCategoryId.value = null
  document.body.style.overflow = ''
}

// 产品点击
const handleProductClick = () => {
  closeMobileMenu()
}

// 生命周期
onMounted(() => {
  // 滚动监听
  addEventListener("scroll", e => {
    if(props.headerClass === "white")return
    if(document.documentElement.scrollTop > 20){
      currentHeaderClass.value = "white"
    }else{
      currentHeaderClass.value = "opacity"
    }
  })

  // 窗口大小变化监听
  useEventListener(window, 'resize', () => {
    screenWidth.value = window.innerWidth
    // 切换到桌面端时自动关闭移动菜单
    if (!isMobile.value && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  })
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

</script>

<template>
  <div :class="{
      'white':currentHeaderClass === 'white',
      'opacity':currentHeaderClass === 'opacity',
    }" class="w-full flex items-center fixed top-0 left-0 z-[100] justify-center">
    <div class="w-full box transition-all" :class="` ${border && 'border-b-solid border-black/5 border-b-[1px]'}`">
      <header class="top-nav container-1300 mx-auto">
        <div class="nav-left">
          <div class="logo">
            <img v-show="currentHeaderClass==='opacity'" src="@/assets/img/icon11.png" alt="Caleaf Tech logo"
              class="logo-image" />
            <img v-show="currentHeaderClass==='white'" src="@/assets/img/icon11_active.png" alt="Caleaf Tech logo"
              class="logo-image" />
            <span class="logo-text">CALEAF TECH</span>
          </div>
          <!-- 桌面端导航 -->
          <nav v-if="!isMobile" class="nav-links">
            <a href="#" class="nav-link nav-link-dropdown" :class="{ active: showDropdown }"
              @mouseenter="handleProductsMouseEnter" @mouseleave="handleProductsMouseLeave">Products</a>
            <!-- <a href="#" class="nav-link">Technology</a> -->
            <router-link to="/technology" class="nav-link">Technology</router-link>
            <a href="#" class="nav-link">Customize</a>
            <a href="#" class="nav-link">US Local Service</a>
            <a href="#" class="nav-link">Why Caleaf</a>
          </nav>
        </div>
        <div class="nav-right">
          <!-- 桌面端右侧按钮 -->
          <button v-if="!isMobile" class="contact-button">Contact</button>
          <button v-if="!isMobile" class="icon-button" aria-label="Search">
            <img v-show="currentHeaderClass==='opacity'" src="@/assets/img/icon12.png" alt="" />
            <img v-show="currentHeaderClass==='white'" src="@/assets/img/icon12_active.png" alt="" />
          </button>

          <!-- 移动端汉堡按钮 -->
          <button v-if="isMobile" class="hamburger-btn" :class="{ 'active': isMobileMenuOpen }"
            @click="toggleMobileMenu" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </div>
  </div>

  <!-- 桌面端下拉菜单 -->
  <NavDropdown v-if="!isMobile && showDropdown" :visible="showDropdown" :onContentMouseEnter="handleDropdownMouseEnter"
    :onContentMouseLeave="handleDropdownMouseLeave" @close="closeDropdown" />

  <!-- 移动端全屏抽屉 -->
  <Transition name="slide-down">
    <div v-if="isMobile && isMobileMenuOpen" class="mobile-drawer">
      <!-- 动态Header -->
      <div class="mobile-drawer-header">
        <!-- 一级菜单Header -->
        <template v-if="currentLevel === 1">
          <div class="logo">
            <img src="@/assets/img/icon11_active.png" alt="Caleaf Tech logo" class="logo-image" />
          </div>
          <button class="close-btn active" @click="closeMobileMenu" aria-label="Close">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </template>

        <!-- 二级页面Header -->
        <template v-if="currentLevel === 2">
          <button class="back-btn" @click="goBackToLevel1" aria-label="Back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <span class="page-title">Products</span>
          <button class="close-btn active" @click="closeMobileMenu" aria-label="Close">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </template>
      </div>

      <!-- 页面内容区域 -->
      <div class="mobile-drawer-content">
        <!-- 一级菜单页面 -->
        <Transition name="page-slide">
          <div v-if="currentLevel === 1" class="level-1-page">
            <div class="mobile-nav-list">
              <div class="mobile-nav-item">
                <div class="nav-item-header" @click="openProductsPage">
                  <span>Products</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </div>
              </div>

              <div class="mobile-nav-item">
                <router-link to="/technology" class="nav-item-link" @click="closeMobileMenu">
                  <span>Technology</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </router-link>
              </div>

              <div class="mobile-nav-item">
                <a href="#" class="nav-item-link" @click="closeMobileMenu">
                  <span>Customize</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </a>
              </div>

              <div class="mobile-nav-item">
                <a href="#" class="nav-item-link" @click="closeMobileMenu">
                  <span>US Local Service</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </a>
              </div>

              <div class="mobile-nav-item">
                <a href="#" class="nav-item-link" @click="closeMobileMenu">
                  <span>Why Caleaf</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Transition>

        <!-- 二级Products页面 -->
        <Transition name="page-slide">
          <div v-if="currentLevel === 2" class="level-2-page">
            <div class="category-list">
              <div v-for="category in categories" :key="category.id" class="category-item">
                <div class="category-header" @click="toggleCategory(category.id)">
                  <span>{{ category.label }}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"
                    class="arrow" :class="{ 'expanded': expandedCategoryId === category.id }">
                    <polyline points="4 6 8 10 12 6"></polyline>
                  </svg>
                </div>

                <!-- 三级：产品列表 -->
                <Transition name="expand">
                  <div v-show="expandedCategoryId === category.id" class="product-list">
                    <a v-for="product in category.products" :key="product.id" :href="`/product${product.id}`"
                      class="product-item" @click="handleProductClick">
                      <img :src="product.image" :alt="product.name" />
                      <div class="product-info">
                        <div class="product-name">
                          {{ product.name }}
                          <span v-if="product.badge" class="badge">{{ product.badge }}</span>
                        </div>
                        <div class="product-variant">{{ product.variant }}</div>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"
                        stroke-width="1.5" class="chevron-right">
                        <polyline points="4 9 7 6 4 3"></polyline>
                      </svg>
                    </a>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- 底部CTA区域 -->
      <div class="mobile-drawer-footer">
        <button class="cta-btn" @click="closeMobileMenu">Contact Us</button>
        <button class="search-btn" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="9" r="6"></circle>
            <line x1="14" y1="14" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">

.white {
  .box {
    background-color: white !important;

    .nav-link {
      color: #555555;
    }
  }
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 110px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 187px;
  height: 30px;
  object-fit: contain;
}

.logo-text {
  display: none;
}

.nav-links {
  display: flex;
  gap: 32px;
  font-size: 16px;
  color: #fff;
}

.nav-link {
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus {
  color: #1ce785 !important;
}

.nav-link-dropdown::after {
  content: '';
  position: absolute;
  bottom: -47px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateY(-4px);
}

.nav-link-dropdown:hover::after,
.nav-link-dropdown:focus::after,
.nav-link-dropdown.active::after {
  opacity: 1;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-button {
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(28, 231, 133, 0.25);

}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-button:hover {
  background-color: rgba(28, 231, 133, 0.1);
}

.icon-button img {
  width: 22px;
  height: 22px;
}

.divider {
  margin-top: 20px;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, rgba(232, 236, 243, 0), #e8ecf3 20%, #e8ecf3 80%, rgba(232, 236, 243, 0));
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;
}

.sidebar {
  width: 240px;
}

.sidebar-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 24px;
}

.category-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 16px;
  color: #555555;
}

.category-item {
  padding: 14px 20px;
  border-radius: 10px;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.category-item:hover {
  background-color: #f4f6fb;
  color: #111111;
}

.category-item.active {
  background-color: #f8f9fd;
  color: #111111;
  box-shadow: inset 0 0 0 1px rgba(232, 236, 243, 0.8);
}

.grid-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.product-card {
  position: relative;
  background-color: #f8f9fd;
  border-radius: 20px;
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  box-shadow: 0 12px 30px rgba(17, 17, 17, 0.04);
}

.badge {
  position: absolute;
  top: 18px;
  left: 24px;
  padding: 4px 14px;
  border-radius: 50px;
  background-color: transparent;
  color: #1ce785;
  font-size: 16px;
  font-weight: 500;
}

.product-image {
  width: 135px;
  height: 120px;
  object-fit: contain;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.product-name {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
}

.product-variant {
  font-size: 14px;
  color: #111111;
  background-color: #1ce785;
  padding: 6px 22px;
  border-radius: 50px;
  font-weight: 500;
}

.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 14px 34px;
  border-radius: 50px;
  border: 1px solid #ededed;
  background-color: #ffffff;
  font-size: 16px;
  color: #333333;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button img {
  width: 20px;
  height: 20px;
}

.cta-button:hover {
  background-color: #f8f9fd;
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}

// ========== 移动端样式 ==========

// 汉堡按钮
.hamburger-btn {
  position: relative;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 201;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }

  &.active {
    span:nth-child(1) {
      transform: translateY(11px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    span:nth-child(3) {
      transform: translateY(-11px) rotate(-45deg);
    }
  }
}

// 移动端全屏抽屉
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 200;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

// 抽屉Header
.mobile-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  flex-shrink: 0;

  .logo {
    display: flex;
    align-items: center;

    .logo-image {
      width: 140px;
      height: 24px;
      object-fit: contain;
    }
  }

  .back-btn,
  .close-btn {
    position: relative;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 201;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: #000;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }

    svg {
      width: 100%;
      height: 100%;
    }

    &.active {
      span:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }

      span:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    }
  }

  .page-title {
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin: 0 8px;
  }
}

// 抽屉内容区域（可滚动）
.mobile-drawer-content {
  flex: 1;
  overflow-y: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

// 一级菜单页面
.level-1-page,
.level-2-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
}

.mobile-nav-list {
  padding: 10px 0;
}

.mobile-nav-item {
  border-bottom: 1px solid #f0f0f0;

  .nav-item-header,
  .nav-item-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    font-size: 16px;
    font-weight: 500;
    color: #222;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:active {
      background-color: #f5f5f5;
    }

    svg {
      width: 2rem;
      height: 2rem;
      opacity: 0.4;
      flex-shrink: 0;
      transition: transform 0.2s;
    }
  }
}

// 二级分类列表
.category-list {
  .category-item {
    border-bottom: 1px solid #e5e5e5;

    .category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 20px;
      font-size: 16px;
      font-weight: 500;
      color: #222;
      cursor: pointer;
      transition: background-color 0.2s;

      &:active {
        background-color: #f5f5f5;
      }

      .arrow {
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;
        transition: transform 0.3s;

        &.expanded {
          transform: rotate(180deg);
        }
      }
    }
  }
}

// 三级产品列表
.product-list {
  background: #f9f9f9;

  .product-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px 20px 15px 40px;
    gap: 12px;
    text-decoration: none;
    transition: background-color 0.2s;

    &:active {
      background-color: #efefef;
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      flex-shrink: 0;
      border-radius: 8px;
      background: #fff;
    }

    .product-info {
      flex: 1;
      min-width: 0;

      .product-name {
        font-size: 14px;
        font-weight: 600;
        color: #111;
        display: flex;
        align-items: center;
        gap: 6px;
        line-height: 1.4;

        .badge {
          font-size: 10px;
          padding: 2px 6px;
          // background: #ff6b6b;
          // color: white;
          border-radius: 3px;
          font-weight: 500;
          flex-shrink: 0;
        }
      }

      .product-variant {
        font-size: 12px;
        color: #666;
        margin-top: 4px;
        line-height: 1.3;
      }
    }

    .chevron-right {
      opacity: 0.3;
      flex-shrink: 0;
    }
  }
}

// 抽屉底部区域
.mobile-drawer-footer {
  padding: 16px 20px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  background: #fff;

  .cta-btn {
    flex: 1;
    height: 48px;
    background: #1CE785;
    color: #222;
    border: none;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:active {
      transform: scale(0.98);
      box-shadow: 0 4px 12px rgba(28, 231, 133, 0.3);
    }
  }

  .search-btn {
    width: 48px;
    height: 48px;
    background: #f5f5f5;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:active {
      background-color: #e5e5e5;
    }

    svg {
      color: #666;
    }
  }
}

// ========== 动画 ==========

// 抽屉滑入滑出
.slide-down-enter-active {
  animation: slideDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-down-leave-active {
  animation: slideDown 0.3s reverse ease-in;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// 页面切换动画
.page-slide-enter-active,
.page-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-slide-enter-from {
  transform: translateX(100%);
}

.page-slide-leave-to {
  transform: translateX(-30%);
  opacity: 0.5;
}

.page-slide-enter-to,
.page-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

// 手风琴展开动画
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 600px;
  opacity: 1;
}

@media (max-width: 767px) {

  // Header 适配移动端尺寸
  .top-nav {
    height: 70px;
    padding: 0 20px;
  }

  .logo-image {
    width: 140px;
    height: 24px;
  }

  // 隐藏桌面端导航链接
  .nav-links {
    display: none;
  }

  // 隐藏桌面端按钮
  .contact-button,
  .icon-button {
    display: none;
  }

  // 移动端 box 添加底部边框
  .white .box,
  .opacity .box {
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
