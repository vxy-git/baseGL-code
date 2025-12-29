<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import {
  PRODUCT1_IMAGE,
  PRODUCT2_IMAGE,
  PRODUCT1_NAME,
  PRODUCT2_NAME,
  PRODUCT1_DESCRIPTION,
  PRODUCT2_DESCRIPTION
} from '@/data/product3-unit2'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full h-[56.25vw] mBox">
      <MediaAsset class="w-full" type="image" :src="PRODUCT1_IMAGE" alt="" :lazy="false" />
      <div class="info absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1">
          {{ PRODUCT1_NAME }}
        </div>
        <div class="title2 mt-[19.55px]">
          {{ PRODUCT1_DESCRIPTION }}
        </div>
      </div>
    </div>
    <div class="relative w-full h-[56.25vw] mBox">
      <MediaAsset class="w-full" type="image" :src="PRODUCT2_IMAGE" alt="" :lazy="false" />
      <div class="info absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1 !text-black">
          {{ PRODUCT2_NAME }}
        </div>
        <div class="title2 !text-white mt-[19px]">
          {{ PRODUCT2_DESCRIPTION }}
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