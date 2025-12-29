<script setup>
import {
  UNIVERSE_VIDEO,
  UNIVERSE_PRO_VIDEO,
  TITLE_TEXT,
  PRODUCT_NAME_TEXT,
  DEVICE_SPECS_1,
  DEVICE_SPECS_2
} from '@/data/product4-unit11.js'
import MediaAsset from '@/components/MediaAsset.vue';
</script>

<template>
  <div class="c_1230 c_padding mx-auto pt-[136px] pb-[162px]">
    <div class="title">
      {{ TITLE_TEXT }}
    </div>
    <div class="relative mt-[58px] flex justify-start gap-[40px] m_flex_col_r">
      <div class="shrink-0 grid grid-cols-2 min-w-max gap-y-[15px] gap-x-[20px] w-[460px]">
        <div v-for="item in DEVICE_SPECS_1" class="item flex flex-col items-center justify-center">
          <div class="label">
            {{item.label}}
          </div>
          <div class="value mt-[9px]">
            {{item.value}}
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center justify-center">
        <div class="h-[414px]">
          <MediaAsset
            type="video"
            :src="UNIVERSE_VIDEO"
            :controls="false"
            :muted="true"
            :loop="false"
            :viewPlay="true"
            class="scale-[1.2] w-full h-full object-cover rounded-[20px] overflow-hidden"
          />
        </div>
        <div class="text7 mt-[26px] -translate-x-[4px] text-center">{{ PRODUCT_NAME_TEXT }}</div>
      </div>
    </div>
    <div class="relative mt-[127px] flex justify-end gap-[40px] m_flex_col">
      <div class="w-full flex flex-col items-center justify-center -translate-y-[20px] pr-[80px] m_pr_0">
        <div class="h-[414px]">
          <MediaAsset
            type="video"
            :src="UNIVERSE_PRO_VIDEO"
            :controls="false"
            :muted="true"
            :loop="false"
            :viewPlay="true"
            class="scale-[1.2] w-full h-full object-cover rounded-[20px] overflow-hidden"
          />
        </div>
        <div class="text7 mt-[30px] -translate-x-[16px] text-center">{{ PRODUCT_NAME_TEXT }}</div>
      </div>
      <div class="shrink-0 grid grid-cols-2 min-w-max gap-y-[15px] gap-x-[20px] w-[460px] -mt-[4px]">
        <div v-for="item in DEVICE_SPECS_2" class="item flex flex-col items-center justify-center">
          <div class="label">
            {{item.label}}
          </div>
          <div class="value mt-[9px]">
            {{item.value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.item {
  min-width: 220px;
  padding: 0 10px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.2);
  

  .label {
    color: #666;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }

  .value {
    color: #111;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;
  }
}

.text7 {
  color: #000;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>