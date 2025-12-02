<template>
  <CdnImage v-if="isImage" v-bind="$attrs" :src="src" :alt="alt" :cdnUrl="cdnUrl" :lazy="lazy" />
  <video
    v-else
    ref="videoEl"
    v-bind="$attrs"
    :src="src"
    :poster="poster"
    :autoplay="autoplay"
    :muted="muted"
    :loop="loop"
    :controls="controls"
    playsinline
    class="media-video"
    @mouseenter="handleHoverEnter"
    @mouseleave="handleHoverLeave"
  />
</template>

<script setup>
import { computed, ref, defineExpose, watch, onMounted, onBeforeUnmount } from 'vue'
import CdnImage from './CdnImage.vue'

const props = defineProps({
  type: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  cdnUrl: { type: String, default: '' },
  lazy: { type: Boolean, default: true },
  poster: { type: String, default: '' },
  controls: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  loop: { type: Boolean, default: false },
  hoverPlay: { type: Boolean, default: false },
  viewPlay: { type: Boolean, default: false }
})

const isImage = computed(() => props.type === 'image')

const videoEl = ref(null)
const intersectionObserver = ref(null)

function playFromStart() {
  if (videoEl.value) {
    try {
      videoEl.value.currentTime = 0
      const p = videoEl.value.play()
      if (p && typeof p.then === 'function') {
        p.catch(() => {})
      }
    } catch {}
  }
}

function pause() {
  if (videoEl.value) {
    try {
      videoEl.value.pause()
    } catch {}
  }
}

function resetToStart() {
  if (videoEl.value) {
    try {
      videoEl.value.currentTime = 0
    } catch {}
  }
}

function handleHoverEnter() {
  if (!props.hoverPlay) return
  playFromStart()
}

function handleHoverLeave() {
  if (!props.hoverPlay) return
  pause()
  resetToStart()
}

function cleanupObserver() {
  if (intersectionObserver.value) {
    intersectionObserver.value.disconnect()
    intersectionObserver.value = null
  }
}

function setupObserver() {
  cleanupObserver()
  if (!props.viewPlay || isImage.value || !videoEl.value) return
  intersectionObserver.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playFromStart()
      } else {
        pause()
        resetToStart()
      }
    })
  }, { threshold: 0.25 })
  intersectionObserver.value.observe(videoEl.value)
}

watch(() => props.viewPlay, () => {
  setupObserver()
})

watch(videoEl, () => {
  setupObserver()
})

onMounted(() => {
  setupObserver()
})

onBeforeUnmount(() => {
  cleanupObserver()
})

defineExpose({ playFromStart, pause, resetToStart, videoEl })
</script>

<style scoped lang="scss">
.media-video {
  display: block;
  // min-height: max-content;
  // max-height: max-content;
}


@media screen and (max-width: 767px) {
}
</style>
