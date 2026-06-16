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
    <div class="heroContent c_1300 c_padding">
      <div class="capacity">{{ unitData.capacity }}</div>
      <h1>{{ unitData.title }}</h1>
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
  background: #e8eef0;
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
  height: calc(880px / 1920px * 100vw);
  min-height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #111;
}

.capacity {
  width: fit-content;
  min-width: 180px;
  padding: 9px 20px;
  margin-bottom: 28px;
  border-radius: 20px;
  background: #fff;
  color: #111;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

h1 {
  font-size: 96px;
  font-weight: 700;
  line-height: 1;
}

.scrollHint {
  position: absolute;
  left: 50%;
  bottom: 42px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #111;
  font-size: 14px;
  line-height: 18px;
  transform: translateX(-50%);
}

.scrollHint i {
  width: 1px;
  height: 56px;
  background: #111;
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
    font-size: 64px;
  }

  .capacity {
    font-size: 16px;
  }
}
</style>
