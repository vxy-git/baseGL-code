<template>
  <CdnImage
    v-if="isImage"
    v-bind="$attrs"
    :src="resolvedSrc"
    :alt="alt"
    :cdn-url="resolvedCdnUrl"
    :lazy="lazy"
    @error="handleImageError"
  />
  <video
    v-else
    ref="videoEl"
    v-bind="$attrs"
    :src="resolvedSrc"
    :poster="poster"
    :autoplay="effectiveAutoplay"
    :muted="muted"
    :loop="effectiveLoop"
    :controls="controls"
    playsinline
    class="media-video"
    @mouseenter="handleHoverEnter"
    @mouseleave="handleHoverLeave"
    @error="handleVideoError"
  />
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import CdnImage from './CdnImage.vue'
import { MOBILE_BREAKPOINT } from '@/composables/fit'
import { logger } from '@/utils/logger'
import { detectMediaType } from '@/utils/mediaType'

const DEFAULT_CDN_URL = import.meta.env.VITE_BASE_URL || ''

const props = defineProps({
  type: { type: String, required: false, default: null },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  cdnUrl: { type: String, default: import.meta.env.VITE_BASE_URL || '' },
  lazy: { type: Boolean, default: false },
  poster: { type: String, default: '' },
  controls: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  hoverPlay: { type: Boolean, default: false },
  viewPlay: { type: Boolean, default: false },
})

const fallbackType = ref('')
const sourceType = computed(() => detectMediaType(props.src))

// 根据 src 自动判断资源类型；type 只作为无法从 src 判断时的兜底
const computedType = computed(() => {
  return fallbackType.value || sourceType.value || props.type || 'image'
})

const isImage = computed(() => computedType.value === 'image')
const resolvedCdnUrl = computed(() => props.cdnUrl || DEFAULT_CDN_URL)

const isAbsoluteSrc = (value = '') => /^(https?:)?\/\//.test(value) || /^(data|blob):/.test(value)
const normalizePath = (value = '') => (value.startsWith('/') ? value : `/${value}`)
const resolvedSrc = computed(() => {
  if (isAbsoluteSrc(props.src)) return props.src
  const base = resolvedCdnUrl.value.replace(/\/+$/, '')
  const path = normalizePath(props.src).replace(/^\/+/, '/')
  return `${base}${path}`
})

const videoEl = ref(null)
const intersectionObserver = ref(null)
const isMobile = ref(false)

watch(
  () => props.src,
  () => {
    fallbackType.value = ''
  }
)

const effectiveAutoplay = computed(
  () => props.autoplay || ((props.viewPlay || props.hoverPlay) && isMobile.value)
)
const effectiveLoop = computed(
  () => props.loop || ((props.viewPlay || props.hoverPlay) && isMobile.value)
)

const updateIsMobile = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
}

function handleVideoError() {
  if (!sourceType.value && props.type === 'video') {
    fallbackType.value = 'image'
  }
}

function handleImageError() {
  if (!sourceType.value && props.type === 'image') {
    fallbackType.value = 'video'
  }
}

function playFromStart() {
  if (videoEl.value) {
    try {
      videoEl.value.currentTime = 0
      const p = videoEl.value.play()
      if (p && typeof p.then === 'function') {
        p.catch(err => {
          if (err.name !== 'AbortError') {
            logger.debug('[MediaAsset] 视频播放失败 (可能是自动播放限制):', err.message)
          }
        })
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        logger.debug('[MediaAsset] 视频播放异常:', err.message)
      }
    }
  }
}

function pause() {
  if (videoEl.value) {
    try {
      videoEl.value.pause()
    } catch (err) {
      logger.debug('[MediaAsset] 视频暂停异常:', err.message)
    }
  }
}

function resetToStart() {
  if (videoEl.value) {
    try {
      videoEl.value.currentTime = 0
    } catch (err) {
      logger.debug('[MediaAsset] 重置视频进度异常:', err.message)
    }
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
  if (!props.viewPlay || isImage.value || !videoEl.value || isMobile.value) return
  intersectionObserver.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playFromStart()
        } else {
          pause()
          resetToStart()
        }
      })
    },
    { threshold: 0.25 }
  )
  intersectionObserver.value.observe(videoEl.value)
}

watch(
  () => props.viewPlay,
  () => {
    setupObserver()
  }
)

watch(videoEl, () => {
  setupObserver()
})

watch(isMobile, val => {
  if (val) {
    cleanupObserver()
    if (props.viewPlay && videoEl.value) {
      playFromStart()
    }
  } else {
    setupObserver()
  }
})

onMounted(() => {
  updateIsMobile()
  setupObserver()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  cleanupObserver()
  window.removeEventListener('resize', updateIsMobile)
})

defineExpose({ playFromStart, pause, resetToStart, videoEl })
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.media-video {
  display: block;
  // min-height: max-content;
  // max-height: max-content;
}

@media screen and (max-width: $breakpoint-mobile) {
}
</style>
