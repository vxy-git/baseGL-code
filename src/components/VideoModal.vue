<template>
  <teleport to="body">
    <Transition name="video-modal-fade">
      <div v-if="visible" class="video-modal__mask" @click="handleMaskClick">
        <div class="video-modal__container" @click.stop>
          <!-- <button type="button" class="video-modal__close" aria-label="Close video" @click="close">
            ×
          </button> -->
          <div class="video-modal__body">
            <video
              ref="videoEl"
              class="video-modal__video"
              :src="src"
              :poster="poster"
              :autoplay="autoplay"
              :loop="loop"
              :muted="muted"
              :controls="controls"
              playsinline
            />
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  visible: { type: Boolean, required: true },
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  autoplay: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  controls: { type: Boolean, default: true }
})

const emit = defineEmits(['update:visible'])

const videoEl = ref(null)
const originalOverflow = ref('')
let isLocked = false

const close = () => {
  emit('update:visible', false)
}

const handleMaskClick = () => {
  close()
}

const lockBodyScroll = () => {
  if (isLocked) return
  const body = document.body
  if (!body) return
  originalOverflow.value = body.style.overflow
  body.style.overflow = 'hidden'
  isLocked = true
}

const unlockBodyScroll = () => {
  if (!isLocked) return
  const body = document.body
  if (!body) return
  body.style.overflow = originalOverflow.value
  isLocked = false
}

const playFromStart = () => {
  const el = videoEl.value
  if (!el) return
  try {
    el.currentTime = 0
    const p = el.play()
    if (p && typeof p.then === 'function') {
      p.catch(() => {})
    }
  } catch {}
}

const pauseAndReset = () => {
  const el = videoEl.value
  if (!el) return
  try {
    el.pause()
    el.currentTime = 0
  } catch {}
}

watch(
  () => props.visible,
  (val) => {
    if (val) {
      lockBodyScroll()
      playFromStart()
    } else {
      pauseAndReset()
      unlockBodyScroll()
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  pauseAndReset()
  unlockBodyScroll()
})
</script>

<style scoped lang="scss">
.video-modal__mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 24px;
}

.video-modal__container {
  position: relative;
  width: min(90vw, 1200px);
  max-height: 90vh;
}

.video-modal__body {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.45);
}

.video-modal__video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
}

.video-modal__close {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 22px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
}

.video-modal__close:hover {
  background: rgba(255, 255, 255, 0.15);
}

.video-modal-fade-enter-active,
.video-modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.video-modal-fade-enter-from,
.video-modal-fade-leave-to {
  opacity: 0;
}
</style>
