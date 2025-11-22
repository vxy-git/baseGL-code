<script setup>
import videoSrc from '@/assets/video/product2-banner.mp4'

</script>

<template>
  <div class="h-[980px] bg-black relative">
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