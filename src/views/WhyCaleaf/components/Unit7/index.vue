<script setup>
import { computed } from 'vue'
import { whyCaleafUnit7Data } from '@/data/why-caleaf/why-caleaf-unit7'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null }
})

const unitData = computed(() => {
  if (props.data) return { ...whyCaleafUnit7Data, ...props.data }
  return whyCaleafUnit7Data
})
</script>

<template>
  <section class="why-caleaf-services">
    <div class="services-container">
      <h2 class="services-title">{{ unitData.title }}</h2>

      <div class="services-grid">
        <div
          v-for="(service, idx) in unitData.services"
          :key="idx"
          class="service-card"
        >
          <div class="service-image">
            <MediaAsset
              type="image"
              :src="service.image"
              :lazy="true"
              :alt="service.title"
            />
          </div>
          <h4 class="service-name">{{ service.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-services {
  width: 100%;
  display: flex;
  justify-content: center;
}

.services-container {
  max-width: $breakpoint-design;
  width: 100%;
  padding: 0 310px;
}

.services-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  color: #111111;
  text-align: center;
  margin-bottom: 65px; // 6111 - 6016 - 30
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px 35px;
}

.service-card {
  text-align: left;
}

.service-image {
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 25px; // 6246 - 6111 - 300

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.service-name {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .services-container {
    padding: 0 20px;
  }

  .services-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .service-image {
    height: 200px;
    margin-bottom: 15px;
  }

  .service-name {
    font-size: 18px;
  }
}
</style>
