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

    <div class="storyStage">
      <article v-for="(item, index) in unitData.sections" :key="item.title" class="story" :class="`story${index + 1}`">
        <div class="storyCopy  c_1300 c_padding">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <MediaAsset :src="item.image" type="image" :alt="item.alt" class="storyImage"
          :class="`storyImage${index + 1}`" />
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit4 {
  padding: 124px 0 0;
  background: #fff;
}

.intro {
  position: relative;
  z-index: 3;
  text-align: center;
}

.eyebrow {
  font-size: 20px;
  line-height: 23px;
  color: #1CE785;
}

h2 {
  max-width: 360px;
  margin: 20px auto 0;
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  white-space: break-spaces;
}

.introText {
  max-width: 1200px;
  margin: 37px auto 0;
  font-size: 20px;
  line-height: 30px;
}

.storyStage {
  position: relative;
  z-index: 1;
  margin-top: -165px;
}

.story {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.story1 {
  height: 928px;
}

.story2 {
  height: 933px;
}

.story3 {
  height: 929px;
}

.storyCopy {
  z-index: 2;
  color: #111;
  width: 100%;
}

.storyCopy h3 {
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  width: 555px;
}

.storyCopy p {
  margin-top: 37px;
  color: #111;
  font-size: 20px;
  line-height: 30px;
  width: 555px;
}

.storyImage {
  position: absolute;
  z-index: 0;
  object-fit: cover;
  object-position: right;
}

.storyImage {
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  object-fit: cover;
}

.storyImage3 {
  right: 19px;
}

.story1 h3 {
  background: linear-gradient(180deg, #1CE785 0%, #7EE5C0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.story2 h3 {
  background: linear-gradient(180deg, #1CE785 0%, #D66C62 78.72%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.story3 h3 {
  background: linear-gradient(180deg, #CFE48C 0%, #CFE48B 78.72%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: $breakpoint-desktop) {

  .storyStage {
    margin-top: -120px;
  }

  .story1 {
    height: 728px;
  }

  .story2 {
    height: 733px;
  }

  .story3 {
    height: 729px;
  }
}

@media screen and (max-width: $breakpoint-medium) {

  .storyStage {
    margin-top: 0px;
  }

  .story1 {
    height: 528px;
  }

  .story2 {
    height: 533px;
  }

  .story3 {
    height: 529px;
  }
}
</style>
