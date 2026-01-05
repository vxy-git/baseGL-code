<script setup>
import { ref, computed } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { homeUnit6Data } from '@/data/home/home-unit6'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
})

const unitData = computed(() => {
  if (!props.data) return homeUnit6Data
  return {
    ...homeUnit6Data,
    ...props.data
  }
})

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
            <div class="titleText">{{ unitData.title }}</div>
            <div class="label">
               {{ unitData.description }}
            </div>
          </div>
          <MediaAsset
            v-if="!isPlaying"
            class="h-[560px] w-full object-cover block"
            type="image"
            :src="unitData.backgroundImage"
            alt="Beyond Limits background"
          />
          <MediaAsset
            v-else
            class="h-[560px] w-full object-contain bg-black"
            type="video"
            :src="unitData.videoSrc"
            :poster="unitData.backgroundImage"
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