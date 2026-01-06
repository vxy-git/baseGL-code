<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { MOBILE_BREAKPOINT } from "@/composables/fit";
import Footer from "@/components/Footer.vue";
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
import Unit8 from "./components/Unit8/index.vue";
import Unit9 from "./components/Unit9/index.vue";

// 接收 pageConfig
const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({})
  }
});

// 组件映射
const componentMap = {
  unit1: Unit1,
  unit2: Unit2,
  unit3: Unit3,
  m_unit3: m_Unit3,
  unit4: Unit4,
  unit5: Unit5,
  unit6: Unit6,
  unit7: Unit7,
  unit8: Unit8,
  unit9: Unit9
};

const isClient = typeof window !== "undefined";
const isMobile = ref(isClient ? window.innerWidth < MOBILE_BREAKPOINT : false);

const updateIsMobile = () => {
  if (!isClient) return;
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
};

// 定义默认 Unit 顺序
const defaultOrder = computed(() => {
  if (!isMobile.value) {
    // PC 端顺序
    return ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8', 'unit9'];
  }
  // 移动端顺序（使用 m_unit3 替代 unit3）
  return ['unit1', 'unit2', 'm_unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8', 'unit9'];
});

// 动态渲染列表
const renderList = computed(() => {
  const moduleList = props.pageConfig?.moduleList;

  if (moduleList) {
    return defaultOrder.value
      .filter(key => moduleList[key] && moduleList[key].enabled !== false)
      .map(key => ({
        key,
        component: componentMap[key],
        data: moduleList[key].data
      }));
  }

  // 降级：无 CMS 数据时使用默认渲染
  return defaultOrder.value.map(key => ({
    key,
    component: componentMap[key],
    data: null
  }));
});

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});
</script>

<template>
  <div>
    <div class="bg-black">
      <Header />

      <!-- 动态渲染 Unit -->
      <component
        v-for="item in renderList"
        :key="item.key"
        :is="item.component"
        :data="item.data"
      />

      <Splide4 />
      <div class="">
        <Footer class="bg-white" />
      </div>
    </div>
  </div>
</template>
