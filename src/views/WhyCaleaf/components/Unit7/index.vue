<script setup>
import { useUnitData } from '@/composables/useUnitData'
import { unit7Data } from '@/data/why-caleaf/unit7'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit7Data)
</script>

<template>
  <section class="why-caleaf-services c_1300 c_padding">
    <div class="">
      <h2 class="services-title">{{ unitData.title }}</h2>

      <div class="services-grid">
        <div v-for="(service, idx) in unitData.services" :key="idx" class="service-card">
          <div class="service-image">
            <MediaAsset type="image" :src="service.image" :lazy="true" :alt="service.title" />
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
  padding-top: 132px;
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
  grid-template-columns: repeat(3, auto);
  gap: 34px 35px;
}

.service-card {
  position: relative;
  text-align: left;
}

.service-image {
  width: 100%;
  aspect-ratio: 410 / 300;
  border-radius: 20px;
  overflow: hidden;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.service-name {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  max-width: 100%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  white-space: break-spaces;
}

// 响应式适配 - 多级断点递减
@media screen and (max-width: 1300px) {
  .why-caleaf-services {
    padding-top: 110px;
  }

  .services-grid {
    gap: 24px;
  }
}

@media screen and (max-width: $breakpoint-tablet) {
  .why-caleaf-services {
    padding-top: 80px;
  }

  .services-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .services-title {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .service-image {
    border-radius: 14px;
  }

  .service-name {
    font-size: 20px;
    line-height: 26px;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .why-caleaf-services {
    padding-top: 60px;
  }

  .services-container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .services-title {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 32px;
  }

  .services-grid {
    gap: 12px;
  }

  .service-image {
    border-radius: 12px;
  }

  .service-name {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
