

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/index.vue";
import Splide4 from "@/components/Splide4/index.vue";
import { MOBILE_BREAKPOINT } from "@/composables/fit";
import Unit1 from "./components/Unit1/index.vue";
import Unit2 from "./components/Unit2/index.vue";
import m_Unit2 from "./components/Unit2/m_index.vue";
import Unit4 from "./components/Unit4/index.vue";
import m_Unit4 from "./components/Unit4/m_index.vue";
import Unit5 from "./components/Unit5/index.vue";
import m_Unit5 from "./components/Unit5/m_index.vue";
import Unit6 from "./components/Unit6/index.vue";
import Unit7 from "./components/Unit7/index.vue";

const props = defineProps({
  pageConfig: {
    type: Object,
    default: () => ({})
  }
})

const isClient = typeof window !== "undefined";
const isMobile = ref(isClient ? window.innerWidth < MOBILE_BREAKPOINT : false);

const updateIsMobile = () => {
  if (typeof window === "undefined") return;
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

const defaultOrder = ['unit1', 'unit2', 'unit4', 'unit5', 'unit6', 'unit7']

const renderList = computed(() => {
  const moduleList = props.pageConfig?.moduleList
  const pickComponent = (key) => {
    if (key === 'unit2') return isMobile.value ? m_Unit2 : Unit2
    if (key === 'unit4') return isMobile.value ? m_Unit4 : Unit4
    if (key === 'unit5') return isMobile.value ? m_Unit5 : Unit5
    if (key === 'unit1') return Unit1
    if (key === 'unit6') return Unit6
    if (key === 'unit7') return Unit7
    return null
  }

  if (moduleList && Object.keys(moduleList).length > 0) {
    return defaultOrder
      .filter(key => moduleList[key] && moduleList[key].enabled !== false)
      .map(key => ({
        key,
        component: pickComponent(key),
        data: moduleList[key].data
      }))
  }

  return defaultOrder.map(key => ({
    key,
    component: pickComponent(key),
    data: null
  }))
})
</script>

<template>
  <div class="relative bg-black">
    <Header />
    <component 
      v-for="item in renderList" 
      :key="item.key" 
      :is="item.component" 
      :data="item.data"
    />
    <Splide4 />
    
    <Footer />
  </div>
</template>
