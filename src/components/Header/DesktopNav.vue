<script setup>
import { ref, watch, nextTick } from 'vue'
import gsap from 'gsap'

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

const emit = defineEmits([
  'products-mouse-enter',
  'products-mouse-leave',
  'submenu-open',
  'submenu-close',
])

const activeSubmenu = ref(null)
const submenuLeft = ref(0)
const panelRef = ref(null)
const overlayRef = ref(null)
let closeTimer = null

const openSubmenu = (index, event) => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  const rect = event.currentTarget.getBoundingClientRect()
  submenuLeft.value = rect.left + rect.width / 2
  activeSubmenu.value = index
  emit('submenu-open')
}

const scheduleClose = () => {
  closeTimer = setTimeout(() => {
    activeSubmenu.value = null
    emit('submenu-close')
  }, 150)
}

const cancelClose = index => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  activeSubmenu.value = index
  emit('submenu-open')
}

// 监听面板出现后触发入场动画（和 Products 一致）
watch(activeSubmenu, async val => {
  if (val !== null) {
    await nextTick()
    if (overlayRef.value) {
      gsap.fromTo(
        overlayRef.value,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
    }
    if (panelRef.value) {
      gsap.fromTo(
        panelRef.value,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      )
    }
  }
})
</script>

<template>
  <nav class="nav-links">
    <template v-for="(item, index) in navItems" :key="index">
      <!-- Products 大型下拉 -->
      <a
        v-if="item.type === 'dropdown'"
        :class="['nav-link', 'nav-link-dropdown', { active: showDropdown }]"
        @mouseenter="emit('products-mouse-enter')"
        @mouseleave="emit('products-mouse-leave')"
      >
        {{ item.text }}
      </a>

      <!-- 轻量 submenu，全宽面板 -->
      <div
        v-else-if="item.type === 'submenu'"
        class="nav-item-submenu"
        @mouseenter="openSubmenu(index, $event)"
        @mouseleave="scheduleClose"
      >
        <span :class="['nav-link', { active: activeSubmenu === index }]">
          {{ item.text }}
        </span>

        <Teleport to="body">
          <template v-if="activeSubmenu === index">
            <!-- 遮罩层（和 Products 一致） -->
            <div ref="overlayRef" class="submenu-overlay" @click="scheduleClose"></div>
            <!-- 全宽面板 -->
            <div
              ref="panelRef"
              class="submenu-fullwidth"
              @mouseenter="cancelClose(index)"
              @mouseleave="scheduleClose"
            >
              <ul class="submenu-list" :style="{ left: submenuLeft + 'px' }">
                <li v-for="(sub, si) in item.submenu" :key="si">
                  <router-link v-if="sub.to" :to="sub.to" class="submenu-link">
                    {{ sub.text }}
                  </router-link>
                  <a v-else :href="sub.href" class="submenu-link">{{ sub.text }}</a>
                </li>
              </ul>
            </div>
          </template>
        </Teleport>
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

.nav-item-submenu {
  position: relative;
  display: flex;
  align-items: center;
}

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

.nav-item-submenu:hover .nav-link::after,
.nav-item-submenu .nav-link.active::after {
  opacity: 1;
}
</style>

<style lang="scss">
.submenu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 98;
  backdrop-filter: blur(2px);
}

.submenu-fullwidth .submenu-list {
  list-style: none;
  margin: 0;
  padding: 29px 0 46px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: absolute;
  transform: translateX(-50%);
  min-width: 120px;
}

.submenu-fullwidth {
  position: fixed;
  top: 97px;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 131px; /* 保证白色背景可见 */
}

.submenu-fullwidth .submenu-link {
  width: 100%;
  text-align: center;
  display: block;
  color: #555;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.05em;
  transition: color 0.15s ease;

  &:hover {
    color: #1ce785;
  }
}
</style>
