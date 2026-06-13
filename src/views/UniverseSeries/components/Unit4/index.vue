<script setup>
import { useUnitData } from '@/composables/useUnitData'
import MediaAsset from '@/components/MediaAsset.vue'
import { unit4Data } from '@/data/universe-series/unit4'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit4Data)
</script>

<template>
  <div>
    <div class="c_1230 c_padding m_flex_col mt-[42px] mx-auto flex gap-[32px]">
      <div class="w-[622.074px] pt-[145px] c_padding">
        <div class="title1 text-left">
          {{ unitData.rtdSection.labelText }}
        </div>
        <div class="title2 mt-[19px] !text-left whitespace-break-spaces">
          {{ unitData.rtdSection.title }}
        </div>
        <div class="title3 mt-[56px] !text-left whitespace-break-spaces">
          {{ unitData.rtdSection.description }}
        </div>
      </div>
      <MediaAsset
        class="h-[553px] object-cover"
        type="video"
        :src="unitData.rtdSection.videos.topRight"
        :autoplay="false"
        :muted="true"
        :controls="false"
        :loop="true"
        :view-play="true"
      />
    </div>

    <div class="c_1230 c_padding">
      <div class="h-full flex justify-between m_flex_col_r gap-[20px]">
        <div class="img-small h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="unitData.rtdSection.videos.bottomLeft"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="true"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="unitData.rtdSection.videos.bottomRight"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="true"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div class="c_1230 c_padding mt-[145px]">
      <div class="greenText">{{ unitData.wiresSection.labelText }}</div>
      <div class="flex justify-between mt-[19px] gap-[20px] m_flex_col">
        <div class="title2">
          {{ unitData.wiresSection.title }}
        </div>
        <div class="label mt-[2px] whitespace-pre-line">
          {{ unitData.wiresSection.description }}
        </div>
      </div>
      <div ref="wiresRef" class="flex justify-between mt-[75px] m_flex_col gap-[20px]">
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="unitData.wiresSection.videos.left"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="true"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="unitData.wiresSection.videos.right"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="true"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1ce785 0%, #a8ffd5 50%, #1ce785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.greenText {
  color: #3ad3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title1 {
  color: #3ad3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title2 {
  color: #fff;
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
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.label {
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  width: 622.074px;
  flex-shrink: 0;
}

@media screen and (max-width: $breakpoint-tablet) {
  .title {
    font-size: 48px;
    line-height: 52px;
    text-align: center;
  }

  .greenText {
    font-size: 18px;
    text-align: center;
  }

  .title2 {
    font-size: 28px;
    text-align: center;
  }

  .label {
    white-space: normal;
    width: 100% !important;
    text-align: center;
    margin-top: 10px;
  }

  .img-small,
  .img-large {
    width: 100% !important;
    height: auto !important;
    margin-top: 15px;
  }
}
</style>
