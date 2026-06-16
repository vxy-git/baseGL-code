<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit4Data } from '@/data/extro/unit4'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit4Data)
</script>

<template>
  <section class="unit4 c_1230 c_padding">
    <div class="titleWrap">
      <h2>{{ unitData.title }}</h2>
      <MediaAsset :src="unitData.device" type="image" class="device" alt="" />
    </div>

    <div class="featureGrid">
      <article v-for="(item, index) in unitData.features" :key="item.title" class="featureCard">
        <MediaAsset :src="item.image" type="image" class="featureImage" alt="" />
        <div class="featureText" :class="{ right: index % 2 === 0 }">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>

    <h2 class="statement">{{ unitData.statement }}<span class="greenText">{{ unitData.greenText }}</span>{{
      unitData.statementSuffix }}</h2>

    <div class="screenDisplay c_1230">
      <p class="eyebrow">{{ unitData.screenDisplay.eyebrow }}</p>
      <h2 class="displayTitle">{{ unitData.screenDisplay.title }}</h2>
      <p class="displayDesc">{{ unitData.screenDisplay.description }}</p>
      <MediaAsset :src="unitData.screenDisplay.image" type="image" class="displayImage" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit4 {
  background: #fff;
  color: #111;
  padding-bottom: 117px;
}

.titleWrap {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 83px;
}

.titleWrap h2 {
  position: relative;
  z-index: 1;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
  text-align: center;
}

.device {
  width: 400px;
}

.featureGrid {
  display: grid;
  gap: 90px;
  margin-top: 161px;
}

.featureCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.featureCard:nth-child(even) .featureImage {
  order: 2;
}

.featureImage {
  width: 100%;
}

.featureText {
  max-width: 476px;
}

.featureText.right {
  margin-left: auto;
}

.featureText h3 {
  margin-bottom: 26px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
}

.featureText p {
  color: #000;
  font-size: 20px;
  line-height: 1.45;
}

.screenDisplay {
  margin-top: 161px;
  text-align: center;
}

.eyebrow {
  margin-bottom: 20px;
  color: #1ce785;
  font-size: 20px;
  line-height: 1.2;
}

.displayTitle {
  margin-bottom: 30px;
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
}

.displayDesc {
  max-width: 1200px;
  margin: 0 auto;
  color: #444;
  font-size: 20px;
  line-height: 1.45;
}

.displayImage {
  display: block;
  width: min(1020px, calc(100vw - 40px));
  margin: 30px auto 0;
}

.statement {
  margin: 222px auto 230px;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
  text-align: center;
  white-space: break-spaces;
}

.statement .greenText {
  color: #1ce785;
}

@media (max-width: $breakpoint-tablet) {

  .titleWrap h2,
  .statement {
    font-size: 42px;
    line-height: 1.22;
  }

  .device {
    top: 250px;
    width: 280px;
  }

  .featureGrid {
    padding-top: 64px;
  }

  .featureCard {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .featureCard:nth-child(even) .featureImage {
    order: 0;
  }

  .featureText,
  .featureText.right {
    max-width: none;
    margin: 0;
  }

  .featureText h3 {
    font-size: 30px;
  }

  .screenDisplay {
    margin-top: 64px;
  }

  .displayTitle {
    font-size: 30px;
  }

  .displayImage {
    margin-top: 54px;
  }

  .statement {
    margin-top: 82px;
    padding-bottom: 96px;
  }
}
</style>
