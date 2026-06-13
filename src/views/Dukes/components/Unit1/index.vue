<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit1Data } from '@/data/dukes/unit1.js'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit1Data)
</script>

<template>
  <div class="unit1 mt_nav bg-black relative">
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
