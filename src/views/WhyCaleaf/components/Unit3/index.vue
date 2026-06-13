<script setup>
import { useUnitData } from '@/composables/useUnitData'
import { whyCaleafUnit3Data } from '@/data/why-caleaf/why-caleaf-unit3'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null }
})

const unitData = useUnitData(props, whyCaleafUnit3Data)
</script>

<template>
  <section class="why-caleaf-milestones">
    <div class="milestones-container">
      <h2 class="milestones-title">{{ unitData.title }}</h2>

      <!-- 年份时间轴 -->
      <div class="timeline">
        <div
          v-for="(yearItem, idx) in unitData.years"
          :key="yearItem.year"
          class="timeline-item"
          :class="{ active: yearItem.active }"
        >
          <span class="year-text">{{ yearItem.year }}</span>
          <span v-if="yearItem.active" class="year-dot"></span>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="divider"></div>

      <!-- 里程碑内容 -->
      <div class="milestone-content">
        <div class="milestone-image">
          <MediaAsset
            type="image"
            :src="unitData.image"
            :lazy="true"
            alt="2023 Milestone"
          />
        </div>
        <div class="milestone-text">
          <h3 class="milestone-subtitle">{{ unitData.content.title }}</h3>
          <p class="milestone-desc">{{ unitData.content.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-milestones {
  width: 100%;
  display: flex;
  justify-content: center;
}

.milestones-container {
  max-width: $breakpoint-design;
  width: 100%;
  padding: 120px 0 0;
}

.milestones-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 68px;
}

.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 174px;
  padding: 0 310px;
  margin-bottom: 12px;
}

.timeline-item {
  text-align: center;
  position: relative;
}

.year-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  opacity: 0.5;
}

.timeline-item.active .year-text {
  color: $caleaf-green;
  opacity: 1;
}

.year-dot {
  display: block;
  width: 12px;
  height: 12px;
  background: $caleaf-green;
  border-radius: 50%;
  margin: 12px auto 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 62px;
}

.milestone-content {
  display: flex;
  gap: 92px;
  padding: 0 310px;
  align-items: flex-start;
}

.milestone-image {
  flex-shrink: 0;
  width: 600px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.milestone-text {
  flex: 1;
  padding-top: 83px; // 1924 - 1841
}

.milestone-subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #FFFFFF;
  line-height: 1.2;
  margin-bottom: 50px;
}

.milestone-desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .milestones-container {
    padding: 60px 20px 0;
  }

  .milestones-title {
    font-size: 28px;
    margin-bottom: 36px;
  }

  .timeline {
    gap: 20px;
    padding: 0;
    flex-wrap: wrap;
  }

  .milestone-content {
    flex-direction: column;
    padding: 0;
    gap: 30px;
  }

  .milestone-image {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
  }

  .milestone-text {
    padding-top: 0;
  }

  .milestone-subtitle {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .milestone-desc {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
