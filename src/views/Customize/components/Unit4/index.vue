<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit4Data } from '@/data/customize/unit4'

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
    <div class="intro c_1300 c_padding">
      <p class="eyebrow">{{ unitData.eyebrow }}</p>
      <h2>{{ unitData.title }}</h2>
      <p class="introText">{{ unitData.intro }}</p>
    </div>

    <div class="storyList">
      <article v-for="item in unitData.sections" :key="item.title" class="story c_1300 c_padding">
        <div class="storyCopy">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <MediaAsset :src="item.image" type="image" :alt="item.alt" class="storyImage" />
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit4 {
  padding: 105px 0 70px;
  background: #fff;
}

.intro {
  text-align: center;
}

.eyebrow {
  font-size: 20px;
  line-height: 23px;
}

h2 {
  max-width: 360px;
  margin: 20px auto 0;
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

.introText {
  max-width: 1200px;
  margin: 37px auto 0;
  font-size: 20px;
  line-height: 30px;
}

.storyList {
  margin-top: 93px;
}

.story {
  display: grid;
  grid-template-columns: minmax(0, 555px) minmax(0, 1fr);
  align-items: center;
  gap: 103px;
  min-height: 820px;
}

.story + .story {
  margin-top: 55px;
}

.storyCopy h3 {
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

.storyCopy p {
  margin-top: 37px;
  color: #111;
  font-size: 20px;
  line-height: 30px;
}

.storyImage {
  width: 100%;
  height: 620px;
  object-fit: cover;
}

.story:nth-child(1) .storyImage {
  object-fit: contain;
}

@media screen and (max-width: $breakpoint-tablet) {
  .story {
    grid-template-columns: 1fr;
    gap: 36px;
    min-height: auto;
  }

  .storyImage {
    height: auto;
    max-height: 520px;
    object-fit: contain;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit4 {
    padding: 70px 0 50px;
  }

  h2,
  .storyCopy h3 {
    font-size: 34px;
    line-height: 40px;
  }

  .introText,
  .storyCopy p {
    font-size: 16px;
    line-height: 24px;
  }

  .storyList {
    margin-top: 56px;
  }
}
</style>
