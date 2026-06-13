<script setup>
import { useRenderList } from '@/composables/useRenderList'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
import Unit1 from './components/Unit1/index.vue'
import Unit2 from './components/Unit2/index.vue'
import Unit3 from './components/Unit3/index.vue'
import Unit4 from './components/Unit4/index.vue'
import Unit5 from './components/Unit5/index.vue'
import Unit6 from './components/Unit6/index.vue'
import Unit7 from './components/Unit7/index.vue'
import Unit8 from './components/Unit8/index.vue'

const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({})
  }
})

const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
  unit3: Unit3,
  unit4: Unit4,
  unit5: Unit5,
  unit6: Unit6,
  unit7: Unit7,
  unit8: Unit8
}

const defaultOrder = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8']

// 动态渲染列表（CMS 数据优先，本地降级）
const { renderList } = useRenderList(props, componentMap, defaultOrder)
</script>

<template>
  <div class="why-caleaf-page">
    <!-- Header 区域 -->
    <div class="why-caleaf-header-wrapper">
      <Header headerClass="white" showLine />
    </div>

    <!-- 动态渲染 Unit -->
    <component v-for="item in renderList" :key="item.key" :is="item.component" :data="item.data" />

    <!-- Footer -->
    <Footer showLine />
  </div>
</template>

<style lang="scss" scoped>
.why-caleaf-page {
  width: 100%;
}

.why-caleaf-header-wrapper {
  background: #FFFFFF;
}
</style>
