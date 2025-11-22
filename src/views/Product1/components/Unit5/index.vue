<script setup>
import Smooth_yet_Rugged_Design from '@/assets/product1/Smooth_yet_Rugged_Design.jpg'
import Dual_Color_Mouthpiece from '@/assets/product1/Dual_Color_Mouthpiece.jpg'
import Large_Side_Display from '@/assets/product1/Large_Side_Display.jpg'
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
  { img: Smooth_yet_Rugged_Design },  
  { img: Dual_Color_Mouthpiece },
  { img: Large_Side_Display }
]

const splideRef = ref(null)

const splideOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '1.25rem',
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100vw',
  fixedWidth: '50rem',
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
  <div class="mt-[173px]">
    <div class="c_1230 c_padding">
      <div class="title">
        Every Detail Matters
      </div>
      <div class="mt-[58px] relative">
        <div class="w-full flex justify-center">
          <Splide :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange"
            @splide:move="onSlideChange">
            <SplideSlide class="w-[800px] max-w-[94vw] h-[500px]" v-for="(item, index) in tabsList" :key="index">
              <img :class="{'!border-[#D9D9D9]':index === tabsCurrent}" :src="list[index].img"
                class="w-full h-full object-cover rounded-[20px] overflow-hidden border-[#F5F5F5] border-[2px]" alt="" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    <Tabs class="!h-[50px] mt-[40px]" :list="tabsList" v-model="tabsCurrent"></Tabs>
    <div class="c_1230 c_padding">
      <div class="label max-w-[1000px] w-full mx-auto mt-[28px]">
        The heating coil is embedded within the ceramic core, this way, the oil is heated by the ceramic core and not by
        exposed hot wires, maximizing prevention of burnt flavors and preservation.
      </div>
    </div>
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