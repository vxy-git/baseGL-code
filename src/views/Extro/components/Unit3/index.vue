<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit3Data } from '@/data/extro/unit3'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit3Data)
</script>

<template>
  <section class="unit3 c_padding">
    <h2 class="sectionTitle c_1300">{{ unitData.sectionTitle }}</h2>
    <div class="intro c_1300">
      <p>{{ unitData.eyebrow }}</p>
      <h2>{{ unitData.title }}</h2>
      <div>{{ unitData.description }}</div>
    </div>
    <MediaAsset :src="unitData.mainImage" type="image" class="mainImage" alt="" />
    <div class="featureGrid c_1300">
      <article v-for="(item, index) in unitData.features" :key="item.title" class="featureCard">
        <MediaAsset :src="item.image" type="image" class="featureImage" alt="" />
        <div class="featureText" :class="{ right: index % 2 === 1 }">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit3 {
  padding-top: 42px;
  padding-bottom: 150px;
  background: #fff;
}

.sectionTitle {
  max-width: 920px;
  margin: 0 auto 72px;
  color: #111;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
  text-align: center;
}

.intro {
  text-align: center;
}

.intro p {
  margin-bottom: 18px;
  color: #1ce785;
  font-size: 20px;
  line-height: 24px;
}

.intro h2 {
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
}

.intro div {
  max-width: 1200px;
  margin: 28px auto 0;
  color: #444;
  font-size: 20px;
  line-height: 1.45;
}

.mainImage {
  display: block;
  width: min(1020px, calc(100vw - 40px));
  margin: 78px auto 118px;
}

.featureGrid {
  display: grid;
  gap: 88px;
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
  border-radius: 0;
}

.featureText {
  max-width: 476px;
}

.featureText.right {
  margin-left: auto;
}

.featureText h3 {
  margin-bottom: 26px;
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
}

.featureText p {
  color: #000;
  font-size: 20px;
  line-height: 1.45;
}

@media (max-width: $breakpoint-tablet) {
  .unit3 {
    padding-top: 48px;
    padding-bottom: 92px;
  }

  .sectionTitle {
    font-size: 42px;
    line-height: 1.22;
    margin-bottom: 48px;
  }

  .intro h2,
  .featureText h3 {
    font-size: 30px;
  }

  .mainImage {
    margin: 54px auto 72px;
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
}
</style>
