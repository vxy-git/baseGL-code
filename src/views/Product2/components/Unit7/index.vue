<script setup>
import { computed } from 'vue';
import Tabs from "./Tabs/index.vue";
import { ref, watch, nextTick } from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MediaAsset from '@/components/MediaAsset.vue'
import { product2Unit7Data  } from '@/data/product2/product2-unit7'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = computed(() => {
  if (props.data) {
    return { ...product2Unit7Data, ...props.data };
  }
  return product2Unit7Data;
});

const tabsCurrent = ref(0)

const isVideo = (src) => /\.mp4(\?.*)?$/i.test(src)

const videoRefs = ref([])
const setVideoRef = (el, index) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const playVideo = (index) => {
  const video = videoRefs.value[index]
  if (!video) return
  try {
    video.playFromStart?.()
  } catch {}
}

const pauseVideo = (index) => {
  const video = videoRefs.value[index]
  if (!video) return
  try {
    video.pause?.()
    video.resetToStart?.()
  } catch {}
}

const syncVideoPlayback = (index) => {
  videoRefs.value.forEach((_, i) => {
    if (i === index) {
      playVideo(i)
    } else {
      pauseVideo(i)
    }
  })
}

const splideRef = ref(null)

const onSplideInit = (splide) => {
  splideRef.value = splide
  tabsCurrent.value = splide.index
  nextTick(() => {
    syncVideoPlayback(splide.index)
  })
}

const onSlideChange = (splide) => {
  tabsCurrent.value = splide.index
  syncVideoPlayback(splide.index)
}

watch(tabsCurrent, (index) => {
  splideRef.value?.go(index)
  syncVideoPlayback(index)
})
</script>

<template>
  <div>
    <div class="c_1230 c_padding mt-[200px] m_mt_0">
      <div class="title">
        {{ unitData.mainTitle }}
      </div>
      <div class="mt-[58px] relative">
        <div class="w-full flex justify-center">
          <Splide :options="unitData.splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange"
            @splide:move="onSlideChange">
            <SplideSlide class="w-[800px] max-w-[94vw] h-[500px]" v-for="(item, index) in unitData.tabsList" :key="index">
              <MediaAsset
                :ref="isVideo(unitData.mediaList[index].src) ? (el => setVideoRef(el, index)) : null"
                class="w-full h-full object-cover rounded-[10px] overflow-hidden bg-black"
                :class="{'!bg-black':index === tabsCurrent}"
                :type="unitData.mediaList[index].type"
                :src="unitData.mediaList[index].src"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
              />
              <div v-if="index === tabsCurrent" class="size-full absolute inset-0 bg-black opacity-5"></div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    <Tabs class="!h-[50px] mt-[40px]" :list="unitData.tabsList" v-model="tabsCurrent"></Tabs>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #3ad3ff 0%, #ACECFF 50%, #3ad3ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.label {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}
</style>