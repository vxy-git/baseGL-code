<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { MOBILE_BREAKPOINT } from "@/composables/fit";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header/index.vue";
import Splide4 from "@/components/Splide4/index.vue";
import Specifications from "@/components/Specifications/index.vue";
import GsapU from "./components/GsapU/index.vue";
import m_GsapU from "./components/GsapU/m_index.vue";
import Unit1 from "./components/Unit1/index.vue";
import Unit2 from "./components/Unit2/index.vue";
import Unit3 from "./components/Unit3/index.vue";
import Unit4 from "./components/Unit4/index.vue";
import Unit6 from "./components/Unit6/index.vue";
import Unit7 from "./components/Unit7/index.vue";
import Unit8 from "./components/Unit8/index.vue";
import VideoU from "./components/VideoU/index.vue";

const isClient = typeof window !== "undefined";
const isMobile = ref(isClient ? window.innerWidth < MOBILE_BREAKPOINT : false);

const updateIsMobile = () => {
  if (!isClient) return;
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
};

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
    <Header headerClass="white" />
    <div class="bg-black">
      <Unit1 />
    </div>
    <div class="bg-[#111111] pb-[140px]">
      <Unit2 />
    </div>
    <div class="bg-black pb-[140px]">
      <GsapU v-if="!isMobile" />
      <m_GsapU v-else />
      <Unit3 />
      <VideoU />
      <Unit4 />
    </div>
    <Specifications />
    <div class="bg-black">
      <Unit6 />
      <Unit7 />
      <Unit8 />
      <Splide4 />
    </div>
    <div class="pt-[0px]">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
