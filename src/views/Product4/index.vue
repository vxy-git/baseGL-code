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
import Unit9 from "./components/Unit9/index.vue";
import Unit10 from "./components/Unit10/index.vue";
import Unit12 from "./components/Unit12/index.vue";
import Splide4 from "@/components/Splide4/index.vue";
import Footer from "@/components/Footer.vue";
import Specifications from "@/components/Specifications/index.vue"; 
</script>

<template>
  <div class="overflow-hidden">
    <Header headerClass="white" />
    <Unit1 />
    <Unit2 />
    <Unit3 />
    <Unit4 />
    <div class="bg-black">
      <Unit5 />
      <Unit6 />
      <!-- <Unit7/> -->
      <Unit8 />
      <Unit9 />
      <Unit10 />
    </div>
    <Specifications />
    <Unit12 />
    <Splide4 />
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>