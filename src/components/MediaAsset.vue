<template>
  <CdnImage v-if="isImage" v-bind="$attrs" :src="src" :alt="alt" :cdnUrl="cdnUrl" :lazy="lazy" />
  <video v-else ref="videoEl" v-bind="$attrs" :src="src" :poster="poster" :autoplay="autoplay" :muted="muted"
    :loop="loop" :controls="controls" playsinline class="media-video" />
</template>

<script setup>
import { computed, ref, defineExpose } from 'vue'
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
  loop: { type: Boolean, default: false }
})

const isImage = computed(() => props.type === 'image')

const videoEl = ref(null)

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

defineExpose({ playFromStart, pause, videoEl })
</script>

<style scoped lang="scss">
.media-video {
  display: block;
  background-color: transparent;
  transform: translateZ(0);
}
</style>
