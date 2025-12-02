<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import screenBg1 from '@/assets/product4/screen-bg-1.png'
import screen1 from '@/assets/product4/screen1.png'
import screen2 from '@/assets/product4/screen2.png'
import screen3 from '@/assets/product4/screen3.png'
import screen4 from '@/assets/product4/screen4.png'
import screen5 from '@/assets/product4/screen5.png'
import screen6 from '@/assets/product4/screen6.png'

const list = [screen1, screen2, screen3, screen4, screen5, screen6]

const listBox = ref(null)
const currentIndex = ref(0)
const stepWidth = ref(350) // 单卡宽度 + 间距的初始值，挂载后会重新计算
const noTransition = ref(false)
const autoTimer = ref(null)
const resetTimer = ref(null)

const intervalMs = 2600
const transitionMs = 700

const displayList = computed(() => [...list,...list,...list,...list,...list,...list,...list,...list,...list,...list,...list,...list])

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * stepWidth.value}px)`
}))

const measureStep = () => {
  const trackEl = listBox.value
  if (!trackEl) return
  const firstCard = trackEl.querySelector('.unit6-card')
  if (!firstCard) return
  const styles = window.getComputedStyle(trackEl)
  const gap = parseFloat(styles.columnGap || '0')
  stepWidth.value = firstCard.offsetWidth + gap
}

const resetToStart = () => {
  noTransition.value = true
  currentIndex.value = 0
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      noTransition.value = false
    })
  })
}

const goNext = () => {
  if (!displayList.value.length) return
  currentIndex.value += 1

  if (currentIndex.value === list.length) {
    if (resetTimer.value) {
      window.clearTimeout(resetTimer.value)
    }
    resetTimer.value = window.setTimeout(() => {
      resetToStart()
    }, transitionMs)
  }
}

const stopAutoPlay = () => {
  if (autoTimer.value) {
    window.clearInterval(autoTimer.value)
    autoTimer.value = null
  }
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoTimer.value = window.setInterval(goNext, intervalMs)
}

onMounted(() => {
  nextTick(() => {
    measureStep()
    startAutoPlay()
    window.addEventListener('resize', measureStep)
  })
})

onBeforeUnmount(() => {
  stopAutoPlay()
  if (resetTimer.value) {
    window.clearTimeout(resetTimer.value)
  }
  window.removeEventListener('resize', measureStep)
})

</script>

<template>
  <div class="h-[900px] bg-[#F5F5F5]">
    <div class="h-full unit6">
      <div class="mb-[55px] flex justify-center items-start gap-[200px]">
        <div class="w-[250px] relative ml-[-250px] shrink-0">
          <MediaAsset
            class="w-full absolute top-0 left-0"
            type="image"
            :src="screenBg1"
            alt=""
            :lazy="false"
          />
        </div>
        <div class="mt-[126px] textBox">
          <div class="title">
            ULTRA-LARGE SMART DISPLAY
          </div>
          <div class="title2">
            Design Your Own
          </div>
          <div class="w-[500px] title3">
            Customize it further with any brand graphics to create your unique brand screen. Drive market trends with a
            design that breaks the mold and leads the way.
          </div>
        </div>
      </div>

      <div class="relative">
        <div ref="listBox" class="list-track flex gap-x-[150px] pl-[100px] justify-center"
          :class="{ 'no-transition': noTransition }" :style="trackStyle">
          <div class="unit6-card w-[200px] h-[400px] rounded-[30px] flex-shrink-0 relative"
            v-for="(item,index) in displayList" :key="index">
            <MediaAsset
              class="size-full rounded-[20px]"
              type="image"
              :src="item"
              alt=""
              :lazy="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {
  color: #111;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 19.55px;
}

.title3 {
  color: #555;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}


@media screen and (max-width: 1350px) {
  .unit6 {
    transform: translateX(12vw);
  }
}

@media screen and (max-width: 1024px) {
  .unit6 {
    transform: scale(0.5);
  }
}

@media screen and (max-width: 767px) {
  .unit6 {
    transform: scale(0.5) translateX(20vw);
  }
}

.list-track {
  transition: transform 0.7s ease;
}

.no-transition {
  transition: none !important;
}
</style>
