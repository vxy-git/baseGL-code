<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { homeUnit4Data } from '@/data/home/home-unit4'
import MediaAsset from '@/components/MediaAsset.vue'
import { useCmsNavStore } from '@/stores/cmsNav'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
})

const cmsNavStore = useCmsNavStore()

const cmsData = computed(() => {
  const homeNav = cmsNavStore.getNavByName('Home')
  return homeNav?.moduleList?.unit4?.data || null
})

const unitData = computed(() => {
  // 1. Props
  if (props.data) return { ...homeUnit4Data, ...props.data }

  // 2. CMS Store
  if (cmsData.value) {
    return {
      ...homeUnit4Data,
      ...cmsData.value
    }
  }

  // 3. Local
  return homeUnit4Data
})

const unitBoxRef = ref(null)
const playPath = ref(false)
let observer

onMounted(() => {

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 先移除再添加类，确保每次入屏重新触发动画
          playPath.value = false
          requestAnimationFrame(() => {
            playPath.value = true
          })
        } else {
          // playPath.value = false
        }
      })
    },
    { threshold: 0.3 }
  )

  if (unitBoxRef.value) {
    observer.observe(unitBoxRef.value)
  }
})

onUnmounted(() => {
  observer && observer.disconnect()
})
</script>

<template>
  <div class="mt-[87px]">
    <div class="title text-center">
      {{ unitData.unitTitle }}
    </div>
    <div class="svgBox relative c_1300 w-full c_padding mt-[51px] flex justify-center items-center">
      <div ref="unitBoxRef" class="unitBox w-[1300px] h-[732px] shrink-0">
        <svg class="pointer-events-none z-[2] w-[1946px] mt-[40px] h-[723px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg" width="1920" height="754" viewBox="0 0 1920 754" fill="none">
          <path
            d="M-13 547.557C158.602 547.068 419.83 541.531 493.983 409.813C615.105 194.665 351.252 43.7328 256.139 217.85C151.279 409.812 354.719 682.371 587.869 641.341C853.801 594.542 837.893 308.964 954.024 160.701C1091.87 -15.29 1308.62 -19.6634 1399.98 83.0369C1567.07 270.864 1657.43 835.844 1302.97 723.401C989.675 624.018 1302.97 184.408 1630 119.671C1866.28 72.8987 1925 180.847 1933 221.958"
            :class="['path-base', { 'path-anim': playPath }]"
            stroke="url(#paint0_linear_1_140)"
            stroke-width="30"
            stroke-linecap="round"
            pathLength="1"
          />
          <defs>
            <linearGradient id="paint0_linear_1_140" x1="1907" y1="376.569" x2="-13" y2="376.569"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="0.355769" stop-color="#FD22E0" />
              <stop offset="0.605769" stop-color="#FBEB00" />
              <stop offset="0.831731" stop-color="#1BF1F2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
        <div class="z-[3] absolute top-0 left-0 w-[359px] h-[485px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="unitData.designItems[0].video" :autoplay="false" :muted="true"
            :loop="true" :controls="false" :hover-play="true" playsinline :alt="unitData.designItems[0].text" />
          <div class="text">{{ unitData.designItems[0].text }}</div>
        </div>
        <div class="z-[1] absolute top-0 left-[369px] w-[564px] h-[485px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="unitData.designItems[2].video" :autoplay="false"
            :muted="true" :loop="true" :controls="false" :hover-play="true" playsinline :alt="unitData.designItems[2].text" />
          <div class="text">{{ unitData.designItems[2].text }}</div>
        </div>
        <div class="z-[1] absolute top-0 left-[943px] w-[355px] h-[237px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="unitData.designItems[3].video" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline :alt="unitData.designItems[3].text" />
          <div class="text">{{ unitData.designItems[3].text }}</div>
        </div>
        <div class="z-[3] absolute top-[247px] left-[943px] w-[355px] h-[237px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="unitData.designItems[4].video" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline :alt="unitData.designItems[4].text" />
          <div class="text">{{ unitData.designItems[4].text }}</div>
        </div>
        <div class="z-[1] absolute top-[495px] left-0 w-[643px] h-[238px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="unitData.designItems[1].video" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline :alt="unitData.designItems[1].text" />
          <div class="text">{{ unitData.designItems[1].text }}</div>
        </div>
        <div class="z-[3] absolute top-[495px] left-[653px] w-[643px] h-[238px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="unitData.designItems[5].video" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline :alt="unitData.designItems[5].text" />
          <div class="text">{{ unitData.designItems[5].text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}

.text {
  position: absolute;
  bottom: 31px;
  left: 27px;
  color: #FFF;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  // font-variant: small-caps;
  // width: 232px;
}

.mediaAsset {
  height: calc(100% + 2px);
}
.path-base {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  opacity: 0;
}
.path-anim {
  animation: draw-path 6s ease-in-out forwards;
}

@keyframes draw-path {
  0% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.6;
  }
}

@media screen and (max-width: 1350px) {
  .unitBox {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 1060px) {
  .unitBox {
    transform: scale(0.6);
  }

  .svgBox {
    height: 420px;
  }
}

@media screen and (max-width: 767px) {
  .unitBox {
    transform: scale(0.4);
  }

  .svgBox {
    height: 320px;
  }
}
</style>