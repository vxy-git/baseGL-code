<script setup>
import { computed } from 'vue'
import { whyCaleafUnit1Data } from '@/data/why-caleaf/why-caleaf-unit1'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null }
})

const unitData = computed(() => {
  if (props.data) return { ...whyCaleafUnit1Data, ...props.data }
  return whyCaleafUnit1Data
})
</script>

<template>
  <section class="why-caleaf-hero c_padding">
    <div class="hero-image-box">
      <MediaAsset
        type="image"
        :src="unitData.backgroundImage"
        :lazy="true"
        alt="Beyond Limits"
      />
      <div class="hero-overlay">
        <h1 class="hero-title">{{ unitData.title }}</h1>
        <p class="hero-desc">{{ unitData.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-hero {
  width: 100%;
  max-width: $breakpoint-design;
  margin: 0 auto;
  padding: 222px 20px 0;
}

.hero-image-box {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 680px;
  border-radius: 10px;
  overflow: hidden;

  // 图片铺满容器
  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}

.hero-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;
  margin-bottom: 30px;
  line-height: 1.2;
}

.hero-desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
  text-align: center;
  max-width: 905px;
  margin: 0 auto;
}

// 平板
@media (max-width: $breakpoint-tablet) {
  .why-caleaf-hero {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  .hero-image-box {
    height: auto;
    aspect-ratio: 1300 / 680;
    min-height: 200px;

    // 移除绝对尺寸，让图片跟随容器宽高比自适应
    :deep(img) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  .hero-title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .hero-desc {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
