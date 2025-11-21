<script setup>

import Tabs from "@/components/Tabs/index.vue";
import {ref} from "vue";
const tabsCurrent = ref(0)
const tabsList = [
  "Crystal-clear Design",
  "Unibody Enclosure",
  "Medical-grade Chamber"
]
</script>

<template>
  <div class="pt-[200px] pb-[5px] bg-black">
    <div class="title">
      Every Detail Matters
    </div>
    <div class="flex justify-center gap-x-[20px] mt-[58px]">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
    </div>
    <Tabs type="dark" class="!w-[800px] !h-[50px] !py-0 mx-auto mt-[40px] " :list="tabsList" v-model="tabsCurrent"></Tabs>
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