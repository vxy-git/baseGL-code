<script setup>
import { computed } from "vue";
import { useMobileDetect } from "@/composables/useMobileDetect";
import { useRenderList } from "@/composables/useRenderList";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/index.vue";
import Splide4 from "@/components/Splide4/index.vue";
import Unit1 from "./components/Unit1/index.vue";
import Unit2 from "./components/Unit2/index.vue";
import Unit3 from "./components/Unit3/index.vue";
import m_Unit3 from "./components/Unit3/m_index.vue";
import Unit4 from "./components/Unit4/index.vue";
import Unit5 from "./components/Unit5/index.vue";
import Unit6 from "./components/Unit6/index.vue";
import Unit7 from "./components/Unit7/index.vue";
import Unit9 from "./components/Unit9/index.vue";
import Unit9Block from "./components/Unit9/block.vue";

// 接收 pageConfig
const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({})
  }
});

const { isMobile } = useMobileDetect();

const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
  unit3: Unit3,
  m_unit3: m_Unit3,
  unit4: Unit4,
  unit5: Unit5,
  unit6: Unit6,
  unit7: Unit7,
  unit9: Unit9,
  unit9Block: Unit9Block
};

// 定义默认 Unit 顺序
const defaultOrder = computed(() => {
  if (!isMobile.value) {
    return ['unit1', 'unit2', 'unit9Block', 'unit3', 'unit4', 'unit5', 'unit9', 'unit6', 'unit7'];
  }
  return ['unit1', 'unit2', 'unit9Block', 'm_unit3', 'unit4', 'unit5', 'unit9', 'unit6', 'unit7'];
});

// 动态渲染列表（CMS 数据优先，本地降级）
const { renderList } = useRenderList(props, componentMap, defaultOrder);

const blackBgKeys = new Set(['unit4', 'unit5', 'unit9'])
</script>

<template>
  <div>
    <Header />

    <!-- 动态渲染 Unit -->
    <template v-for="item in renderList" :key="item.key">
      <!-- unit4,5,9 需要黑色背景容器 -->
      <div v-if="blackBgKeys.has(item.key)" class="bg-[#000]">
        <component :is="item.component" :data="item.data" />
      </div>
      <!-- 其他 Unit 正常渲染 -->
      <component v-else :is="item.component" :data="item.data" />
    </template>

    <Splide4 />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
