<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit6Data } from '@/data/product1/product1-unit6'
import { useUnitData } from '@/composables/useUnitData'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, product1Unit6Data)
</script>

<template>
  <div class="relative mt-[180px] c_1230 c_padding">
    <span
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] w-screen h-[780px]"
    ></span>
    <div class="relative">
      <div class="label">
        {{ unitData.labelText }}
      </div>
      <div class="title mt-[20px]">
        {{ unitData.titleText }}
      </div>
      <div class="w-full flex justify-center gap-[20px] mt-[52px] m_flex_col">
        <div class="flex-1 w-full rounded-[20px]">
          <MediaAsset
            class="w-full h-full object-cover"
            type="video"
            :src="unitData.videos.left"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :view-play="true"
            playsinline
          />
        </div>
        <div class="flex-1 w-full rounded-[20px]">
          <MediaAsset
            class="w-full h-full object-cover"
            type="video"
            :src="unitData.videos.right"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :view-play="true"
            playsinline
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.label {
  color: #1ce785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title {
  color: #fff;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}
</style>
