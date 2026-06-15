<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit1Data } from '@/data/us_local_service/unit1'

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
    <div class="heroBg">
      <MediaAsset :src="unitData.bg" type="image" class="heroImage" alt="" :lazy="false" />
    </div>
    <div class="heroContent c_1300 c_padding">
      <h1 class="heroTitle">{{ unitData.title }}</h1>
      <p class="heroSubtitle">{{ unitData.subtitle }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit1 {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #07131c;
}

.heroBg,
.heroImage,
.heroProduct {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.heroImage,
.heroProduct {
  object-fit: cover;
}

.heroProduct {
  z-index: 1;
}

.heroContent {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.heroTitle {
  max-width: 812px;
  color: #fff;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
}

.heroSubtitle {
  margin-top: 18px;
  color: #d9d9d9;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
}

@media screen and (max-width: $breakpoint-mobile) {
  .heroTitle {
    font-size: 38px;
    line-height: 46px;
  }

  .heroSubtitle {
    font-size: 22px;
    line-height: 28px;
  }
}
</style>
