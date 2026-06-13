<script setup>
import { unit2Data } from '@/data/dukes/unit2.js'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
</script>

<template>
  <div class="flex flex-col pt-[110px] c_1230 c_padding">
    <div class="grid grid-cols-2 items-center justify-center gap-[20px]">
      <div v-for="(feature, index) in unitData.features" :key="index" class="relative">
        <div class="text absolute top-[21px] left-[28px]" :style="{ color: `${feature.color}` }">
          {{ feature.label }}
        </div>
        <MediaAsset
          class="size-full rounded-[20px] object-cover"
          type="image"
          :src="feature.image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.text {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media screen and (max-width: $breakpoint-tablet) {
  .grid-cols-2 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
