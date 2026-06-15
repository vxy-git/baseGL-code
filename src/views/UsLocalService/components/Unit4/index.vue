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
    <div class="networkHero">
      <MediaAsset :src="unitData.bg" type="image" class="networkBg" alt="" />
      <div class="networkContent c_1300 c_padding">
        <div class="networkText">
          <p class="sectionLabel">{{ unitData.label }}</p>
          <h2 class="darkTitle">{{ unitData.title }}</h2>
        </div>
        <a class="greenBtn" href="#contact">{{ unitData.buttonText }} <span>→</span></a>
      </div>
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
  background: #111;
  color: #fff;
  margin-bottom: 120px;
}

.networkHero {
  position: relative;
  height: 780px;
  overflow: hidden;
}

.networkBg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.networkContent {
  position: relative;
  z-index: 2;
  height: 100%;
  padding-bottom: 52px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
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
  flex: 0 0 auto;
  width: 150px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #fff;
  border-radius: 50px;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-decoration: none;

  span {
    font-size: 22px;
    line-height: 1;
  }
}

.galleryList {
  padding: 14px 0 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(240px, 1fr));
  gap: 14px;
  overflow-x: auto;
  background: #fff;
}

.galleryImage {
  width: 100%;
  min-width: 240px;
  aspect-ratio: 400 / 260;
  object-fit: cover;
  border-radius: 10px;
}

@media screen and (max-width: $breakpoint-tablet) {
  .galleryList {
    grid-template-columns: repeat(5, 260px);
    padding: 14px 16px 0;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .networkHero {
    height: 560px;
  }

  .networkContent {
    padding-top: 260px;
    display: block;
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
    padding-top: 10px;
  }

  .greenBtn {
    width: 140px;
    height: 44px;
    margin-top: 28px;
    font-size: 16px;
  }
}
</style>
