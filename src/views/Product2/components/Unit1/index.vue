<script setup>
import videoSrc from '@/assets/product2/banner.mp4'

</script>

<template>
  <div class="h-[980px] relative">
    <video
      class="w-full h-full object-cover"
      :src="videoSrc"
      autoplay
      muted
      playsinline
      loop
    ></video>
  </div>
</template>

<style scoped lang="scss">
</style>