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
          :alt="image.alt"
          autoplay
          muted
          loop
          :controls="false"
          class="creativeImage"
          :class="`creativeImage${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit5 {
  padding: 173px 0 156px;
  background: #fff;
}

.inner {
  position: relative;
  height: 918px;
}

h2 {
  max-width: 494px;
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

p {
  margin-top: 44px;
  max-width: 554px;
  color: #111;
  font-size: 20px;
  line-height: 30px;
}

.copy {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.imageWall {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.creativeImage {
  position: absolute;
  width: 464px;
  height: 601px;
  object-fit: cover;
  box-shadow: 0 20px 50px rgb(0 0 0 / 8%);
}

.creativeImage1 {
  left: 125px;
  top: 316px;
  z-index: 1;
}

.creativeImage2 {
  left: 710px;
  top: 0;
}

@media screen and (max-width: $breakpoint-wide) {
  .inner {
    height: auto;
  }

  .copy,
  .imageWall {
    position: static;
  }

  .imageWall {
    margin-top: 44px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .creativeImage1,
  .creativeImage2,
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
