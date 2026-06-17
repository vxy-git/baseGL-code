<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit3Data } from '@/data/us_local_service/unit3'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit3Data)

const activeIndex = ref(0)
const imageBoxRef = ref(null)
const mediaRefs = ref([])
const isInView = ref(false)
const intersectionObserver = ref(null)

const setMediaRef = (el, index) => {
  if (el) {
    mediaRefs.value[index] = el
  }
}

const isVideo = item => item?.type === 'video' || /\.mp4(\?.*)?$/i.test(item?.src || '')

const pauseMedia = index => {
  const media = mediaRefs.value[index]
  if (!media) return
  media.pause?.()
  media.resetToStart?.()
}

const playMedia = async index => {
  await nextTick()
  const media = mediaRefs.value[index]
  if (!media || !isVideo(unitData.value.mediaList?.[index])) return
  media.playFromStart?.()
}

const handleStepEnter = index => {
  if (activeIndex.value === index) {
    if (isInView.value) playMedia(index)
    return
  }

  pauseMedia(activeIndex.value)
  activeIndex.value = index
  if (isInView.value) playMedia(index)
}

const setupObserver = () => {
  if (!imageBoxRef.value) return

  if (typeof IntersectionObserver === 'undefined') {
    isInView.value = true
    playMedia(activeIndex.value)
    return
  }

  intersectionObserver.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        isInView.value = entry.isIntersecting
        if (entry.isIntersecting) {
          playMedia(activeIndex.value)
        } else {
          pauseMedia(activeIndex.value)
        }
      })
    },
    { threshold: 0 }
  )

  intersectionObserver.value.observe(imageBoxRef.value)
}

onMounted(() => {
  setupObserver()
})

onBeforeUnmount(() => {
  intersectionObserver.value?.disconnect()
  pauseMedia(activeIndex.value)
})
</script>

<template>
  <section class="unit3">
    <h2 class="sectionTitle">{{ unitData.title }}</h2>
    <div ref="imageBoxRef" class="howImageBox">
      <MediaAsset
        v-for="(item, index) in unitData.mediaList"
        :key="`${item.src}-${index}`"
        :ref="el => setMediaRef(el, index)"
        :src="item.src"
        :type="item.type"
        :poster="item.poster"
        class="fullImage"
        :class="{ active: activeIndex === index }"
        alt=""
        :autoplay="false"
        :muted="true"
        :loop="true"
        :controls="false"
      />
      <div class="howSteps c_1300 c_padding">
        <span
          v-for="(item, index) in unitData.steps"
          :key="item"
          :class="{ active: activeIndex === index }"
          @mouseenter="handleStepEnter(index)"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit3 {
  width: 100%;
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


.howImageBox {
  position: relative;
  margin-top: 43px;
  height: 780px;
  overflow: hidden;
  background: #111;
}

.fullImage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.fullImage.active {
  opacity: 1;
}

.howSteps {
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
}

.howSteps span {
  opacity: 0.8;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.howSteps span.active,
.howSteps span:hover {
  opacity: 1;
  transform: translateY(-20px);
}

@media screen and (max-width: $breakpoint-tablet) {
  .howSteps {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .sectionTitle {
    font-size: 30px;
    line-height: 38px;
  }

  .howImageBox {
    height: 520px;
  }

  .howImageBoxBottom {
    margin-top: 64px;
  }
}
</style>
