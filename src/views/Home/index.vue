<template>
  <div>
    <div>
      <Header />
      <component 
        v-for="item in renderList" 
        :key="item.key" 
        :is="item.component" 
        :data="item.data"
      />
      <div class="pt-[20px]">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Header from '@/components/Header/index.vue';
import Unit1 from "./components/Unit1/index.vue"
import Unit2 from "./components/Unit2/index.vue"
import Unit3 from "./components/Unit3/index.vue"
import Unit4 from "./components/Unit4/index.vue"
import Unit5 from "./components/Unit5/index.vue"
import Unit6 from "./components/Unit6/index.vue"
import Footer from "@/components/Footer.vue";

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
  unit6: Unit6
}

// 默认顺序
const defaultOrder = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6']

const renderList = computed(() => {
  const moduleList = props.pageConfig?.moduleList
  
  // 如果有 CMS 配置，基于配置生成
  if (moduleList) {
    return defaultOrder
      .filter(key => moduleList[key] && moduleList[key].enabled !== false)
      .map(key => ({
        key,
        component: componentMap[key],
        data: moduleList[key].data
      }))
  }

  // 否则返回默认列表（不传 data，组件内部会使用本地数据）
  return defaultOrder.map(key => ({
    key,
    component: componentMap[key],
    data: null
  }))
})
</script>