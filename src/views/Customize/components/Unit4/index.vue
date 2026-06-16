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

    <div class="storyStage c_1300 c_padding">
      <article
        v-for="(item, index) in unitData.sections"
        :key="item.title"
        class="story"
        :class="`story${index + 1}`"
      >
        <div class="storyCopy">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <MediaAsset
          :src="item.image"
          type="image"
          :alt="item.alt"
          class="storyImage"
          :class="`storyImage${index + 1}`"
        />
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit4 {
  padding: 124px 0 60px;
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

.storyStage {
  position: relative;
  z-index: 1;
  height: 3104px;
  margin-top: -388px;
}

.story {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.storyCopy {
  position: absolute;
  left: 0;
  z-index: 2;
  width: 555px;
  color: #111;
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
  position: absolute;
  z-index: 0;
  object-fit: cover;
}

.story1 .storyCopy {
  top: 609px;
}

.story2 .storyCopy {
  top: 1471px;
}

.story3 .storyCopy {
  top: 2349px;
}

.storyImage1 {
  top: 201px;
  left: 658px;
  width: 949px;
  height: 928px;
  object-fit: contain;
}

.storyImage2 {
  top: 1129px;
  left: -49px;
  width: 1659px;
  height: 933px;
}

.storyImage3 {
  top: 2062px;
  left: -60px;
  width: 1651px;
  height: 929px;
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

  .storyStage {
    height: auto;
    margin-top: 56px;
  }

  .story {
    position: relative;
    inset: auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .story + .story {
    margin-top: 54px;
  }

  .storyCopy,
  .story1 .storyCopy,
  .story2 .storyCopy,
  .story3 .storyCopy {
    position: static;
    width: 100%;
  }

  .storyImage,
  .storyImage1,
  .storyImage2,
  .storyImage3 {
    position: static;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
