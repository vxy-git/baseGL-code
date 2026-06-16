<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/extro/unit2'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit2Data)
</script>

<template>
  <section class="unit2">
    <div class="c_padding">
      <MediaAsset :src="unitData.image" type="image" class="overview" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit2 {
  padding: 124.5px 0;
  background: #000;
}

.overview {
  display: block;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
