<script setup>
import { useUnitData } from '@/composables/useUnitData'
import { unit5Data } from '@/data/why_caleaf/unit5'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit5Data)
</script>

<template>
  <section class="why-caleaf-raw-material">
    <div class="raw-material-container c_1300 c_padding">
      <h3 class="raw-material-title">{{ unitData.title }}</h3>
      <p class="raw-material-desc">{{ unitData.description }}</p>
      <div class="raw-material-image">
        <MediaAsset type="image" :src="unitData.image" :lazy="true" :alt="unitData.title" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-raw-material {
  width: 100%;
  background-color: #111119;
  padding-bottom: 100px;
  margin-top: -1px;
}

.raw-material-container {
  text-align: center; // 3547 title
}

.raw-material-image {
  max-width: 783px;
  margin: -37px auto 0;

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
  margin-bottom: 38px;
}

.raw-material-desc {
  position: relative;
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
    margin-bottom: 30px;
  }

  .raw-material-desc {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
