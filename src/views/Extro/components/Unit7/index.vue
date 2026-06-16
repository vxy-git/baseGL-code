<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit7Data } from '@/data/extro/unit7'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit7Data)
</script>

<template>
  <section class="c_1230 c_padding mx-auto pt-[136px] pb-[162px]">
    <h2 class="title">{{ unitData.titleText }}</h2>
    <div class="specsRow relative mt-[58px] flex justify-start gap-[40px]">
      <div class="shrink-0 flex gap-y-[15px] gap-x-[20px] w-[460px] flex-wrap">
        <div v-for="item in unitData.specs" :key="item.label" class="item flex flex-col items-center justify-center">
          <div class="label">{{ item.label }}</div>
          <div class="value mt-[9px]">{{ item.value }}</div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center justify-center">
        <div class="h-[414px]">
          <MediaAsset type="image" :src="unitData.specsImage"
            class="w-full h-full object-cover rounded-[20px] overflow-hidden" />
        </div>
        <div class="text7 mt-[26px] -translate-x-[4px] text-center">
          {{ unitData.productName }}
        </div>
      </div>
    </div>
  </section>
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

@media (max-width: $breakpoint-tablet) {
  .title {
    font-size: 30px;
  }

  .specsRow {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
}
</style>
