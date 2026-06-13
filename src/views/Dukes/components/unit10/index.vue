<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit10Data } from '@/data/dukes/unit10.js'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit10Data)
</script>

<template>
  <div class="pt-[392px] pb-[215px] m_pt_0">
    <div class="c_1300 mx-auto c_padding">
      <div class="justify-between flex m_flex_col gap-[15px]">
        <div class="bg-[#D9D9D9] min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ unitData.labels.dosingTimer }}
          </div>
          <MediaAsset
            type="video"
            :src="unitData.videos.dosingTimer"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hover-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ unitData.labels.preheatStatus }}
          </div>
          <MediaAsset
            type="video"
            :src="unitData.videos.preheatStatus"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hover-play="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="justify-between flex m_flex_col gap-[15px] mt-[15px]">
        <div class="min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ unitData.labels.temperatureControl }}
          </div>
          <MediaAsset
            type="video"
            :src="unitData.videos.temperatureControl"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hover-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-[#D9D9D9] min-h-[440px] max-w-full rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            {{ unitData.labels.batteryMonitor }}
          </div>
          <MediaAsset
            type="video"
            :src="unitData.videos.batteryMonitor"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hover-play="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
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
