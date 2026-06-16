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
  <section class="unit3 c_1230 c_padding">
    <h2 class="sectionTitle">{{ unitData.sectionTitle }}<span class="greenText">{{ unitData.greenText }}</span></h2>
    <div class="intro">
      <p>{{ unitData.eyebrow }}</p>
      <h2>{{ unitData.title }}</h2>
      <div>{{ unitData.description }}</div>
    </div>
    <MediaAsset :src="unitData.mainImage" type="image" class="mainImage" alt="" />
    <div class="featureGrid">
      <article v-for="(item, index) in unitData.features" :key="index" class="featureCard" :class="{ reverse: index % 2 === 0 }">
        <MediaAsset :src="item.image" type="image" class="featureImage" alt="" />
        <div class="featureText">
          <h3>
            <template v-if="item.titleSuffix">
              {{ item.title }}<span class="greenText">{{ item.greenLabel }}</span>{{ item.titleSuffix }}
            </template>
            <template v-else-if="item.greenLabel">
              <span class="greenText">{{ item.greenLabel }}</span>{{ item.title }}
            </template>
            <template v-else>{{ item.title }}</template>
              </h3>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit3 {
  padding-top: 218px;
  padding-bottom: 161px;
  background: #fff;
}

.sectionTitle {
  max-width: 920px;
  margin: 0 auto 249px;
  color: #111;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
  text-align: center;
}

.sectionTitle .greenText {
  color: #1ce785;
}

.intro {
  text-align: center;
}

.intro p {
  margin-bottom: 20px;
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
  margin: 30px auto 0;
  color: #444;
  font-size: 20px;
  line-height: 1.5;
}

.mainImage {
  display: block;
  width: min(1020px, calc(100vw - 40px));
  margin: 49px auto 161px;
}

.featureGrid {
  display: flex;
  flex-direction: column;
  gap: 137px;
}

.featureCard {
  display: flex;
  gap: 54px;
  align-items: center;
}

.featureCard.reverse {
  flex-direction: row-reverse;
}

.featureImage {
  width: 60%;
  max-width: 700px;
  aspect-ratio: 700 / 460;
  border-radius: 0;
}

.featureText {
  flex: 1;
}

.featureText h3 {
  margin-bottom: 26px;
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
}

.featureText h3 .greenText {
  color: #1ce785;
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

  .featureCard,
  .featureCard.reverse {
    flex-direction: column;
    gap: 28px;
  }

  .featureImage {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
}
</style>
