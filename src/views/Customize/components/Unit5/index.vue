<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit5Data } from '@/data/customize/unit5'

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
    <div class="inner c_1300 c_padding">
      <div class="copy">
        <h2>{{ unitData.title }}</h2>
        <p>{{ unitData.description }}</p>
      </div>
      <div class="imageWall" aria-hidden="true">
        <MediaAsset
          v-for="(image, index) in unitData.images"
          :key="image.src"
          :src="image.src"
          type="image"
          :alt="image.alt"
          class="creativeImage"
          :class="`creativeImage${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit5 {
  padding: 78px 0 124px;
  background: #fff;
}

.inner {
  display: grid;
  grid-template-columns: minmax(0, 554px) minmax(0, 1fr);
  align-items: center;
  gap: 78px;
}

h2 {
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

p {
  margin-top: 44px;
  color: #111;
  font-size: 20px;
  line-height: 30px;
}

.imageWall {
  position: relative;
  height: 745px;
}

.creativeImage {
  position: absolute;
  width: 464px;
  height: 601px;
  object-fit: cover;
  box-shadow: 0 20px 50px rgb(0 0 0 / 8%);
}

.creativeImage1 {
  left: 0;
  bottom: 0;
  z-index: 1;
}

.creativeImage2 {
  right: 0;
  top: 0;
}

@media screen and (max-width: $breakpoint-tablet) {
  .inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .imageWall {
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .creativeImage {
    position: static;
    width: 100%;
    height: auto;
    aspect-ratio: 464 / 601;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit5 {
    padding: 60px 0 70px;
  }

  h2 {
    font-size: 34px;
    line-height: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
