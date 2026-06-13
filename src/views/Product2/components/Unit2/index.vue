<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useUnitData } from '@/composables/useUnitData'
import MediaAsset from '@/components/MediaAsset.vue'
import { product2Unit2Data  } from '@/data/product2/product2-unit2'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = useUnitData(props, product2Unit2Data)

const marqueeItems = [...product2Unit2Data.marqueeWords]

const marqueeKey = ref(0)
const marqueeEl = ref(null)
let observer = null
let wasVisible = false

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      // 重入视口时强制重渲染，重置动画
      if (entry.isIntersecting && !wasVisible) {
        marqueeKey.value += 1
      }
      wasVisible = entry.isIntersecting
    },
    { threshold: 0.4 }
  )
  if (marqueeEl.value) {
    observer.observe(marqueeEl.value)
  }
})

onBeforeUnmount(() => {
  if (observer && marqueeEl.value) {
    observer.unobserve(marqueeEl.value)
  }
  observer = null
})
</script>

<template>
  <div class="c_1230 c_padding pt-[120px]">
    <div class="title">
      {{ unitData.mainTitle }}
      <span ref="marqueeEl" class="text-[#3ad3ff] smoothness-marquee" aria-label="Smoothness ticker">
        <span :key="marqueeKey" class="smoothness-track">
          <span v-for="(word, index) in marqueeItems" :key="index" class="smoothness-item">
            {{ word }}
          </span>
        </span>
      </span>
    </div>
    <MediaAsset
      :src="unitData.unitImage"
      type="image"
      class="logo mx-auto block mt-[63px] h-[1152px] c_1230 w-full object-contain"
      alt=""
      :lazy="false"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.title {
  margin: auto;
  max-width: 1000px;
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;
}

.smoothness-marquee {
  display: inline-block;
  overflow: hidden;
  height: 1.2em;
  line-height: 1.2em;
  vertical-align: bottom;
}

.smoothness-track {
  margin-top: -2px;
  display: flex;
  flex-direction: column;
  animation: smoothness-vertical 4s forwards; //infinite
}

.smoothness-item {
  width: max-content;
  line-height: 1.2em;
}

// .smoothness-item:last-child {
//   color: #fff;
// }

@keyframes smoothness-vertical {
  0%,
  10% {
    transform: translateY(0);
  }

  30%,
  45% {
    transform: translateY(-1.2em);
  }

  65%,
  80% {
    transform: translateY(-2.4em);
  }
 
  100% {
    transform: translateY(-3.6em);
  }
}

@media screen and (max-width: $breakpoint-tablet) {
  .logo {
    height: 800px;
  }
}
</style>