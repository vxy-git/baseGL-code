<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true
  },
  showDropdown: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'products-mouse-enter',
  'products-mouse-leave'
])
</script>

<template>
  <nav class="nav-links">
    <a
      v-for="(item, index) in navItems"
      :key="index"
      :href="item.href"
      :class="['nav-link', { 'nav-link-dropdown': item.type === 'dropdown', active: item.type === 'dropdown' && showDropdown }]"
      @mouseenter="item.type === 'dropdown' && emit('products-mouse-enter')"
      @mouseleave="item.type === 'dropdown' && emit('products-mouse-leave')"
    >
      <router-link v-if="item.to" :to="item.to">{{ item.text }}</router-link>
      <template v-else>{{ item.text }}</template>
    </a>
  </nav>
</template>

<style scoped lang="scss">
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
  bottom: -40px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateY(-100%);
}

.nav-link-dropdown:hover::after,
.nav-link-dropdown:focus::after,
.nav-link-dropdown.active::after {
  opacity: 1;
}
</style>
