<script setup>
import { computed } from 'vue'
import FeaturedCarousel from '@/components/FeaturedCarousel/index.vue'
import { unit1Data } from '@/data/blog/unit1'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit1Data)
const list = computed(() => unitData.value.slides)
</script>

<template>
  <FeaturedCarousel
    :items="list"
    :arrow-icon="unitData.arrowIcon"
    :start-index="1"
    container-class="pt-[110px] bg-white"
  >
    <template #slide-content="{ item }">
      <div class="textOverlay">
        <p class="featuredDate">{{ item.date }}</p>
        <h1 class="featuredTitle">{{ item.title }}</h1>
      </div>
    </template>
  </FeaturedCarousel>
</template>

<style scoped lang="scss">
.textOverlay {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  min-height: 174px;
  padding: 56px 94px 40px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 72%) 100%);
  color: #fff;
}

.featuredDate {
  margin: 0 0 13px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
}

.featuredTitle {
  max-width: 651px;
  margin: 0 auto;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  text-align: center;
}

@media screen and (max-width: $breakpoint-mobile) {
  .textOverlay {
    min-height: auto;
    padding: 38px 20px 22px;
  }

  .featuredDate {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  .featuredTitle {
    font-size: 22px;
    line-height: 28px;
  }
}
</style>
