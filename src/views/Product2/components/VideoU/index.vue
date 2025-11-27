<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import MediaAsset from '@/components/MediaAsset.vue'
import videoSrc from '@/assets/product2/the.mp4'

const rootRef = ref(null)

useIntersectionObserver(
  rootRef,
  ([{ isIntersecting }]) => {
    const el = rootRef.value?.querySelector('.media-video')
    if (!el) return
    const video = el
    if (isIntersecting) {
      video.currentTime = 0
      video.play()
    } else {
      video.pause()
    }
  },
  { threshold: 0.5 }
)

</script>

<template>
  <div ref="rootRef" class="w-full relative h-[1210px] flex flex-col justify-end">
    <MediaAsset
      type="video"
      :src="videoSrc"
      :autoplay="false"
      :muted="true"
      :controls="false"
      :loop="false"
      class="w-full object-cover"
    />

    <div class="w-full c_padding absolute top-0">
      <div class="mt-[117px] w-full c_1230">
        <div class="title1 text-center">
          UNICORE Powered
        </div>
        <div class="title2 mt-[19px]">
          The gold standard for Rosin and Resin oils
        </div>
        <div class="title3 mt-[19px]">
          Our patented U-shape ceramic features an extremely uniform pore structure, ideally suited for the molecular
          structure of Resin and
          Rosin. It is 30% thinner than ordinary ceramics, yet maintains the same strength. This means fewer terpene
          molecules are filtered out,
          preserving the rich, natural flavors.
        </div>
        <div class="flex gap-x-[150px] valBox justify-center mt-[82px]">
          <div class="flex flex-col items-center">
            <div class="label h-[39.805px]">
              30%

            </div>
            <div class="value">
              Thinner in Structure
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="label h-[39.805px] flex">
              45%
              <img class="h-[39.805px] -ml-[10px] translate-x-[8px]" src="@/assets/img/icon64.png" alt="">
            </div>
            <div class="value">
              Flavor Retention
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="label h-[39.805px] flex">
              35%
              <img class="h-[39.805px] -ml-[13px] translate-x-[12px]" src="@/assets/img/icon64.png" alt="">
            </div>
            <div class="value">
              in Pore Uniformity
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title1 {
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title3 {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.valBox {
  .label {
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .value {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }
}
</style>