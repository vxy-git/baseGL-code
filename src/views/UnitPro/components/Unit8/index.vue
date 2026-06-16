<script setup>
import { computed } from 'vue'
import FeaturedCarousel from '@/components/FeaturedCarousel/index.vue'
import { unit8Data } from '@/data/unit_pro/unit8'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit8Data)
const list = computed(() => unitData.value.designImages)
</script>

<template>
  <FeaturedCarousel
    :items="list"
    :arrow-icon="unitData.arrowIcon"
    container-class="pt-[110px] bg-white pb-[148px]"
  >
    <template #header>
      <div class="label">{{ unitData.labelText }}</div>
      <div class="title">{{ unitData.titleText }}</div>
    </template>
  </FeaturedCarousel>
</template>

<style scoped lang="scss">
.label {
  color: #1ce785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}
</style>
