<script setup>
import mouthpieceVideo from '@/assets/home/svg/1-Mouthpiece.mp4'
import oilWindowVideo from '@/assets/home/svg/2-Oil Windos.mp4'
import functionInterfaceVideo from '@/assets/home/svg/3-Function and Interface.mp4'
import buttonVideo from '@/assets/home/svg/4-Button.mp4'
import stickerVideo from '@/assets/home/svg/5-Sticker.mp4'
import housingVideo from '@/assets/home/svg/6-Housing.mp4'
</script>

<template>
  <div class="mt-[87px]">
    <div class="title text-center">
      Realize your unique design with CALEAF TECH
    </div>
    <div class=" relative c_1300 w-full c_padding mt-[51px] flex justify-center items-center">
      <div class="unitBox w-[1300px] h-[732px] shrink-0">
        <svg class="pointer-events-none z-[2] w-[1946px] mt-[40px] h-[723px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg" width="1920" height="754" viewBox="0 0 1920 754" fill="none">
          <path
            d="M-13 547.557C158.602 547.068 419.83 541.531 493.983 409.813C615.105 194.665 351.252 43.7328 256.139 217.85C151.279 409.812 354.719 682.371 587.869 641.341C853.801 594.542 837.893 308.964 954.024 160.701C1091.87 -15.29 1308.62 -19.6634 1399.98 83.0369C1567.07 270.864 1657.43 835.844 1302.97 723.401C989.675 624.018 1302.97 184.408 1630 119.671C1866.28 72.8987 1925 180.847 1933 221.958"
            stroke="url(#paint0_linear_1_140)" stroke-width="30" />
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
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="mouthpieceVideo" :autoplay="false" :muted="true"
            :loop="true" :controls="false" :hover-play="true" playsinline alt="Mouthpiece" />
          <div class="text">Mouthpiece</div>
        </div>
        <div class="z-[1] absolute top-0 left-[369px] w-[564px] h-[485px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="functionInterfaceVideo" :autoplay="false"
            :muted="true" :loop="true" :controls="false" :hover-play="true" playsinline alt="Function and Interface" />
          <div class="text">Function and Interface</div>
        </div>
        <div class="z-[1] absolute top-0 left-[943px] w-[355px] h-[237px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="buttonVideo" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline alt="Button" />
          <div class="text">Button</div>
        </div>
        <div class="z-[3] absolute top-[247px] left-[943px] w-[355px] h-[237px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="stickerVideo" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline alt="Sticker" />
          <div class="text">Sticker</div>
        </div>
        <div class="z-[1] absolute top-[495px] left-0 w-[643px] h-[238px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="oilWindowVideo" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline alt="Oil Window" />
          <div class="text">Oil Window</div>
        </div>
        <div class="z-[3] absolute top-[495px] left-[653px] w-[643px] h-[238px] rounded-[20px] overflow-hidden">
          <MediaAsset class="mediaAsset size-full object-cover rounded-[20px]" type="video" :src="housingVideo" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :hover-play="true" playsinline alt="Housing" />
          <div class="text">Housing</div>
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



@media screen and (max-width: 1350px) {
  .unitBox {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 1060px) {
  .unitBox {
    transform: scale(0.6);
  }
}

@media screen and (max-width: 767px) {
  .unitBox {
    transform: scale(0.4);
  }
}
</style>
