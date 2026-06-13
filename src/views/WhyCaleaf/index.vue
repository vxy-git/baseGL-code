<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { MOBILE_BREAKPOINT } from '@/composables/fit'
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

const isClient = typeof window !== 'undefined'
const isMobile = ref(isClient ? window.innerWidth < MOBILE_BREAKPOINT : false)

const updateIsMobile = () => {
  if (!isClient) return
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
}

const defaultOrder = computed(() => {
  return ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8']
})

const renderList = computed(() => {
  const moduleList = props.pageConfig?.moduleList

  if (moduleList && Object.keys(moduleList).length > 0) {
    return defaultOrder.value
      .filter(key => moduleList[key] && moduleList[key].enabled !== false)
      .map(key => ({
        key,
        component: componentMap[key],
        data: moduleList[key].data
      }))
  }

  // 降级：无 CMS 数据或 moduleList 为空时使用默认渲染
  return defaultOrder.value.map(key => ({
    key,
    component: componentMap[key],
    data: null
  }))
})

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
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
