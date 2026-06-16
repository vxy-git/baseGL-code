<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit5Data } from '@/data/extro/unit5'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit5Data)
</script>

<template>
  <section class="unit5 c_padding">
    <div class="intro c_1300">
      <p>{{ unitData.eyebrow }}</p>
      <h2>{{ unitData.title }}</h2>
      <div>{{ unitData.description }}</div>
    </div>
    <MediaAsset :src="unitData.mainImage" type="image" class="mainImage" alt="" />
    <h2 class="headline">{{ unitData.headline }}</h2>
    <div class="cardGrid c_1300">
      <article v-for="item in unitData.cards" :key="item.label" class="screenCard">
        <MediaAsset :src="item.image" type="image" class="screenImage" alt="" />
        <span>{{ item.label }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit5 {
  padding-top: 112px;
  padding-bottom: 142px;
  background: #f5f5f5;
}

.intro {
  text-align: center;
}

.intro p {
  margin-bottom: 18px;
  color: #111;
  font-size: 18px;
  line-height: 24px;
}

.intro h2 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.12;
}

.intro div {
  max-width: 1200px;
  margin: 28px auto 0;
  color: #555;
  font-size: 18px;
  line-height: 1.45;
}

.mainImage {
  display: block;
  width: min(1020px, calc(100vw - 40px));
  margin: 78px auto 130px;
}

.headline {
  max-width: 1160px;
  margin: 0 auto 78px;
  color: #111;
  font-size: 70px;
  font-weight: 700;
  line-height: 1.34;
  text-align: center;
}

.cardGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}

.screenCard {
  position: relative;
  overflow: hidden;
  background: #fff;
}

.screenImage {
  display: block;
  width: 100%;
}

.screenCard span {
  position: absolute;
  left: 22px;
  top: 25px;
  padding: 9px 26px;
  border-radius: 20px;
  background: #fff;
  color: #111;
  font-size: 18px;
  line-height: 22px;
}

@media (max-width: $breakpoint-tablet) {
  .unit5 {
    padding-top: 78px;
    padding-bottom: 92px;
  }

  .intro h2 {
    font-size: 32px;
  }

  .mainImage {
    margin: 54px auto 78px;
  }

  .headline {
    margin-bottom: 50px;
    font-size: 38px;
    line-height: 1.22;
  }

  .cardGrid {
    grid-template-columns: 1fr;
  }

  .screenCard span {
    font-size: 15px;
  }
}
</style>
