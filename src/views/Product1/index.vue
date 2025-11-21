<template>
  <div>
    <!-- 覆盖图层 -->
    <!-- <img src="/product-detail1.jpg" alt="Overlay Image" class="pointer-events-none absolute  top-0 left-1/2 -translate-x-1/2 w-full z-[50] opacity-50"/> -->

    <div class="bg-black">
    <Header headerClass="white"/>
    <Unit1/>
    <Unit2/>
    <Unit3/>
    <Unit4/>
    <Unit5/>
    <Unit6/>
    <Unit7/>
    <Unit8/>
    <Unit9/>
      <div class="">
        <Footer class="bg-white"/>
      </div>
    </div>
  </div>

</template>
<script setup>
import Header from "@/components/Header/index.vue";
import Unit1 from "./components/Unit1/index.vue"
import Unit2 from "./components/Unit2/index.vue"
import Unit3 from "./components/Unit3/index.vue"
import Unit4 from "./components/Unit4/index.vue"
import Unit5 from "./components/Unit5/index.vue"
import Unit6 from "./components/Unit6/index.vue"
import Unit7 from "./components/Unit7/index.vue"
import Unit8 from "./components/Unit8/index.vue"
import Unit9 from "./components/Unit9/index.vue"
import Footer from "@/components/Footer.vue";
</script>