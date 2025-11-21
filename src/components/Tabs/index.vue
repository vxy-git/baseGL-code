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
  <div class="w-full overflow-x-scroll scrollbar-hide container-box max-w-[1300px] m-auto">
    <div :class="{
    '!bg-[#1F1F1F]':type==='dark'
  }" class="w-max rounded-[50px] bg-[#F8F9FD] justify-between p-[7px] flex ">
      <div v-for="(item,index) in list" :key="index" @click="current=index" :class="{
      'bg-white':index===current,
      '!bg-[#1CE785] !text-[#111111]':index===current && type==='dark',
      '!text-[#D9D9D9]':type==='dark' && index !== current
    }"
        class="flex-1 transition-all rounded-full text items-center flex justify-center cursor-pointer w-max h-[50px] px-[26px]">
        {{item}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  white-space: nowrap;
  color: #444;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>