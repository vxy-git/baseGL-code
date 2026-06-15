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
  <section class="unit1 mt_nav">
    <MediaAsset :src="unitData.background" type="image" alt="" class="heroImage" :lazy="false" />
    <div class="heroCopy">
      <p>{{ unitData.eyebrow }}</p>
      <h1>{{ unitData.title }}</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit1 {
  position: relative;
  width: 100%;
  min-height: 760px;
  overflow: hidden;
  background: #fff;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroCopy {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  color: #111;
}

.heroCopy p {
  font-size: 20px;
  line-height: 24px;
}

.heroCopy h1 {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit1 {
    min-height: 620px;
  }

  .heroImage {
    object-position: 52% center;
  }

  .heroCopy {
    top: 96px;
    width: 100%;
    padding: 0 20px;
  }

  .heroCopy h1 {
    font-size: 34px;
    line-height: 40px;
  }
}
</style>
