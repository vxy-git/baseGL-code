<script setup>
const UNIVERSE = '/assets/product4/UNICORN.mp4';
const NIVERSE_PRO = '/assets/product4/UNICORN-Pro.mp4';

import MediaAsset from '@/components/MediaAsset.vue';


const deviceSpecs1 = [
  { label: "Dimension(mm)", value: "76.6H*38.0W*16.0D" },
  { label: "Tank Volume", value: "0.5+0.5mL/1+1mL" },
  { label: "Battery Capability", value: "300mAh" },
  { label: "Resistance", value: "1.8ohm" },
  { label: "Voltage Setting", value: "2.2V" },
  { label: "Housing Material", value: "Plastic" },
  { label: "Ceramic Core", value: "Dual Gemco" },
  { label: "Central Post", value: "Post-free" },
  { label: "Charging", value: "Type-C" },
  { label: "Options of Activation", value: "Button & Inhale Activated" }
]

const deviceSpecs2 = [
  { label: "Dimension(mm)", value: "76.6H*38.0W*16.0D" },
  { label: "Tank Volume", value: "1.5+1.5mL" },
  { label: "Battery Capability", value: "300mAh" },
  { label: "Resistance", value: "1.8ohm" },
  { label: "Voltage Setting", value: "2.2V" },
  { label: "Housing Material", value: "Plastic" },
  { label: "Ceramic Core", value: "Dual Gemco" },
  { label: "Central Post", value: "Post-free" },
  { label: "Charging", value: "Type-C" },
  { label: "Options of Activation", value: "Button & Inhale Activated" }
]


</script>

<template>
  <div class="c_1230 c_padding mx-auto pt-[136px] pb-[162px]">
    <div class="title">
      Specifications
    </div>
    <div class="relative mt-[58px] flex justify-start gap-[40px] m_flex_col_r">
      <div class="shrink-0 grid grid-cols-2 min-w-max gap-y-[15px] gap-x-[20px] w-[460px]">
        <div v-for="item in deviceSpecs1" class="item flex flex-col items-center justify-center">
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
            :src="UNIVERSE"
            :controls="false"
            :muted="true"
            :loop="false"
            :viewPlay="true"
            class="scale-[1.2] w-full h-full object-cover rounded-[20px] overflow-hidden"
          />
        </div>
        <div class="text7 mt-[26px] -translate-x-[4px] text-center">DUKES</div>
      </div>
    </div>
    <div class="relative mt-[127px] flex justify-end gap-[40px] m_flex_col">
      <div class="w-full flex flex-col items-center justify-center -translate-y-[20px] pr-[80px] m_pr_0">
        <div class="h-[414px]">
          <MediaAsset
            type="video"
            :src="NIVERSE_PRO"
            :controls="false"
            :muted="true"
            :loop="false"
            :viewPlay="true"
            class="scale-[1.2] w-full h-full object-cover rounded-[20px] overflow-hidden"
          />
        </div>
        <div class="text7 mt-[30px] -translate-x-[16px] text-center">DUKES</div>
      </div>
      <div class="shrink-0 grid grid-cols-2 min-w-max gap-y-[15px] gap-x-[20px] w-[460px] -mt-[4px]">
        <div v-for="item in deviceSpecs2" class="item flex flex-col items-center justify-center">
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