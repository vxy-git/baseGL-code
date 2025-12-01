<template>
  <div class="relative bg-black">
    <!-- 覆盖图层 -->
    <!-- <img src="/technology.jpg" alt="Overlay Image" class="pointer-events-none absolute  top-0 left-1/2 -translate-x-1/2 w-full opacity-50"/> -->
    
    <Header headerClass="white"/>
    <Unit1/>
    <Unit2 v-if="!isMobile"/>
    <m_Unit2 v-else/>
    <Unit4 v-if="!isMobile"/>
    <m_Unit4 v-else/>
    <Unit5 v-if="!isMobile"/>
    <m_Unit5 v-else/>
    <Unit6/>
    <Unit7/>
    <Splide4/>
    <div class="bg-white">
      <Footer/>
    </div>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header/index.vue";
import Unit1 from "./components/Unit1/index.vue";
// import Unit2 from "./components/Unit2/index.vue";
import m_Unit2 from "./components/Unit2/m_index.vue";
// import Unit4 from "./components/Unit4/index.vue";
import m_Unit4 from "./components/Unit4/m_index.vue";
// import Unit5 from "./components/Unit5/index.vue";
import m_Unit5 from "./components/Unit5/m_index.vue";
import Unit6 from "./components/Unit6/index.vue";
import Unit7 from "./components/Unit7/index.vue";
import Splide4 from "@/components/Splide4/index.vue"
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

</script>

