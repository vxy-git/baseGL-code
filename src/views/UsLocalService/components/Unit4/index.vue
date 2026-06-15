<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit4Data } from '@/data/us-local-service/unit4'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit4Data)
</script>

<template>
  <section class="unit4">
    <div class="networkContent c_1300 c_padding">
      <p class="sectionLabel">{{ unitData.label }}</p>
      <h2 class="darkTitle">{{ unitData.title }}</h2>
      <a class="greenBtn" href="#contact">{{ unitData.buttonText }} <span>→</span></a>
    </div>
    <div class="galleryList">
      <MediaAsset
        v-for="image in unitData.images"
        :key="image"
        :src="image"
        type="image"
        class="galleryImage"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit4 {
  padding-top: 120px;
  background: #111;
  color: #fff;
}

.networkContent {
  min-height: 260px;
}

.sectionLabel {
  margin-bottom: 10px;
  color: #fff;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
}

.darkTitle {
  white-space: pre-line;
  color: #fff;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
}

.greenBtn {
  margin-top: 34px;
  min-width: 150px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  background: #1ce785;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-decoration: none;
}

.galleryList {
  margin-top: 72px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(5, minmax(240px, 1fr));
  gap: 20px;
  overflow-x: auto;
}

.galleryImage {
  width: 100%;
  min-width: 240px;
  aspect-ratio: 400 / 260;
  object-fit: cover;
}

@media screen and (max-width: $breakpoint-tablet) {
  .galleryList {
    grid-template-columns: repeat(5, 260px);
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit4 {
    padding-top: 72px;
  }

  .sectionLabel {
    font-size: 22px;
    line-height: 28px;
  }

  .darkTitle {
    font-size: 38px;
    line-height: 46px;
  }

  .galleryList {
    margin-top: 48px;
    padding-bottom: 72px;
  }
}
</style>
