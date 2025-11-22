<script setup>
import { ref } from 'vue'
import videoSrc from '@/assets/video/home5.mp4'

const isPlaying = ref(false)
const videoRef = ref(null)

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
            <img class="size-[50px] mx-auto mt-[20.25px] cursor-pointer" src="@/assets/img/icon10.png" alt="" @click="playVideo">
          </div>
          <img v-if="!isPlaying" class="h-[560px] w-full object-cover" src="@/assets/img/t2.png" alt="">
          <video
            v-else
            ref="videoRef"
            class="h-[560px] w-full object-contain bg-black"
            :src="videoSrc"
            controls
            autoplay
            loop
          ></video>
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