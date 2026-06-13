<script setup>
import { computed } from 'vue'
import { useMobileDetect } from '@/composables/useMobileDetect'
import { useRenderList } from '@/composables/useRenderList'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/index.vue'
import Splide4 from '@/components/Splide4/index.vue'
import Unit1 from './components/Unit1/index.vue'
import Unit2 from './components/Unit2/index.vue'
import m_Unit2 from './components/Unit2/m_index.vue'
import Unit4 from './components/Unit4/index.vue'
import m_Unit4 from './components/Unit4/m_index.vue'
import Unit5 from './components/Unit5/index.vue'
import m_Unit5 from './components/Unit5/m_index.vue'
import Unit6 from './components/Unit6/index.vue'
import Unit7 from './components/Unit7/index.vue'

const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({}),
  },
})

const { isMobile } = useMobileDetect()

const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
  m_unit2: m_Unit2,
  unit4: Unit4,
  m_unit4: m_Unit4,
  unit5: Unit5,
  m_unit5: m_Unit5,
  unit6: Unit6,
  unit7: Unit7,
}

// 定义默认 Unit 顺序（PC/移动端切换）
const defaultOrder = computed(() => {
  if (!isMobile.value) {
    return ['unit1', 'unit2', 'unit4', 'unit5', 'unit6', 'unit7']
  }
  return ['unit1', 'm_unit2', 'm_unit4', 'm_unit5', 'unit6', 'unit7']
})

// CMS 数据 key 映射：m_unitX → unitX
const dataKeyFor = key => (key.startsWith('m_') ? key.substring(2) : key)

// 动态渲染列表（CMS 数据优先，本地降级）
const { renderList } = useRenderList(props, componentMap, defaultOrder, dataKeyFor)
</script>

<template>
  <div class="relative bg-black">
    <Header />
    <component :is="item.component" v-for="item in renderList" :key="item.key" :data="item.data" />
    <Splide4 />
    <Footer />
  </div>
</template>
