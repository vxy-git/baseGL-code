<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/us-local-service/unit2'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
</script>

<template>
  <section class="unit2 c_1300 c_padding">
    <h2 class="sectionTitle">{{ unitData.title }}</h2>
    <div class="serviceGrid">
      <div v-for="item in unitData.list" :key="item.title" class="serviceItem">
        <MediaAsset :src="item.image" type="image" class="serviceImage" :alt="item.title" />
        <div class="serviceName">{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit2 {
  padding-top: 130px;
  padding-bottom: 120px;
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

.serviceGrid {
  margin-top: 49px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 27px 30px;
}

.serviceItem {
  position: relative;
  height: 400px;
  overflow: hidden;
  background: #f3f3f3;
  border-radius: 10px;
}

.serviceImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.serviceName {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 89px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.4) 100%);
}

@media screen and (max-width: $breakpoint-tablet) {
  .serviceGrid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit2 {
    padding-top: 72px;
    padding-bottom: 72px;
  }

  .sectionTitle {
    font-size: 30px;
    line-height: 38px;
  }

  .serviceItem {
    height: 300px;
  }
}
</style>
