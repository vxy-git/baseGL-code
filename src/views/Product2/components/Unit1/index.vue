<script setup>
import { useUnitData } from '@/composables/useUnitData'
import MediaAsset from '@/components/MediaAsset.vue'
import { product2Unit1Data } from '@/data/product2/product2-unit1'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, product2Unit1Data)
</script>

<template>
  <div class="unit1 mt_nav relative">
    <MediaAsset
      class="w-full h-full object-cover"
      type="video"
      :src="unitData.banner"
      :controls="false"
      :autoplay="false"
      :muted="true"
      :loop="false"
      :view-play="true"
      playsinline
    />
  </div>
</template>

<style scoped lang="scss">
.unit1 {
  min-height: calc(980px / 1920px * 100vw);
}
</style>
