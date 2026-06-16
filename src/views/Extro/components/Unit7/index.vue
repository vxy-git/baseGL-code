<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit7Data } from '@/data/extro/unit7'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit7Data)
</script>

<template>
  <section class="unit7 c_1300 c_padding">
    <div class="specInfo">
      <h2>{{ unitData.specsTitle }}</h2>
      <div class="specGrid">
        <div v-for="item in unitData.specs" :key="item.label" class="specItem">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </div>
      </div>
    </div>
    <div class="specVisual">
      <MediaAsset :src="unitData.specsImage" type="image" class="specImage" alt="" />
      <span>{{ unitData.specsMark }}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit7 {
  display: grid;
  grid-template-columns: 460px minmax(0, 1fr);
  gap: 110px;
  align-items: center;
  padding-top: 156.5px;
  padding-bottom: 130px;
  background: #fff;
  color: #111;
}

.specInfo h2 {
  margin-bottom: 46px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.12;
}

.specGrid {
  display: grid;
  grid-template-columns: repeat(2, 220px);
  gap: 15px 20px;
}

.specItem {
  height: 80px;
  padding: 15px 14px 12px;
  background: #d9d9d9;
  text-align: center;
}

.specItem span {
  display: block;
  margin-bottom: 10px;
  color: #666;
  font-size: 16px;
  line-height: 19px;
}

.specItem strong {
  display: block;
  color: #111;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
}

.specVisual {
  position: relative;
}

.specImage {
  width: 100%;
}

.specVisual span {
  position: absolute;
  left: 26%;
  bottom: 6%;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0;
}

@media (max-width: $breakpoint-tablet) {
  .unit7 {
    grid-template-columns: 1fr;
    gap: 54px;
    padding-top: 82px;
    padding-bottom: 88px;
  }

  .specGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .specItem {
    width: 100%;
  }

  .specInfo h2 {
    font-size: 30px;
  }
}
</style>
