<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit6Data } from '@/data/extro/unit6'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit6Data)
</script>

<template>
  <section class="unit6">
    <div class="design c_padding">
      <p>{{ unitData.eyebrow }}</p>
      <h2>{{ unitData.title }}</h2>
      <div class="designStrip">
        <MediaAsset
          v-for="(image, index) in unitData.images"
          :key="image"
          :src="image"
          type="image"
          class="designImage"
          :class="{ active: index === 1 }"
          alt=""
        />
      </div>
    </div>

    <div class="specs c_1300 c_padding">
      <div class="specInfo">
        <h2>{{ unitData.specsTitle }}</h2>
        <div class="specGrid">
          <div v-for="item in unitData.specs" :key="item.label" class="specItem">
            <span>{{ item.label }}</span>
            <strong>{{ item.value }}</strong>
          </div>
        </div>
      </div>
      <div class="specVisual">
        <MediaAsset :src="unitData.specsImage" type="image" class="specImage" alt="" />
        <span>{{ unitData.specsMark }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit6 {
  background: #fff;
  color: #111;
}

.design {
  padding-top: 118px;
  text-align: center;
  overflow: hidden;
}

.design p {
  margin-bottom: 18px;
  font-size: 18px;
  line-height: 24px;
}

.design h2 {
  margin-bottom: 80px;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.12;
}

.designStrip {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: min(1540px, 120vw);
  margin-left: 50%;
  transform: translateX(-50%);
}

.designImage {
  width: 100%;
  opacity: 0.75;
}

.designImage.active {
  opacity: 1;
}

.specs {
  display: grid;
  grid-template-columns: 460px minmax(0, 1fr);
  gap: 110px;
  align-items: center;
  padding-top: 122px;
  padding-bottom: 130px;
}

.specInfo h2 {
  margin-bottom: 46px;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.12;
}

.specGrid {
  display: grid;
  grid-template-columns: repeat(2, 220px);
  gap: 15px 20px;
}

.specItem {
  height: 80px;
  padding: 15px 14px 12px;
  background: #f5f5f5;
  text-align: center;
}

.specItem span {
  display: block;
  margin-bottom: 10px;
  color: #555;
  font-size: 14px;
  line-height: 19px;
}

.specItem strong {
  display: block;
  color: #111;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
}

.specVisual {
  position: relative;
}

.specImage {
  width: 100%;
}

.specVisual span {
  position: absolute;
  left: 26%;
  bottom: 6%;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0;
}

@media (max-width: $breakpoint-tablet) {
  .design {
    padding-top: 78px;
  }

  .design h2,
  .specInfo h2 {
    font-size: 32px;
  }

  .designStrip {
    grid-template-columns: 1fr;
    width: 100%;
    transform: none;
    margin-left: 0;
  }

  .designImage:not(.active) {
    display: none;
  }

  .specs {
    grid-template-columns: 1fr;
    gap: 54px;
    padding-top: 82px;
    padding-bottom: 88px;
  }

  .specGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .specItem {
    width: 100%;
  }
}
</style>
