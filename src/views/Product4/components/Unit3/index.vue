<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import dualVideo from '@/assets/product4/DUAL.mp4'
</script>

<template>
  <div class=" relative max-w-[1020px] h-[580px] mx-auto my-[152px]">
    <MediaAsset class="size-full object-cover rounded-[20px] overflow-hidden" type="video" :src="dualVideo"
      :autoplay="false" :muted="true" :loop="false" :controls="false" />
    <!-- <div class="w-screen h-screen flex items-center justify-center bg-[#fff] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
      DUAL
    </div> -->
  </div>
</template>

<style scoped lang="scss"></style>