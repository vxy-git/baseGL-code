<script setup>
import { useUnitData } from '@/composables/useUnitData'
import { whyCaleafUnit5Data } from '@/data/why-caleaf/why-caleaf-unit5'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, whyCaleafUnit5Data)
</script>

<template>
  <section class="why-caleaf-raw-material">
    <div class="raw-material-container">
      <div class="raw-material-image">
        <MediaAsset type="image" :src="unitData.image" :lazy="true" :alt="unitData.title" />
      </div>
      <h3 class="raw-material-title">{{ unitData.title }}</h3>
      <p class="raw-material-desc">{{ unitData.description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-raw-material {
  width: 100%;
  display: flex;
  justify-content: center;
}

.raw-material-container {
  max-width: $breakpoint-design;
  width: 100%;
  text-align: center; // 3547 title
}

.raw-material-image {
  max-width: 783px;
  margin: 0 auto;

  :deep(img) {
    width: 100%;
    height: auto;
    display: block;
  }
}

.raw-material-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  color: #ffffff;
  margin-top: -106px; // 3547 - 3653 (image bottom)
  margin-bottom: 68px;
}

.raw-material-desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .raw-material-title {
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .raw-material-desc {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
