<script setup>
import { ref } from 'vue'
import screenBg0 from '@/assets/product4/screen-bg-0.png'
import screenBg1 from '@/assets/product4/screen-bg-1.png'
import screen1 from '@/assets/product4/screen1.png'
import screen2 from '@/assets/product4/screen2.png'
import screen3 from '@/assets/product4/screen3.png'
import screen4 from '@/assets/product4/screen4.png'
import screen5 from '@/assets/product4/screen5.png'
import screen6 from '@/assets/product4/screen6.png'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const list = [screen1,screen2,screen3,screen4,screen5,screen6,screen1,screen2,screen3,screen4,screen5,screen6,screen1,screen2,screen3,screen4,screen5,screen6]

const splideOptions = {
  type: 'loop',
  autoWidth: true,
  perMove: 1,
  gap: '5rem',
  // focus: 'center',
  autoplay: true,
  interval: 2500,
  speed: 800,
  rewind: false,
  arrows: false,
  pagination: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  drag: false,
}

const currentIndex = ref(0)
const onSplideInit = (splide) => {
  currentIndex.value = splide.index
}
const onSlideChange = (splide) => {
  currentIndex.value = splide.index
}

</script>

<template>
  <div class="h-[900px] bg-[#F5F5F5]">
    <div class="h-full unit6">
      <div class="absolute left-1/2 -translate-x-1/2 mb-[55px] flex justify-center items-start gap-[200px]">
        <!-- <div class="w-[250px] relative ml-[-250px] shrink-0">
          <img class="w-full absolute top-0 left-0" :src="screenBg1" alt="">
        </div> -->
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

      <div class="flex justify-start h-full">
        <Splide class="size-full" :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange">
          <SplideSlide class="h-full" v-for="(item, index) in list" :key="index">
            <div class="h-full flex-shrink-0 relative">
              <img :class="index === currentIndex ? 'opacity-100' : 'opacity-0'" class="w-[250px]" :src="screenBg1" alt="">
              <img class="w-[200px] h-[400px] rounded-[30px]  absolute bottom-[2rem] left-1/2 translate-x-[-50%]" :src="item" alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #1CE785;
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


// @media screen and (max-width: 1350px) {
//   .unit6 {
//     transform: scale(0.7);
//   }
// }

// @media screen and (max-width: 1024px) {
//   .unit6 {
//     transform: scale(0.5);
//   }
// }

// @media screen and (max-width: 767px) {
//   .unit6 {
//     transform: scale(0.5);
//   }
// }
</style>