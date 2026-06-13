<script setup>
import { computed } from 'vue'
import { useMobileDetect } from '@/composables/useMobileDetect'
import { useRenderList } from '@/composables/useRenderList'
import Header from '@/components/Header/index.vue'
import Splide4 from '@/components/Splide4/index.vue'
import Footer from '@/components/Footer/Footer.vue'
import Unit1 from './components/Unit1/index.vue'
import Unit2 from './components/Unit2/index.vue'
import Unit4 from './components/Unit4/index.vue'
import Unit5 from './components/Unit5/index.vue'
import Unit6 from './components/Unit6/index.vue'
import Unit8 from './components/Unit8/index.vue'
import Unit9 from './components/Unit9/index.vue'
import Unit10 from './components/Unit10/index.vue'
import Unit11 from './components/Unit11/index.vue'
import Unit12 from './components/Unit12/index.vue'
import m_Unit12 from './components/Unit12/m_index.vue'

// 接收 pageConfig
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
  unit4: Unit4,
  unit5: Unit5,
  unit6: Unit6,
  unit8: Unit8,
  unit9: Unit9,
  unit10: Unit10,
  unit11: Unit11,
  unit12: Unit12,
  m_unit12: m_Unit12,
}

// 定义默认 Unit 顺序
const defaultOrder = computed(() => {
  if (!isMobile.value) {
    return [
      'unit1',
      'unit2',
      'unit4',
      'unit5',
      'unit6',
      'unit8',
      'unit9',
      'unit10',
      'unit11',
      'unit12',
    ]
  }
  return [
    'unit1',
    'unit2',
    'unit4',
    'unit5',
    'unit6',
    'unit8',
    'unit9',
    'unit10',
    'unit11',
    'm_unit12',
  ]
})

// m_unitX → unitX 的数据键映射
const dataKeyFor = key => (key.startsWith('m_') ? key.substring(2) : key)

// 动态渲染列表（CMS 数据优先，本地降级）
const { renderList } = useRenderList(props, componentMap, defaultOrder, dataKeyFor)

const wrapperClass = {
  unit2: 'bg-[#F8F9FD] pt-[97px] pb-[120px]',
  unit4: 'bg-[#F8F9FD] pt-[97px] pb-[120px]',
  unit5: 'bg-black',
  unit6: 'bg-black',
  unit8: 'bg-black',
  unit9: 'bg-black',
  unit10: 'bg-black',
}
</script>

<template>
  <div class="overflow-hidden">
    <Header />

    <!-- 动态渲染 Unit -->
    <template v-for="item in renderList" :key="item.key">
      <div v-if="wrapperClass[item.key]" :class="wrapperClass[item.key]">
        <component :is="item.component" :data="item.data" />
      </div>
      <component :is="item.component" v-else :data="item.data" />
    </template>

    <Splide4 />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
