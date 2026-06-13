<script setup>
import { computed } from 'vue'
import { whyCaleafUnit6Data } from '@/data/why-caleaf/why-caleaf-unit6'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null }
})

const unitData = computed(() => {
  if (props.data) return { ...whyCaleafUnit6Data, ...props.data }
  return whyCaleafUnit6Data
})
</script>

<template>
  <section class="why-caleaf-medical">
    <div class="medical-container">
      <!-- Medical Grade Standard -->
      <div class="medical-row left-image">
        <div class="medical-image">
          <MediaAsset
            type="image"
            :src="unitData.items[0].image"
            :lazy="true"
            :alt="unitData.items[0].title"
          />
        </div>
        <div class="medical-text">
          <h3 class="medical-title">{{ unitData.items[0].title }}</h3>
          <p class="medical-desc">{{ unitData.items[0].description }}</p>
        </div>
      </div>

      <!-- High safety battery -->
      <div class="medical-row right-image">
        <div class="medical-text">
          <h3 class="medical-title">{{ unitData.items[1].title }}</h3>
          <p class="medical-desc">{{ unitData.items[1].description }}</p>
        </div>
        <div class="medical-image">
          <MediaAsset
            type="image"
            :src="unitData.items[1].image"
            :lazy="true"
            :alt="unitData.items[1].title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-medical {
  width: 100%;
  display: flex;
  justify-content: center;
}

.medical-container {
  max-width: $breakpoint-design;
  width: 100%;
  padding: 0 310px;
}

.medical-row {
  display: flex;
  align-items: center;
  gap: 20px;

  &.left-image {
    margin-bottom: 192px; // 4661 -> 5378 gap
  }
}

.medical-image {
  flex-shrink: 0;
  width: 620px;
  height: 620px;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.medical-text {
  flex: 1;
}

.medical-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  color: #FFFFFF;
  margin-bottom: 38px; // 4729 - 4661 - 30
}

.medical-desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
  max-width: 670px;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .medical-container {
    padding: 0 20px;
  }

  .medical-row {
    flex-direction: column;
    text-align: center;

    &.left-image {
      margin-bottom: 60px;
    }
  }

  .medical-row.right-image {
    flex-direction: column-reverse;
  }

  .medical-image {
    width: 100%;
    height: auto;
    max-width: 400px;
    margin: 0 auto;
  }

  .medical-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .medical-desc {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }
}
</style>
