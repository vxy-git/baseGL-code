<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit1Data } from '@/data/extro/unit1'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit1Data)
</script>

<template>
  <section class="unit1 mt_nav">
    <MediaAsset :src="unitData.bg" type="image" class="heroImage" alt="" :lazy="false" />
    <div class="heroContent c_1230 c_padding">
      <h1>{{ unitData.title }}</h1>
      <div class="capacity">{{ unitData.capacity }}</div>
    </div>
    <div class="scrollHint">
      <span>{{ unitData.scrollLabel }}</span>
      <i />
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit1 {
  position: relative;
  width: 100%;
  min-height: calc(880px / 1920px * 100vw);
  overflow: hidden;
  background: #000;
}

.heroImage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroContent {
  position: relative;
  z-index: 1;
  height: 100%;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  color: #fff;
}

.capacity {
  width: fit-content;
  min-width: 180px;
  padding: 9px 20px;
  margin-bottom: 28px;
  border-radius: 20px;
  background: #1ce785;
  color: #222;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

h1 {
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
}

.scrollHint {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  color: #fff;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.28px;
  transform: translateX(-50%);
}

.scrollHint i {
  width: 1px;
  height: 56px;
  background: #fff;
  opacity: 0.3;
}

@media (max-width: $breakpoint-tablet) {
  .unit1,
  .heroContent {
    min-height: 640px;
  }

  .heroImage {
    object-position: 56% center;
  }

  h1 {
    font-size: 48px;
  }

  .capacity {
    font-size: 16px;
  }
}
</style>
