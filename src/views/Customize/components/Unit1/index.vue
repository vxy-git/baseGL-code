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
      <h1>
        <span class="titleLeft">{{ unitData.title }}</span>
        <span class="titleRight">{{ unitData.greenTitle }}</span>
      </h1>
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
  margin-top: 56px;
  object-fit: cover;
}

.heroCopy {
  text-align: center;
  color: #111;
  background: #fff;
}

.heroCopy p {
  font-size: 20px;
  line-height: 23px;
  color: #111;
}

.heroCopy h1 {
  margin-top: 16px;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.titleLeft {
  color: #111;
}

.titleRight {
  color: #89C22D;
}
</style>
