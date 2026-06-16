<script setup>
import { computed } from 'vue'
import FeaturedCarousel from '@/components/FeaturedCarousel/index.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit6Data } from '@/data/extro/unit6'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit6Data)

const designSlides = computed(() =>
  unitData.value.images.map(src => ({ src, alt: '' })),
)
</script>

<template>
  <section class="unit6">
    <FeaturedCarousel
      :items="designSlides"
      :arrow-icon="unitData.arrowIcon"
      container-class="designShowcase bg-white"
    >
      <template #header>
        <p class="eyebrow">{{ unitData.eyebrow }}</p>
        <h2>{{ unitData.title }}</h2>
      </template>
    </FeaturedCarousel>
  </section>
</template>

<style scoped lang="scss">
.unit6 {
  background: #fff;
  color: #111;
}

.designShowcase {
  padding-top: 118px;

  :deep(.carouselWrap) {
    margin-top: 58px;
  }
}

.eyebrow {
  color: #1ce785;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

h2 {
  margin-top: 18px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
  text-align: center;
  color: #111;
}

@media (max-width: $breakpoint-tablet) {
  .designShowcase {
    padding-top: 78px;
  }
}
</style>
