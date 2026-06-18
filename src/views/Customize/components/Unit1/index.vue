<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit1Data } from '@/data/customize/unit1'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit1Data)
</script>

<template>
  <section class="unit1">
    <div class="heroCopy">
      <p>{{ unitData.eyebrow }}</p>
      <h1>{{ unitData.title }}</h1>
    </div>
    <MediaAsset :src="unitData.background" type="video" alt="" class="heroImage" :lazy="false" muted playsinline />
  </section>
</template>

<style scoped lang="scss">
.unit1 {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fff;
  padding-top: 234px;
}

.heroImage {
  display: block;
  width: 100%;
  aspect-ratio: 1400 / 920;
  margin-top: 120px;
  object-fit: cover;
}

.heroCopy {
  text-align: center;
  color: #111;
}

.heroCopy p {
  font-size: 20px;
  line-height: 23px;
  color: #1CE785;
}

.heroCopy h1 {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}
</style>
