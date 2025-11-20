<script setup>

import Tabs from "@/components/Tabs/index.vue";
import {ref} from "vue";
const tabsCurrent = ref(0)
const tabsList = [
  "Smooth yet Rugged Design",
  "Dual-Color Mouthpiece",
  "Large Side Display"
]
</script>

<template>
  <div class="mt-[173px]">
    <div class="title">
      Every Detail Matters
    </div>
    <div class="flex justify-center gap-x-[20px] mt-[58px]">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
    </div>
    <Tabs type="dark" class="!w-[800px] mx-auto !py-0 !h-[50px] mt-[40px]" :list="tabsList" v-model="tabsCurrent"></Tabs>
    <div class="label w-[1000px] mx-auto mt-[28px]">
      The heating coil is embedded within the ceramic core, this way, the oil is heated by the ceramic core and not by exposed hot wires, maximizing prevention of burnt flavors and preservation.
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #1CE785 0%, #80FFC1 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
.label{
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
}
</style>