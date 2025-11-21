<script setup>
import videoSrc from '@/assets/video/product2-video.mp4'

</script>

<template>
  <div class="w-full relative min-h-[950px] flex flex-col justify-end">
    <video class="w-full object-cover" :src="videoSrc" autoplay muted playsinline></video>

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