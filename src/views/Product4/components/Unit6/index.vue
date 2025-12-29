<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import {
  LEFT_VIDEO,
  RIGHT_VIDEO,
  TITLE_TEXT,
  GREEN_LABEL_TEXT,
  SUBTITLE_TEXT,
  DESCRIPTION_TEXT
} from '@/data/product4-unit6.js'
</script>

<template>
  <div class="pt-[236px] c_1230 c_padding">
    <div class="title">
      {{ TITLE_TEXT }}
    </div>
    <div class="w-[1227px] mx-auto mt-[142px] gap-y-[50px] flex justify-between m_flex_warp max-w-full">
      <div class="pt-[7px] max-w-full">
        <div class="gtext">
          {{ GREEN_LABEL_TEXT }}
        </div>
        <div class="title1">
          {{ SUBTITLE_TEXT }}
        </div>
        <div class="label">
          {{ DESCRIPTION_TEXT }}
        </div>
        <div class="w-[600px] h-[360px] mt-[55px] rounded-[20px] overflow-hidden max-w-full">
          <MediaAsset
            type="video"
            :src="LEFT_VIDEO"
            :controls="false"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :viewPlay="true"
            class="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
      <div class="w-[500px] h-[650px] rounded-[20px] overflow-hidden">
        <MediaAsset
          type="video"
          :src="RIGHT_VIDEO"
          :controls="false"
          :autoplay="false"
          :muted="true"
          :loop="true"
          :viewPlay="true"
          class="w-full h-full object-cover rounded-[20px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 94px;
  background: linear-gradient(90deg, #1CE785 0%, #10814A 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gtext{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title1{
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 18px;
}
.label{
  width: 594px;
  height: 120px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  @apply mt-[18px];
}
</style>