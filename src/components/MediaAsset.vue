<template>
  <CdnImage v-if="isImage" v-bind="$attrs" :src="src" :alt="alt" :cdnUrl="cdnUrl" :lazy="lazy" />
  <video v-else v-bind="$attrs" :src="src" :poster="poster" :autoplay="autoplay" :muted="muted" :loop="loop" :controls="controls" playsinline class="media-video" />
</template>

<script setup>
import { computed } from 'vue'

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
</script>

<style scoped lang="scss">
.media-video {
  display: block;
  width: 100%;
  height: auto;
}
</style>