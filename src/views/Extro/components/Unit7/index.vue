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
  <section class="unit7">
    <div class="c_1300 c_padding">
      <h2>{{ unitData.title }}</h2>
      <div class="productGrid">
        <article v-for="item in unitData.products" :key="item.image" class="productCard">
          <MediaAsset :src="item.image" type="image" class="productImage" alt="" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit7 {
  padding: 110px 0 100px;
  background: #f5f5f5;
}

h2 {
  margin-bottom: 44px;
  color: #111;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.33;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 27px;
}

.productCard {
  background: #fff;
  overflow: hidden;
}

.productImage {
  display: block;
  width: 100%;
}

@media (max-width: $breakpoint-tablet) {
  .unit7 {
    padding: 78px 0;
  }

  h2 {
    font-size: 38px;
  }

  .productGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}
</style>
