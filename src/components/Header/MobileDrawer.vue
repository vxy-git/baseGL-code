<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import ProductItem from '@/components/ProductItem/index.vue'
import { headerData } from '@/data/common/header'

defineProps({
  navItems: { type: Array, required: true },
  categories: { type: Array, required: true },
  currentLevel: { type: Number, required: true },
  currentMenuItem: { type: Object, default: null },
  expandedCategoryId: { type: [String, Number], default: null },
})

const emit = defineEmits([
  'close',
  'go-back',
  'toggle-category',
  'product-click',
  'go-contact',
  'go-home',
  'open-products',
  'open-submenu',
])
</script>

<template>
  <Transition name="slide-down" appear>
    <div v-if="true" class="mobile-drawer">
      <!-- 动态Header -->
      <div class="mobile-drawer-header">
        <!-- 一级菜单Header -->
        <template v-if="currentLevel === 1">
          <router-link to="/" class="logo" @click="emit('go-home')">
            <MediaAsset type="image" :src="headerData.logo.active" alt="logo" class="logo-image" />
          </router-link>
          <button class="close-btn active" aria-label="Close" @click="emit('close')">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </template>

        <!-- 二级页面Header -->
        <template v-if="currentLevel === 2 || currentLevel === 3">
          <button class="back-btn" aria-label="Back" @click="emit('go-back')">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <span class="page-title">{{
            currentLevel === 3 ? currentMenuItem?.text : navItems[0]?.text || 'Products'
          }}</span>
          <button class="close-btn active" aria-label="Close" @click="emit('close')">
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
              <div v-for="(item, index) in navItems" :key="index" class="mobile-nav-item">
                <div
                  v-if="item.type === 'dropdown'"
                  class="nav-item-header"
                  @click="emit('open-products')"
                >
                  <span>{{ item.text }}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </div>
                <div
                  v-else-if="item.type === 'submenu'"
                  class="nav-item-header"
                  @click="emit('open-submenu', item)"
                >
                  <span>{{ item.text }}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </div>
                <router-link
                  v-else-if="item.to"
                  :to="item.to"
                  class="nav-item-link"
                  @click="emit('close')"
                >
                  <span>{{ item.text }}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </router-link>
                <a v-else :href="item.href" class="nav-item-link" @click="emit('close')">
                  <span>{{ item.text }}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Transition>

        <!-- 三级submenu页面 -->
        <Transition name="page-slide">
          <div v-if="currentLevel === 3" class="level-1-page">
            <div class="mobile-nav-list">
              <div v-for="(sub, si) in currentMenuItem?.submenu" :key="si" class="mobile-nav-item">
                <router-link
                  v-if="sub.to"
                  :to="sub.to"
                  class="nav-item-link"
                  @click="emit('close')"
                >
                  <span>{{ sub.text }}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </router-link>
                <a v-else :href="sub.href" class="nav-item-link" @click="emit('close')">
                  <span>{{ sub.text }}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="7 13 12 8 7 3"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Transition>
        <Transition name="page-slide">
          <div v-if="currentLevel === 2" class="level-2-page">
            <div class="category-list">
              <div v-for="category in categories" :key="category.id" class="category-item">
                <div class="category-header" @click="emit('toggle-category', category.id)">
                  <span>{{ category.label }}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="arrow"
                    :class="{ expanded: expandedCategoryId === category.id }"
                  >
                    <polyline points="4 6 8 10 12 6"></polyline>
                  </svg>
                </div>

                <!-- 三级：产品列表 -->
                <Transition name="expand">
                  <div v-show="expandedCategoryId === category.id" class="product-list">
                    <div
                      v-for="product in category.products"
                      :key="product.id"
                      class="product-card"
                    >
                      <ProductItem
                        :data="product"
                        :clickable="false"
                        @click="emit('product-click', product.linkType)"
                      />
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- 底部CTA区域 -->
      <div class="mobile-drawer-footer">
        <button class="cta-btn" @click="emit('go-contact')">
          {{ headerData.buttonText.contactUs }}
        </button>
        <button class="search-btn" aria-label="Search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="9" cy="9" r="6"></circle>
            <line x1="14" y1="14" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
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

.mobile-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  flex-shrink: 0;

  .logo {
    display: flex;
    align-items: center;
  }

  .logo-image {
    width: 150px;
    height: 24px;
    object-fit: contain;
  }

  .back-btn {
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 201;

    svg {
      width: 100%;
      height: 100%;
    }
  }

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

.mobile-drawer-content {
  flex: 1;
  overflow-y: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

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
    font-size: 22px;
    font-weight: 500;
    color: #222;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:active {
      background-color: #f5f5f5;
    }

    svg {
      width: 30px;
      height: 30px;
      opacity: 0.4;
      flex-shrink: 0;
      transition: transform 0.2s;
    }
  }
}

.category-list {
  .category-item {
    border-bottom: 1px solid #e5e5e5;

    .category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 20px;
      font-size: 22px;
      font-weight: 500;
      color: #222;
      cursor: pointer;
      transition: background-color 0.2s;

      &:active {
        background-color: #f5f5f5;
      }

      .arrow {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        transition: transform 0.3s;

        &.expanded {
          transform: rotate(180deg);
        }
      }
    }
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 20px 20px;
}

.mobile-drawer-footer {
  padding: 16px 20px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  background: #fff;

  .cta-btn {
    flex: 1;
    height: 68px;
    background: #1ce785;
    color: #222;
    border: none;
    border-radius: 24px;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;

    &:active {
      transform: scale(0.98);
      box-shadow: 0 4px 12px rgba(28, 231, 133, 0.3);
    }
  }

  .search-btn {
    width: 68px;
    height: 68px;
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
</style>
