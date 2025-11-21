<script setup>

import Tabs from "./Tabs/index.vue";
import {ref, watch} from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const tabsCurrent = ref(0)
const tabsList = [
  "Smooth yet Rugged Design",
  "Dual-Color Mouthpiece",
  "Large Side Display"
]

const list = [
  { img: '@/assets/img/icon22.png' },
  { img: '@/assets/img/icon22.png' },
  { img: '@/assets/img/icon22.png' }
]

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
              <img :class="{'!bg-[#D9D9D9]':index === tabsCurrent}" :src="list[index].img"
                class="w-full h-full object-cover rounded-[10px] overflow-hidden bg-[#F5F5F5]" alt="" />
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