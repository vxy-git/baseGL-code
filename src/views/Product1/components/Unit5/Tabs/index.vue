<script setup>
import {ref} from "vue";

const current = defineModel({
  type:Number
})
const props = defineProps({
  list:{
    type: Array,
  },
})
</script>

<template>
  <div class="w-full overflow-x-scroll scrollbar-hide c_padding">
    <div class="bg-[#1F1F1F] w-[800px] rounded-[50px] justify-between flex m-auto gap-[35px]">
      <div v-for="(item,index) in list" :key="index" @click="current=index" :class="{
      '!bg-[#1CE785] !text-[#111111]':index===current,
    }"
        class="transition-all rounded-full text items-center flex justify-center cursor-pointer w-full h-[50px] px-[22px]">
        {{item}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  white-space: nowrap;
  color: #D9D9D9;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>