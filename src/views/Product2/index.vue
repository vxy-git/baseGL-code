<script setup>
import { computed } from "vue";
import { useMobileDetect } from "@/composables/useMobileDetect";
import { useRenderList } from "@/composables/useRenderList";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/index.vue";
import Splide4 from "@/components/Splide4/index.vue";
import GsapU from "./components/GsapU/index.vue";
import m_GsapU from "./components/GsapU/m_index.vue";
import Unit1 from "./components/Unit1/index.vue";
import Unit2 from "./components/Unit2/index.vue";
import Unit3 from "./components/Unit3/index.vue";
import Unit4 from "./components/Unit4/index.vue";
import Unit5 from "./components/Unit5/index.vue";
import Unit6 from "./components/Unit6/index.vue";
import m_Unit6 from "./components/Unit6/m_index.vue";
import Unit7 from "./components/Unit7/index.vue";
import Unit8 from "./components/Unit8/index.vue";
import m_Unit8 from "./components/Unit8/m_index.vue";
import VideoU from "./components/VideoU/index.vue";

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
  gsapu: GsapU,
  m_gsapu: m_GsapU,
  unit3: Unit3,
  videou: VideoU,
  unit4: Unit4,
  unit5: Unit5,
  unit6: Unit6,
  m_unit6: m_Unit6,
  unit7: Unit7,
  unit8: Unit8,
  m_unit8: m_Unit8
};

// 定义默认 Unit 顺序（按原有结构分组）
const defaultOrder = computed(() => {
  if (!isMobile.value) {
    return [
      'unit1',                    // bg-black
      'unit2',                    // bg-[#111111]
      'gsapu', 'unit3', 'videou', 'unit4',  // bg-black
      'unit5',                    // 无背景
      'unit6', 'unit7', 'unit8'   // bg-black
    ];
  }
  return [
    'unit1',                     // bg-black
    'unit2',                     // bg-[#111111]
    'm_gsapu', 'unit3', 'videou', 'unit4',  // bg-black
    'unit5',                     // 无背景
    'm_unit6', 'unit7', 'm_unit8'  // bg-black
  ];
});

// 动态渲染列表（CMS 数据优先，本地降级）
const { renderList } = useRenderList(props, componentMap, defaultOrder);
</script>

<template>
  <div>
    <Header />

    <!-- 动态渲染 Unit -->
    <template v-for="item in renderList" :key="item.key">
      <!-- unit1 需要 bg-black 容器 -->
      <div v-if="item.key === 'unit1'" class="bg-black">
        <component :is="item.component" :data="item.data" />
      </div>

      <!-- unit2 需要 bg-[#111111] 容器 -->
      <div v-else-if="item.key === 'unit2'" class="bg-[#111111] pb-[140px]">
        <component :is="item.component" :data="item.data" />
      </div>

      <!-- gsapu, unit3, videou, unit4 需要 bg-black 容器 -->
      <div v-else-if="['gsapu', 'm_gsapu', 'unit3', 'videou', 'unit4'].includes(item.key)"
        class="bg-black pb-[140px] pt-[1px]">
        <component :is="item.component" :data="item.data" />
      </div>

      <!-- unit5 无背景容器 -->
      <component v-else-if="item.key === 'unit5'" :is="item.component" :data="item.data" />

      <!-- unit6, unit7, unit8 需要 bg-black 容器 -->
      <div v-else-if="['unit6', 'm_unit6', 'unit7', 'unit8', 'm_unit8'].includes(item.key)" class="bg-black">
        <component :is="item.component" :data="item.data" />
      </div>

      <!-- 其他组件正常渲染 -->
      <component v-else :is="item.component" :data="item.data" />
    </template>

    <!-- Splide4 固定在最后 -->
    <div class="bg-black">
      <Splide4 />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
