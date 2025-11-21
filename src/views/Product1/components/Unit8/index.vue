<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import bannerImg1 from "@/assets/product1/realize1.jpg";
import bannerImg2 from "@/assets/product1/realize2.jpg";
import bannerImg3 from "@/assets/product1/realize3.jpg";
import bannerImg4 from "@/assets/product1/realize4.jpg";

const list = [
  { img: bannerImg1 },
  { img: bannerImg2 },
  { img: bannerImg3 },
  { img: bannerImg4 },
];

const bannerCurrent = ref(0);
const splideRef = ref(null);
const canSlidePrev = ref(true);
const canSlideNext = ref(true);
const isHovered = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 767;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const splideOptions = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "20px",
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: "100vw",
  fixedWidth: "800px",
  focus: "center",
};

const updateArrowStatus = (splide) => {
  canSlidePrev.value = true;
  canSlideNext.value = true;
  bannerCurrent.value = splide.index;
};

const changeEnd = (splide) => {
  updateArrowStatus(splide);
};

const onSlideChange = (splide) => {
  updateArrowStatus(splide);
};

const onSplideInit = (splide) => {
  splideRef.value = splide;
  updateArrowStatus(splide);
};

const slidePrev = () => {
  splideRef.value?.go("<");
};

const slideNext = () => {
  splideRef.value?.go(">");
};

const goToSlide = (index) => {
  splideRef.value?.go(index);
};
</script>

<template>
  <div class="pt-[110px] bg-white pb-[148px]">
    <div class="label text-center">Design your own look</div>
    <div class="title text-center mt-[20px]">Realize your unique design with CALEAF TECH</div>
    <div class="mt-[58px] relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <img
        class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
        :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
        src="@/assets/img/icon4_active.png"
        alt=""
        @click="slidePrev"
      >
      <div class="w-full">
        <Splide
          :options="splideOptions"
          @splide:mounted="onSplideInit"
          @splide:moved="onSlideChange"
          @splide:move="changeEnd"
        >
          <SplideSlide class="w-[800px] h-[500px] max-w-[94vw]" v-for="(item, index) in list" :key="index">
            <img :src="item.img" class="w-full h-full object-cover rounded-[20px]" alt="" />
          </SplideSlide>
        </Splide>
      </div>
      <img
        class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
        :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
        src="@/assets/img/icon4_active.png"
        alt=""
        @click="slideNext"
      >
    </div>
    <!-- <div class="flex justify-center gap-x-[10px] pt-[26px]">
      <div
        v-for="(item,index) in list"
        :class="{ '!bg-black !w-[30px]': bannerCurrent === index }"
        :key="index"
        class="dotItem cursor-pointer"
        @click="goToSlide(index)"
      ></div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.label{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title{
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.dotItem {
  width: 10px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}
</style>