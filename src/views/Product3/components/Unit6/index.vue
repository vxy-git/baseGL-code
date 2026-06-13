<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { product3Unit6Data  } from '@/data/product3/product3-unit6'
import { useUnitData } from '@/composables/useUnitData'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, product3Unit6Data)

const list = computed(() => unitData.value.screenImages)

const listBox = ref(null)
const currentIndex = ref(0)
const stepWidth = ref(350) // 单卡宽度 + 间距的初始值，挂载后会重新计算
const noTransition = ref(false)
const autoTimer = ref(null)
const resetTimer = ref(null)

const intervalMs = 2600
const transitionMs = 700

const displayList = computed(() => [...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value,...list.value])

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

  if (currentIndex.value === list.value.length) {
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
            :src="unitData.screenBg"
            alt=""
            :lazy="false"
          />
        </div>
        <div class="mt-[126px] textBox">
          <div class="title">
            {{ unitData.content.smallTitle }}
          </div>
          <div class="title2">
            {{ unitData.content.mainTitle }}
          </div>
          <div class="w-[500px] title3">
            {{ unitData.content.description }}
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
@use '@/styles/variables' as *;
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


@media screen and (max-width: $breakpoint-wide) {
  .unit6 {
    transform: translateX(12vw);
  }
}

@media screen and (max-width: $breakpoint-tablet) {
  .unit6 {
    transform: scale(0.5);
  }
}

@media screen and (max-width: $breakpoint-mobile) {
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