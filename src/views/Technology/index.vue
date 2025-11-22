<template>
  <div class="relative bg-black">
    <!-- 覆盖图层 -->
    <!-- <img src="/technology.jpg" alt="Overlay Image" class="pointer-events-none absolute  top-0 left-1/2 -translate-x-1/2 w-full opacity-50"/> -->
    
    <Header headerClass="white"/>
    <Unit1/>
    <Unit2/>
<!--    <Unit3/>-->
    <Unit4/>
    <Unit5/>
    <Unit6/>
    <Unit7/>
    <Unit8/>
    <div class="bg-white">
      <Footer/>
    </div>
<!--    <Unit9/>-->
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
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

</script>

