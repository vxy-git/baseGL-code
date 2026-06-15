<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit5Data } from '@/data/us-local-service/unit5'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit5Data)
</script>

<template>
  <section class="unit5">
    <MediaAsset :src="unitData.bg" type="image" class="visionBg" alt="" />
    <div class="visionContent c_1300 c_padding">
      <div class="visionText">
        <p class="sectionLabel">{{ unitData.label }}</p>
        <h2 class="darkTitle">{{ unitData.title }}</h2>
      </div>
      <a class="greenBtn" href="#contact">{{ unitData.buttonText }} <span>→</span></a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit5 {
  position: relative;
  min-height: 780px;
  overflow: hidden;
  background: #111;
  color: #fff;
  margin-bottom: 120px;
}

.visionBg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visionContent {
  position: relative;
  z-index: 2;
  padding-top: 520px;
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
  width: 170px;
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

@media screen and (max-width: $breakpoint-medium) {
  .unit5 {
    min-height: 560px;
  }

  .visionContent {
    padding-top: 300px;
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

  .greenBtn {
    width: 150px;
    height: 44px;
    margin-top: 28px;
    font-size: 16px;
  }
}
</style>
