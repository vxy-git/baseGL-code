<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import {
  DOSING_TIMER_VIDEO,
  PREHEAT_STATUS_VIDEO,
  TEMPERATURE_CONTROL_VIDEO,
  BATTERY_MONITOR_VIDEO,
  DOSING_TIMER_LABEL,
  PREHEAT_STATUS_LABEL,
  TEMPERATURE_CONTROL_LABEL,
  BATTERY_MONITOR_LABEL
} from '@/data/product4-unit10.js'
</script>

<template>
  <div class="pt-[392px] pb-[215px] m_pt_0">
    <div class="c_1300 mx-auto c_padding">
      <div class="justify-between flex m_flex_col gap-[15px]">
        <div class="bg-[#D9D9D9] min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ DOSING_TIMER_LABEL }}
          </div>
          <MediaAsset
            type="video"
            :src="DOSING_TIMER_VIDEO"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ PREHEAT_STATUS_LABEL }}
          </div>
          <MediaAsset
            type="video"
            :src="PREHEAT_STATUS_VIDEO"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="justify-between flex m_flex_col gap-[15px] mt-[15px]">
        <div class="min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ TEMPERATURE_CONTROL_LABEL }}
          </div>
          <MediaAsset
            type="video"
            :src="TEMPERATURE_CONTROL_VIDEO"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-[#D9D9D9] min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ BATTERY_MONITOR_LABEL }}
          </div>
          <MediaAsset
            type="video"
            :src="BATTERY_MONITOR_VIDEO"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.tag{
  padding: 0 30px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>