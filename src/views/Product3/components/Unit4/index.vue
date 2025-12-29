<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import {
  UNIT4_BG,
  LEFT_VIDEO_SRC,
  RIGHT_VIDEO_SRC,
  ARROW_ICON,
  UNIT_IMG,
  UNIT4_T_TITLE1,
  UNIT4_T_TITLE2,
  UNIT4_T_DESCRIPTION,
  UNIT4_T_STATS,
  BUILT_IN_WIRES_TITLE,
  BUILT_IN_WIRES_SUBTITLE,
  BUILT_IN_WIRES_DESCRIPTION,
  UNIT4_B_TITLE,
  UNIT4_B_SUBTITLE
} from '@/data/product3-unit4'
</script>

<template>
  <div>
    <div class="unit4T">
      <div class="flex flex-col items-center mt-[48px] c_padding">
        <div class="title1" v-html="UNIT4_T_TITLE1"></div>
        <div class="title2 mt-[19.55px]" v-html="UNIT4_T_TITLE2">
        </div>
        <div class="title3 max-w-[1200px] mt-[-2.5px]">
          <br />
          {{ UNIT4_T_DESCRIPTION }}
        </div>
        <div class="flex gap-x-[152px] mt-[70px]">
          <div class="flex flex-col items-center" v-for="(stat, index) in UNIT4_T_STATS" :key="index">
            <div class="text4 flex h-[39.805px]">
              {{ stat.value }}
              <MediaAsset v-if="index === 1" :src="ARROW_ICON" type="image" class="h-[39.805px] -ml-[3px]" alt="" :lazy="false" />
            </div>
            <div class="text5">
              {{ stat.label }}
            </div>
          </div>
        </div>
        <MediaAsset :src="UNIT_IMG" type="image" class="h-[600px] mt-[78px] object-contain m_mt_0" alt=""
          :lazy="false" />
      </div>
      <div
        class="c_padding flex mx-auto max-w-[1400px] w-full mt-[214px] justify-between pb-[155px] m_flex_warp gap-[5%] m_mt_0">
        <MediaAsset type="video" :src="LEFT_VIDEO_SRC" :muted="true" :autoplay="false" :loop="true" :controls="false"
          :hover-play="false" :view-play="true"
          class="h-[740px] max-h-max flex-1 w-[360px] max-w-[47%] rounded-[20px] mb-[20px]" />
        <div class="m_order w-[500px] min-w-[400px] flex-1 flex flex-col items-center pt-[147px] mb-[20px]">
          <div class="title1">{{ BUILT_IN_WIRES_TITLE }}</div>
          <div class="title2 mt-[19.55px]">{{ BUILT_IN_WIRES_SUBTITLE }}</div>
          <div class="title3  mt-[44.45px]">
            {{ BUILT_IN_WIRES_DESCRIPTION }}
          </div>
        </div>
        <MediaAsset type="video" :src="RIGHT_VIDEO_SRC" :muted="true" :autoplay="false" :loop="true" :controls="false"
          :hover-play="false" :view-play="true"
          class="h-[740px] max-h-max flex-1 w-[360px] max-w-[47%] rounded-[20px] mb-[20px]" />
      </div>
    </div>
    <div class="unit4B h-[800px] relative">
      <MediaAsset :src="UNIT4_BG" type="image" class="size-full absolute inset-0 object-cover" alt="" :lazy="false" />
      <div class="c_1230 c_padding mx-auto pt-[248px] relative">
        <div class="title1  ml-[2px]">
          {{ UNIT4_B_TITLE }}
        </div>
        <div class="title2 mt-[19.55px] w-max ml-[2px]">
          {{ UNIT4_B_SUBTITLE }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit4T {
  .text4 {
    // 30%
    color: #CAA4FB;
    font-size: 40px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
  }

  .text5 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .title {
    color: #666;
    font-family: Roboto;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .title1 {
    color: #CAA4FB;
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
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .text {
    color: #CAA4FB;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text1 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .text2 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .bar {

    height: 10px;
    flex-shrink: 0;
  }
}

.unit4B {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;


  .title1 {
    color: #FFF;
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
}
</style>