

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Footer from "@/components/Footer.vue";
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
  <div class="relative bg-black">
    <Header headerClass="white" />
    <Unit1 />
    <Unit2 v-if="!isMobile" />
    <m_Unit2 v-else />
    <Unit4 v-if="!isMobile" />
    <m_Unit4 v-else />
    <Unit5 v-if="!isMobile" />
    <m_Unit5 v-else />
    <Unit6 />
    <Unit7 />
    <Splide4 />
    <div class="bg-white">
      <Footer />
    </div>
  </div>
</template>
