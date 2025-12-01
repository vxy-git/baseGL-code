<script setup>
import { ref } from 'vue'
import icon1_1 from '@/assets/img/icon1_1.png'
import icon1_3 from '@/assets/img/icon1_3.png'
import Playone from '@/assets/img/Play-one.png'
import videoSrc from '@/assets/technology/banner.mp4'

const showVideo = ref(false)
</script>

<template>
  <div class="unit1 pb-[173px]">
    <div class="relative flex c_1300 mx-auto justify-center items-start pt-[373px]">
      <div class="flex flex-col items-center">
        <!-- 标题 -->
        <div class="title">
          UNICORE
        </div>

        <!-- 主图片 -->
        <img :src="icon1_1" alt="" class="w-[445px] h-[633px] object-contain -mt-[440px]" />
      </div>

      <!-- 自动播放视频按钮 -->
      <div class="video-trigger" @click="showVideo = true">
        <img :src="icon1_3" alt="" class="trigger-bg" />
        <video class="preview-video" :src="videoSrc" autoplay muted loop playsinline></video>
        <div class="overlay">
          <div class="title1">Watch Video</div>
          <img :src="Playone" alt="" class="play-icon" />
        </div>
      </div>
    </div>

    <VideoModal v-model:visible="showVideo" :src="videoSrc" :muted="false" :loop="false" :controls="true" />
  </div>
</template>

<style scoped lang="scss">
.unit1 {
  min-height: calc(980px / 1920px * 100vw);
}

.title {
  width: 842px;
  height: 234px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 200px;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title1 {
  width: 113px;
  height: 23px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.video-trigger {
  position: absolute;
  bottom: 90px;
  right: 35px;
  width: 300px;
  height: 60px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
}

.trigger-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
}

.preview-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  z-index: 1;
}

.play-icon {
  width: 24px;
  height: 24px;
  display: block;
  transform: translateY(3px);
  object-fit: contain;
}
</style>
