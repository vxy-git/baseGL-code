<script setup>

import Header from "@/components/Header/index.vue";
import Unit1 from "./components/Unit1/index.vue";
import Unit2 from "./components/Unit2/index.vue";
import Unit3 from "./components/Unit3/index.vue";
import Unit4 from "./components/Unit4/index.vue";
import Unit5 from "./components/Unit5/index.vue";
import Unit6 from "./components/Unit6/index.vue";
import Unit7 from "./components/Unit7/index.vue";
import Unit8 from "./components/Unit8/index.vue";
import GsapU from "./components/GsapU/index.vue"; 
import VideoU from "./components/VideoU/index.vue"; 
import Splide4 from "@/components/Splide4/index.vue"; 
import Footer from "@/components/Footer.vue";
</script>

<template>
  <!-- 覆盖图层 -->
  <!-- <img src="/product-detail2.jpg" alt="Overlay Image"
    class="pointer-events-none absolute  top-0 left-1/2 -translate-x-1/2 w-full z-[50] opacity-50" /> -->

  <Header headerClass="white" />
  <Unit1 />
  <Unit2 />
  <div class="bg-black pt-[220px] pb-[140px]">
    <GsapU />
    <Unit3 />
    <VideoU />
    <Unit4 />
  </div>
  <Unit5 />
  <Unit6 />
  <Unit7 />
  <Unit8 />
  <Splide4 />
  <div class="pt-[0px]">
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>