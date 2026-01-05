<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useCmsNavStore } from '@/stores/cmsNav'
import '@splidejs/vue-splide/css';
import './composables/rem'

const route = useRoute()
const cmsNavStore = useCmsNavStore()

// App 启动时立即获取全局导航数据
cmsNavStore.fetchAllNavs()
// App级别的逻辑可以在这里添加
</script>

<style lang="scss">
// Tailwind CSS 导入
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
    font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

// 路由切换动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Splide 自定义样式优化
// Banner 轮播需要 100% 高度
.banner-container .splide__track {
  height: 100%;
}

// 产品和新闻轮播需要溢出可见(支持阴影、放大效果)
.unit2 .splide__track,
.unit5 .splide__track {
  overflow: visible;
}
</style>
