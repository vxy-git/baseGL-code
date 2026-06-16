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
  <section class="unit4">
    <div class="titleWrap c_padding">
      <h2>{{ unitData.title }}</h2>
      <MediaAsset :src="unitData.device" type="image" class="device" alt="" />
    </div>

    <div class="featureGrid c_1300 c_padding">
      <article v-for="(item, index) in unitData.features" :key="item.title" class="featureCard">
        <MediaAsset :src="item.image" type="image" class="featureImage" alt="" />
        <div class="featureText" :class="{ right: index % 2 === 0 }">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>

    <h2 class="statement c_padding">{{ unitData.statement }}</h2>
  </section>
</template>

<style scoped lang="scss">
.unit4 {
  background: #fff;
  color: #111;
}

.titleWrap {
  position: relative;
  min-height: 760px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.titleWrap h2 {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin-top: 118px;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
  text-align: center;
}

.device {
  position: absolute;
  left: 50%;
  top: 296px;
  width: 400px;
  transform: translateX(-50%);
}

.featureGrid {
  display: grid;
  gap: 90px;
  padding-top: 92px;
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

.statement {
  max-width: 1160px;
  margin: 132px auto 0;
  padding-bottom: 160px;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
  text-align: center;
}

@media (max-width: $breakpoint-tablet) {
  .titleWrap {
    min-height: 620px;
  }

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

  .statement {
    margin-top: 82px;
    padding-bottom: 96px;
  }
}
</style>
