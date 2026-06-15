<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit3Data } from '@/data/why-caleaf/unit3'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit3Data)

const activeIndex = ref(0)
let autoplayTimer = null

const carouselItems = computed(() => {
  const items = unitData.value.slides?.length ? unitData.value.slides : unitData.value.years || []

  return items.map((item) => {
    const year = item.year
    const content = item.content || unitData.value.contents?.[year] || unitData.value.content || {}

    return {
      ...item,
      image: item.image || content.image || unitData.value.images?.[year] || unitData.value.image,
      content,
    }
  })
})

const activeSlide = computed(() => carouselItems.value[activeIndex.value] || carouselItems.value[0] || {})

const activeContent = computed(() => activeSlide.value.content || {})
const activeImage = computed(() => activeSlide.value.image)

const autoplayEnabled = computed(() => unitData.value.autoplay !== false)
const autoplayInterval = computed(() => unitData.value.autoplayInterval || 4000)

const getDefaultActiveIndex = () => {
  const index = carouselItems.value.findIndex((item) => item.active)
  return index >= 0 ? index : 0
}

const stopAutoplay = () => {
  if (!autoplayTimer) return
  clearInterval(autoplayTimer)
  autoplayTimer = null
}

const startAutoplay = () => {
  stopAutoplay()
  if (typeof window === 'undefined') return
  if (!autoplayEnabled.value || carouselItems.value.length <= 1) return

  autoplayTimer = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % carouselItems.value.length
  }, autoplayInterval.value)
}

const selectYear = (index) => {
  activeIndex.value = index
  startAutoplay()
}

watch(
  () => carouselItems.value.map((item) => item.year).join('|'),
  () => {
    activeIndex.value = getDefaultActiveIndex()
    startAutoplay()
  },
  { immediate: true }
)

watch([autoplayEnabled, autoplayInterval], startAutoplay)

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<template>
  <section class="why-caleaf-milestones">
    <div class="c_1300 c_padding">
      <h2 class="milestones-title">{{ unitData.title }}</h2>

      <!-- 年份时间轴 -->
      <div class="timeline">
        <div
          v-for="(item, index) in carouselItems"
          :key="item.year"
          class="timeline-item"
          :class="{ active: index === activeIndex }"
        >
          <button
            class="year-button"
            type="button"
            :aria-pressed="index === activeIndex"
            @click="selectYear(index)"
          >
            <span class="year-text">{{ item.year }}</span>
            <span class="year-dot"></span>
          </button>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="divider"></div>

      <!-- 里程碑内容 -->
      <Transition name="milestone-slide" mode="out-in">
        <div :key="activeSlide.year" class="milestone-content">
          <div class="milestone-image">
            <MediaAsset
              type="image"
              :src="activeImage"
              :lazy="true"
              :alt="`${activeSlide.year || ''} Milestone`"
            />
          </div>
          <div class="milestone-text">
            <h3 class="milestone-subtitle">{{ activeContent.title }}</h3>
            <p class="milestone-desc">{{ activeContent.description }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-milestones {
  width: 100%;
  background-color: #000000;
  padding-top: 118px;
  padding-bottom: 144px;
}

.milestones-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 68px;
}

.timeline {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -6px;
  position: relative;
  z-index: 1;
}

.timeline-item {
  text-align: center;
  position: relative;
}

.year-button {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.year-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
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
  margin: 12px auto 0;
  opacity: 0;
  transform: rotate(45deg);
  position: relative;
  z-index: 2;
}

.timeline-item.active .year-dot {
  opacity: 1;
}

.divider {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 62px;
}

.milestone-content {
  display: flex;
  gap: 92px;
  align-items: center;
}

.milestone-slide-enter-active,
.milestone-slide-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.milestone-slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.milestone-slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.milestone-image {
  flex: 1;
  width: 600px;
  height: auto;
  aspect-ratio: 600/450;
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
  padding-bottom: 20px;
}

.milestone-subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 50px;
}

.milestone-desc {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .why-caleaf-milestones {
    overflow: hidden;
  }

  .milestones-container {
    padding: 60px 0 0;
  }

  .milestones-title {
    font-size: 28px;
    margin-bottom: 36px;
  }

  .milestone-content {
    flex-direction: column;
  }

  .milestone-image {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
  }

  .milestone-text {
    min-width: 0;
    padding-top: clamp(0px, 6vw, 83px);
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
