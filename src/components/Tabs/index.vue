<script setup>
import {ref} from "vue";

const current = defineModel({
  type:Number
})
const props = defineProps({
  list:{
    type: Array,
  },
  type:{
    type:String,
  }
})
</script>

<template>
  <div :class="{
    '!bg-[#1F1F1F]':type==='dark'
  }" class="w-full h-[60px]  gap-x-[10px] rounded-full bg-[#F8F9FD] justify-between p-[5px] flex">
    <div v-for="(item,index) in list" @click="current=index" :class="{
      '!bg-white':index===current,
      '!bg-[#1CE785] !text-[#111111]':index===current && type==='dark',
      '!text-[#D9D9D9]':type==='dark' && index !== current
    }" class="px-[26px] flex-1 transition-all rounded-full h-full text flex items-center justify-center cursor-pointer w-max">
      {{item}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  color: #444;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>