<script setup>
import { ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
const bgSrc = 'https://img.cloudcode.ink/assets/home/Beyond-Limits-bg.jpg'
const videoSrc = 'https://img.cloudcode.ink/assets/video/home5.mp4'

const isPlaying = ref(false)

const playVideo = () => {
  isPlaying.value = true
}
</script>

<template>
  <div class="c_padding">
    <div class="c_1300 mt-[85px] mx-auto rounded-[20px] overflow-hidden">
      <div>
        <div class="relative">
          <div v-if="!isPlaying" class="size-full absolute z-10 top-0 left-0 flex flex-col justify-center">
            <div class="titleText">Beyond Limits</div>
            <div class="label">
               At Caleaf Tech, we don't settle for what others consider "good enough." We push the boundaries of what's possible, constantly seeking technological breakthroughs to deliver the absolute best. When others say "That's as far as we can go," we say "This is just the beginning." We're committed to making every puff not just delicious, but unforgettable, and every customer experience not just satisfactory, but exceptional.
            </div>
          </div>
          <MediaAsset
            v-if="!isPlaying"
            class="h-[560px] w-full object-cover block"
            type="image"
            :src="bgSrc"
            alt="Beyond Limits background"
          />
          <MediaAsset
            v-else
            class="h-[560px] w-full object-contain bg-black"
            type="video"
            :src="videoSrc"
            :poster="bgSrc"
            :autoplay="true"
            :loop="true"
            :controls="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.titleText {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px;
}
.label{
  text-align: justify;
  max-width: 90%;
  margin: 27.25px auto 0;
  width: 1000px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 136.364% */
}
</style>