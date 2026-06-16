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
    <div class="c_1300 c_padding">
      <MediaAsset :src="unitData.image" type="image" class="overview" alt="" />
      <h2>{{ unitData.title }}</h2>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit2 {
  padding: 124px 0 150px;
  background: #f7f7f7;
}

.overview {
  display: block;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

h2 {
  max-width: 920px;
  margin: 112px auto 0;
  color: #111;
  font-size: 70px;
  font-weight: 700;
  line-height: 1.34;
  text-align: center;
}

@media (max-width: $breakpoint-tablet) {
  .unit2 {
    padding: 72px 0 88px;
  }

  h2 {
    margin-top: 64px;
    font-size: 38px;
    line-height: 1.22;
  }
}
</style>
