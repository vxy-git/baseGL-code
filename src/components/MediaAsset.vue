<template>
  <CdnImage v-if="isImage" v-bind="$attrs" :src="resolvedSrc" :alt="alt" :cdnUrl="resolvedCdnUrl" :lazy="lazy" />
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
  />
</template>

<script setup>
import { computed, ref, defineExpose, watch, onMounted, onBeforeUnmount } from 'vue'
import CdnImage from './CdnImage.vue'
import { MOBILE_BREAKPOINT } from '@/composables/fit'

const DEFAULT_CDN_URL = 'https://img.cloudcode.ink'

const props = defineProps({
  type: { type: String, required: false, default: null },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  cdnUrl: { type: String, default: DEFAULT_CDN_URL },
  lazy: { type: Boolean, default: false },
  poster: { type: String, default: '' },
  controls: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  loop: { type: Boolean, default: false },
  hoverPlay: { type: Boolean, default: false },
  viewPlay: { type: Boolean, default: false }
})

// 根据 src 自动判断资源类型
const computedType = computed(() => {
  // 如果显式传入了 type，则使用传入的值
  if (props.type) {
    return props.type
  }

  // 否则根据文件扩展名判断
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.ogg', '.video']
  const lowerSrc = props.src.toLowerCase()

  for (const ext of videoExtensions) {
    if (lowerSrc.includes(ext)) {
      return 'video'
    }
  }

  // 默认为图片
  return 'image'
})

const isImage = computed(() => computedType.value === 'image')
const resolvedCdnUrl = computed(() => props.cdnUrl || DEFAULT_CDN_URL)

const isAbsoluteSrc = (value = '') => /^(https?:)?\/\//.test(value) || /^(data|blob):/.test(value)
const normalizePath = (value = '') => value.startsWith('/') ? value : `/${value}`
const resolvedSrc = computed(() => {
  if (isAbsoluteSrc(props.src)) return props.src
  const base = resolvedCdnUrl.value.replace(/\/+$/, '')
  const path = normalizePath(props.src).replace(/^\/+/, '/')
  return `${base}${path}`
})

const videoEl = ref(null)
const intersectionObserver = ref(null)
const isMobile = ref(false)

const effectiveAutoplay = computed(() => props.autoplay || ((props.viewPlay || props.hoverPlay) && isMobile.value))
const effectiveLoop = computed(() => props.loop || ((props.viewPlay || props.hoverPlay) && isMobile.value))

const updateIsMobile = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
}

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
  if (!props.viewPlay || isImage.value || !videoEl.value || isMobile.value) return
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

watch(isMobile, (val) => {
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
.media-video {
  display: block;
  // min-height: max-content;
  // max-height: max-content;
}


@media screen and (max-width: 767px) {
}
</style>
