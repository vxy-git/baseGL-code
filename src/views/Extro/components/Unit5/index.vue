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
  <section class="unit5">
    <div class="designIntro c_padding">
      <div class="c_1300">
        <p class="eyebrow">{{ unitData.eyebrow }}</p>
        <h2>{{ unitData.title }}</h2>
        <p class="desc">{{ unitData.description }}</p>
        <MediaAsset :src="unitData.mainImage" type="image" class="mainImage" alt="" />
      </div>
    </div>

    <div class="interactionSection c_padding">
      <h2 class="headline">{{ unitData.headline }}</h2>
      <div class="cardGrid c_1300">
        <article v-for="item in unitData.cards" :key="item.label" class="screenCard">
          <MediaAsset :src="item.image" type="image" class="screenImage" alt="" />
          <span>{{ item.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit5 {
  background: #fff;
}

.designIntro {
  padding-top: 112px;
  text-align: center;
}

.eyebrow {
  margin-bottom: 18px;
  color: #1ce785;
  font-size: 20px;
  line-height: 24px;
}

.designIntro h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
  color: #111;
}

.desc {
  max-width: 1200px;
  margin: 28px auto 0;
  color: #444;
  font-size: 20px;
  line-height: 1.45;
}

.mainImage {
  display: block;
  width: min(1020px, calc(100vw - 40px));
  margin: 78px auto 0;
}

.interactionSection {
  margin-top: 130px;
  padding-top: 120px;
  padding-bottom: 142px;
  background: #000;
}

.headline {
  max-width: 1160px;
  margin: 0 auto 78px;
  color: #fff;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.18;
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
  .designIntro {
    padding-top: 78px;
  }

  .designIntro h2 {
    font-size: 32px;
  }

  .mainImage {
    margin: 54px auto 0;
  }

  .interactionSection {
    margin-top: 78px;
    padding-top: 72px;
    padding-bottom: 92px;
  }

  .headline {
    margin-bottom: 50px;
    font-size: 42px;
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
