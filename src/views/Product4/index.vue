<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { MOBILE_BREAKPOINT } from "@/composables/fit";
import Header from "@/components/Header/index.vue";
import Splide4 from "@/components/Splide4/index.vue";
import Footer from "@/components/Footer.vue";
import Unit1 from "./components/Unit1/index.vue";
import Unit2 from "./components/Unit2/index.vue";
import Unit4 from "./components/Unit4/index.vue";
import Unit5 from "./components/Unit5/index.vue";
import Unit6 from "./components/Unit6/index.vue";
import Unit8 from "./components/Unit8/index.vue";
import Unit9 from "./components/Unit9/index.vue";
import Unit10 from "./components/Unit10/index.vue";
import Unit11 from "./components/Unit11/index.vue";
import Unit12 from "./components/Unit12/index.vue";
import m_Unit12 from "./components/Unit12/m_index.vue";

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
</script>

<template>
  <div class="overflow-hidden">
    <Header headerClass="white" />
    <Unit1 />
    <div class="bg-[#F8F9FD] pt-[97px] pb-[120px]">
      <Unit2 />
      <Unit4 />
    </div>
    <div class="bg-black">
      <Unit5 />
      <Unit6 />
      <Unit8 />
      <Unit9 />
      <Unit10 />
    </div>
    <Unit11 />
    <Unit12 v-if="!isMobile" />
    <m_Unit12 v-else />
    <Splide4 />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
