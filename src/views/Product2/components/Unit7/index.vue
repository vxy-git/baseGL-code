<script setup>

import Tabs from "./Tabs/index.vue";
import {ref, watch} from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import every1 from '@/assets/product2/every_Crystal-clear-Design.jpg'
import every2 from '@/assets/product2/every_Unibody-Enclosure.mp4'
import every3 from '@/assets/product2/every_Medical-grade-Chamber.jpg'

const tabsCurrent = ref(0)
const tabsList = [
  "Crystal-clear Design",
  "Unibody Enclosure",
  "Medical-grade Chamber"
]

const list = [
  { img: every1 },
  { img: every2 },
  { img: every3 }
]

const isVideo = (src) => /\.mp4(\?.*)?$/i.test(src)

const splideRef = ref(null)

const splideOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '20px',
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100vw',
  fixedWidth: '800px',
  focus: 'center',
}

const onSplideInit = (splide) => {
  splideRef.value = splide
  tabsCurrent.value = splide.index
}

const onSlideChange = (splide) => {
  tabsCurrent.value = splide.index
}

watch(tabsCurrent, (index) => {
  splideRef.value?.go(index)
})
</script>

<template>
  <div>
    <div class="c_1230 c_padding mt-[200px]">
      <div class="title">
        Every Detail Matters
      </div>
      <div class="mt-[58px] relative">
        <div class="w-full flex justify-center">
          <Splide :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange"
            @splide:move="onSlideChange">
            <SplideSlide class="w-[800px] max-w-[94vw] h-[500px]" v-for="(item, index) in tabsList" :key="index">
              <template v-if="isVideo(list[index].img)">
                <video :src="list[index].img" autoplay muted loop playsinline
                  :class="{'!bg-black':index === tabsCurrent}"
                  class="w-full h-full object-cover rounded-[10px] overflow-hidden bg-black" />
              </template>
              <template v-else>
                <img :class="{'!bg-black':index === tabsCurrent}" :src="list[index].img"
                  class="w-full h-full object-cover rounded-[10px] overflow-hidden bg-black" alt="" />
              </template>
              <div v-if="index === tabsCurrent" class="size-full absolute inset-0 bg-black opacity-5"></div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    <Tabs class="!h-[50px] mt-[40px]" :list="tabsList" v-model="tabsCurrent"></Tabs>
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
  background: linear-gradient(90deg, #1CE785 0%, #80FFC1 50%, #1CE785 100%);
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