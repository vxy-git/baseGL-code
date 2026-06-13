<template>
  <teleport to="body">
    <Transition name="video-modal-fade">
      <div v-if="visible" class="video-modal__mask" @click="handleMaskClick">
        <div class="video-modal__container" @click.stop>
          <div class="video-modal__body">
            <MediaAsset
              ref="videoEl"
              type="video"
              :src="src"
              :poster="poster"
              :autoplay="autoplay"
              :loop="loop"
              :muted="muted"
              :controls="controls"
              class="video-modal__video"
            />
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { logger } from '@/utils/logger'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'

const props = defineProps({
  visible: { type: Boolean, required: true },
  src: { type: String, required: true },
  poster: { type: String, default: '' },
  autoplay: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  controls: { type: Boolean, default: true },
})

const emit = defineEmits(['update:visible'])

const videoEl = ref(null)
const { lock: lockScroll, unlock: unlockScroll } = useBodyScrollLock()

const close = () => {
  emit('update:visible', false)
}

const handleMaskClick = () => {
  close()
}

/**
 * 获取组件实例中的原生 video 元素
 * @returns {HTMLVideoElement|null}
 */
const getVideoElement = () => {
  const comp = videoEl.value
  if (!comp) return null
  // 如果 $el 本身就是 video 元素，直接返回
  if (comp.$el instanceof HTMLVideoElement) return comp.$el
  // 否则在 $el 内部查找
  return comp.$el?.querySelector?.('video') || null
}

const playFromStart = () => {
  const el = getVideoElement()
  if (!el) return
  try {
    el.currentTime = 0
    const p = el.play()
    if (p && typeof p.then === 'function') {
      p.catch(e => {
        if (e?.name !== 'AbortError') logger.debug('视频播放中断:', e)
      })
    }
  } catch (e) {
    logger.debug('视频播放失败:', e)
  }
}

const pauseAndReset = () => {
  const el = getVideoElement()
  if (!el) return
  try {
    el.pause()
    el.currentTime = 0
  } catch (e) {
    logger.debug('视频暂停/重置失败:', e)
  }
}

watch(
  () => props.visible,
  val => {
    if (val) {
      lockScroll()
      playFromStart()
    } else {
      pauseAndReset()
      unlockScroll()
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  pauseAndReset()
  unlockScroll()
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
