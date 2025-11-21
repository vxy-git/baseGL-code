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
  <div class="w-full overflow-x-scroll scrollbar-hide c_padding max-w-[1300px] m-auto">
    <div class="w-max rounded-[50px] bg-[#F8F9FD] justify-between p-[7px] flex gap-[15px]">
      <div v-for="(item,index) in list" :key="index" @click="current=index" :class="{
      'bg-white':index===current,
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