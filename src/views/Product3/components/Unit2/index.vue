<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import unitImg1 from '@/assets/product3/unit2-1.jpg'
import unitImg2 from '@/assets/product3/unit2-2.jpg'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full h-screen max-h-max mBox">
      <MediaAsset class="w-full" type="image" :src="unitImg1" alt="" :lazy="false" />
      <div class="info absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1">
          UNICORN
        </div>
        <div class="title2 mt-[19.55px]">
          Super thin. Strikingly light.<br />
          Shockingly strong.
        </div>
      </div>
    </div>
    <div class="relative w-full h-screen max-h-max mBox">
      <MediaAsset class="w-full" type="image" :src="unitImg2" alt="" :lazy="false" />
      <div class="info absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1 !text-black">
          UNICORN Pro
        </div>
        <div class="title2 !text-white mt-[19px]">
          Tiny powerhouse&nbsp;<br />
          Exceptional pro capability&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title1 {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {

  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media screen and (max-width: 1024px) {
  .mBox {
    height: auto;
  }

  .info {
    top: auto;
    right: 0;
    left: 0;
    transform: translateX(0);
    position: relative;
    margin-bottom: 100px;
    .title1 {
      color: #CAA4FB !important;
    }

    .title2 {
      color: black !important;
    }
  }
}
</style>
