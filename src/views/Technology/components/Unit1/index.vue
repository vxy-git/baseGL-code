<script setup>
import { ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import {
  ICON_IMAGE,
  PLAY_ICON,
  VIDEO_SRC,
  BANNER_BG_VIDEO,
  WATCH_VIDEO_TEXT
} from '@/data/technology-unit1.js'

const showVideo = ref(false)
</script>

<template>
  <div class="unit1 mt_nav">
    <div class="bg-video">
      <MediaAsset class="!max-h-full" type="video" :src="BANNER_BG_VIDEO" :autoplay="true" :muted="true" :loop="false" :controls="false" playsinline :view-play="true" :lazy="false" />
    </div>

    <div class="content relative flex c_1300 mx-auto justify-end items-end">
      <!-- 自动播放视频按钮 -->
      <div class="video-trigger" @click="showVideo = true">
        <MediaAsset
          :src="ICON_IMAGE"
          type="image"
          class="trigger-bg"
        />
        <MediaAsset
          class="preview-video"
          type="video"
          :src="VIDEO_SRC"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :controls="false"
        />
        <div class="overlay">
          <div class="title1">{{ WATCH_VIDEO_TEXT }}</div>
          <MediaAsset
            :src="PLAY_ICON"
            type="image"
            class="play-icon"
            alt=""
            :lazy="false"
          />
        </div>
      </div>
    </div>

    <VideoModal v-model:visible="showVideo" :src="VIDEO_SRC" :muted="false" :loop="false" :controls="true" />
  </div>
</template>

<style scoped lang="scss">
.unit1 {
  position: relative;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-video :deep(.media-video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: relative;
  height: 100%;
  z-index: 1;
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
  bottom: 95px;
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

@media screen and (max-width: 768px) {
  .video-trigger {
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>