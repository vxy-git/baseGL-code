<script setup>
import { computed } from 'vue'
import { whyCaleafUnit4Data } from '@/data/why-caleaf/why-caleaf-unit4'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null }
})

const unitData = computed(() => {
  if (props.data) return { ...whyCaleafUnit4Data, ...props.data }
  return whyCaleafUnit4Data
})
</script>

<template>
  <section class="why-caleaf-quality">
    <div class="quality-container">
      <!-- 4 个小图标 -->
      <div class="quality-icons">
        <div
          v-for="(icon, idx) in unitData.icons"
          :key="idx"
          class="quality-icon"
        >
          <MediaAsset
            type="image"
            :src="icon"
            :lazy="true"
            :alt="`Quality Icon ${idx + 1}`"
          />
        </div>
      </div>

      <!-- 安全标语 -->
      <h3 class="quality-title">{{ unitData.title }}</h3>

      <!-- 主图片 -->
      <div class="quality-main-image">
        <MediaAsset
          type="image"
          :src="unitData.mainImage"
          :lazy="true"
          alt="Quality Main"
        />
      </div>

      <!-- 描述 -->
      <p class="quality-desc">{{ unitData.description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-quality {
  width: 100%;
  display: flex;
  justify-content: center;
}

.quality-container {
  max-width: $breakpoint-design;
  width: 100%;
  padding: 103px 0 0; // 2507 - 2404 (dark bg start)
  text-align: center;
}

.quality-icons {
  display: flex;
  justify-content: center;
  gap: 157px; // 759 - 480 - 122 ≈ 157
  margin-bottom: 163px;
}

.quality-icon {
  width: 122px;
  height: 129px;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.quality-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  color: #FFFFFF;
  margin-bottom: 63px;
  padding: 0 20px;
}

.quality-main-image {
  max-width: 1029px;
  margin: 0 auto 363px;

  :deep(img) {
    width: 100%;
    height: auto;
    display: block;
  }
}

.quality-desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .quality-container {
    padding: 60px 20px 0;
  }

  .quality-icons {
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  .quality-icon {
    width: 60px;
    height: 64px;
  }

  .quality-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 30px;
  }

  .quality-main-image {
    margin-bottom: 60px;
  }

  .quality-desc {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
