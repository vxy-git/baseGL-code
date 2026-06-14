<script setup>
import { ref } from 'vue'

defineProps({
  navItems: {
    type: Array,
    required: true,
  },
  showDropdown: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['products-mouse-enter', 'products-mouse-leave'])

// 轻量 submenu 状态
const activeSubmenu = ref(null)

const openSubmenu = key => {
  activeSubmenu.value = key
}
const closeSubmenu = () => {
  activeSubmenu.value = null
}
</script>

<template>
  <nav class="nav-links">
    <template v-for="(item, index) in navItems" :key="index">
      <!-- Products 大型下拉 -->
      <a v-if="item.type === 'dropdown'" :class="['nav-link', 'nav-link-dropdown', { active: showDropdown }]"
        @mouseenter="emit('products-mouse-enter')" @mouseleave="emit('products-mouse-leave')">
        {{ item.text }}
      </a>

      <!-- 轻量 submenu -->
      <div v-else-if="item.type === 'submenu'" class="nav-item-submenu" @mouseenter="openSubmenu(index)"
        @mouseleave="closeSubmenu">
        <span :class="['nav-link', { active: activeSubmenu === index }]">
          {{ item.text }}
        </span>

        <div v-show="activeSubmenu === index" class="submenu-panel">
          <div class="submenu-indicator"></div>
          <ul class="submenu-list">
            <li v-for="(sub, si) in item.submenu" :key="si">
              <router-link v-if="sub.to" :to="sub.to" class="submenu-link">
                {{ sub.text }}
              </router-link>
              <a v-else :href="sub.href" class="submenu-link">{{ sub.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 普通链接 -->
      <router-link v-else-if="item.to" :to="item.to" class="nav-link">
        {{ item.text }}
      </router-link>
      <a v-else :href="item.href" class="nav-link">{{ item.text }}</a>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.nav-links {
  display: flex;
  gap: 32px;
  font-size: 16px;
  color: #fff;
  height: 100%;
}

.nav-link {
  position: relative;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: #1ce785 !important;
}

/* Products 下拉指示线 */
.nav-link-dropdown::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link-dropdown:hover::after,
.nav-link-dropdown.active::after {
  opacity: 1;
}

/* submenu 容器 */
.nav-item-submenu {
  position: relative;
  display: flex;
  align-items: center;
}

/* 轻量下拉面板 */
.submenu-panel {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 140px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 200;

  /* 进入动画 */
  animation: submenuIn 0.18s ease;
}

@keyframes submenuIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 上方小三角 */
.submenu-indicator {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 2px;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

/* 绿色指示线（和 nav-link-dropdown 一致） */
.nav-item-submenu .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #1ce785;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-item-submenu:hover .nav-link::after {
  opacity: 1;
}

.submenu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.submenu-link {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  white-space: nowrap;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: #1ce785;
    background: #f8fdf9;
  }
}
</style>
