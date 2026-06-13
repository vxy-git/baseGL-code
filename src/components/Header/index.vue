<script setup>
import { computed, toRef } from 'vue'
import NavDropdown from '@/components/Nav/index.vue'
import MediaAsset from '@/components/MediaAsset.vue'
import DesktopNav from '@/components/Header/DesktopNav.vue'
import MobileDrawer from '@/components/Header/MobileDrawer.vue'
import { headerData } from '@/data/common/header'
import { productsData } from '@/data/productlist/products'
import { useCmsNavStore } from '@/stores/cmsNav'
import { useHeaderNav } from '@/composables/useHeaderNav'

const props = defineProps({
  headerClass: {
    type: String,
    default: 'opacity',
  },
  showLine: {
    type: Boolean,
  },
})

const cmsNavStore = useCmsNavStore()

const navItems = computed(() =>
  cmsNavStore.headerNavs.length > 0 ? cmsNavStore.headerNavs : headerData.navItems
)

const categories = computed(() => {
  // 优先使用 CMS 数据
  const cmsCategories = cmsNavStore.productCategories || []
  if (cmsCategories.length > 0) {
    return cmsCategories
  }

  // 降级到静态数据
  return productsData.tabs.map((label, idx) => ({
    id: idx + 1,
    label,
    products: (productsData.products[idx] || []).map(product => ({
      ...product,
      badge: product.isNew ? 'New' : '',
      variant: product.capacity,
    })),
  }))
})

const {
  currentHeaderClass,
  isMobile,
  isMobileMenuOpen,
  currentLevel,
  expandedCategoryId,
  showDropdown,
  handleProductsMouseEnter,
  handleProductsMouseLeave,
  handleDropdownMouseEnter,
  handleDropdownMouseLeave,
  closeDropdown,
  toggleMobileMenu,
  openProductsPage,
  goBackToLevel1,
  toggleCategory,
  closeMobileMenu,
  goContact,
  goHome,
  handleProductClick,
} = useHeaderNav(toRef(props, 'headerClass'))
</script>

<template>
  <div
    :class="{
      white: currentHeaderClass === 'white',
      opacity: currentHeaderClass === 'opacity',
    }"
    class="w-full flex items-center fixed top-0 left-0 z-[100] justify-center"
  >
    <div
      class="w-full box transition-all"
      :class="{ 'border-b-solid border-black/5 border-b-[1px]': showLine }"
    >
      <header class="top-nav c_1300 mx-auto c_padding">
        <div class="nav-left">
          <router-link to="/" class="logo" @click="goHome">
            <MediaAsset
              v-show="currentHeaderClass === 'opacity'"
              type="image"
              :src="headerData.logo.default"
              alt="logo"
              class="logo-image"
            />
            <MediaAsset
              v-show="currentHeaderClass === 'white'"
              type="image"
              :src="headerData.logo.active"
              alt="logo"
              class="logo-image"
            />
          </router-link>

          <!-- 桌面端导航 -->
          <DesktopNav
            v-if="!isMobile"
            :nav-items="navItems"
            :show-dropdown="showDropdown"
            @products-mouse-enter="handleProductsMouseEnter"
            @products-mouse-leave="handleProductsMouseLeave"
          />
        </div>

        <div class="nav-right">
          <!-- 桌面端右侧按钮 -->
          <button v-if="!isMobile" class="contact-button" @click="goContact">
            {{ headerData.buttonText.contact }}
          </button>
          <button v-if="!isMobile" class="icon-button" aria-label="Search">
            <MediaAsset
              v-show="currentHeaderClass === 'opacity'"
              type="image"
              :src="headerData.search.default"
              alt=""
            />
            <MediaAsset
              v-show="currentHeaderClass === 'white'"
              type="image"
              :src="headerData.search.active"
              alt=""
            />
          </button>

          <!-- 移动端汉堡按钮 -->
          <button
            v-if="isMobile"
            class="hamburger-btn"
            :class="{ active: isMobileMenuOpen }"
            aria-label="Menu"
            @click="toggleMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </div>
  </div>

  <!-- 桌面端下拉菜单 -->
  <NavDropdown
    v-if="!isMobile && showDropdown"
    :visible="showDropdown"
    :on-content-mouse-enter="handleDropdownMouseEnter"
    :on-content-mouse-leave="handleDropdownMouseLeave"
    @close="closeDropdown"
  />

  <!-- 移动端全屏抽屉 -->
  <MobileDrawer
    v-if="isMobile && isMobileMenuOpen"
    :nav-items="navItems"
    :categories="categories"
    :current-level="currentLevel"
    :expanded-category-id="expandedCategoryId"
    @close="closeMobileMenu"
    @go-back="goBackToLevel1"
    @toggle-category="toggleCategory"
    @product-click="handleProductClick"
    @go-contact="goContact"
    @go-home="goHome"
    @open-products="openProductsPage"
  />
</template>

<style scoped lang="scss">
.white {
  .box {
    background-color: white !important;

    :deep(.nav-link) {
      color: #555555;
    }
  }
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 97px;
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
  text-decoration: none;
  color: inherit;
  flex: 1;
}

.logo-image {
  width: 187px;
  height: 30px;
  object-fit: contain;
}

.logo-text {
  display: none;
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
  background: #1ce785;
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

.icon-button :deep(img) {
  width: 22px;
  height: 22px;
}

// ========== 汉堡按钮 ==========
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

.opacity .hamburger-btn span {
  background-color: #fff;
}
</style>
