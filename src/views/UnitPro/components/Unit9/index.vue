<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit9Data } from '@/data/unit-pro/unit9'
import { useUnitData } from '@/composables/useUnitData'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, unit9Data)
</script>

<template>
  <div class="pt-[138px] pb-[47px]">
    <div class="title text-center">
      {{ unitData.titleText }}
    </div>
    <div
      class="flex c_1300 c_padding mx-auto px-[35px] justify-between m_flex_col_r overflow-hidden"
    >
      <div class="w-[683px] max-w-full flex-shrink-0 pt-[66px] relative z-[1]">
        <div
          v-for="(item, index) in unitData.deviceSpecs"
          :key="index"
          class="flex border-b border-white/20"
        >
          <div class="tableText w-[370px]">{{ item.label }}</div>
          <div class="tableText">{{ item.value }}</div>
        </div>
      </div>
      <div class="w-[500px] h-[730px] relative">
        <MediaAsset
          class="absolute h-[750px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          type="video"
          :src="unitData.specsVideo"
          :autoplay="false"
          :muted="true"
          :loop="true"
          :controls="false"
          :view-play="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #fff;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.tableText {
  color: #d9d9d9;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 69px;
  white-space: nowrap;
}
</style>
