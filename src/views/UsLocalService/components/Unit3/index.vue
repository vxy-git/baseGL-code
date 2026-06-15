<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit3Data } from '@/data/us-local-service/unit3'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit3Data)
</script>

<template>
  <section class="unit3">
    <h2 class="sectionTitle">{{ unitData.title }}</h2>
    <div class="howImageBox">
      <MediaAsset :src="unitData.officeImage" type="image" class="fullImage" alt="" />
      <div class="howSteps c_1300 c_padding">
        <span v-for="item in unitData.steps" :key="item">{{ item }}</span>
      </div>
    </div>
    <div class="howImageBox howImageBoxBottom">
      <MediaAsset :src="unitData.machineImage" type="image" class="fullImage" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit3 {
  width: 100%;
}

.sectionTitle {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}

.howImageBox {
  position: relative;
  margin-top: 36px;
  height: 780px;
  overflow: hidden;
  background: #111;
}

.howImageBoxBottom {
  margin-top: 120px;
}

.fullImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.howSteps {
  position: absolute;
  left: 50%;
  bottom: 56px;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}

@media screen and (max-width: $breakpoint-tablet) {
  .howSteps {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .sectionTitle {
    font-size: 30px;
    line-height: 38px;
  }

  .howImageBox {
    height: 520px;
  }

  .howImageBoxBottom {
    margin-top: 64px;
  }
}
</style>
