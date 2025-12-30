<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product3Unit8Data  } from '@/data/product3/product3-unit8'
</script>

<template>
  <div class="bg-black -mt-[5px] pb-[121px]">

    <div class=" c_1300 mx-auto pt-[114px]">
      <div class="title2">
        {{ product3Unit8Data.pageTitle }}
      </div>

      <div class="flex cardBox gap-x-[27px] mt-[45px] relative">
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2"
          type="image"
          :src="product3Unit8Data.icons.arrowLeft"
          alt=""
          :lazy="false"
          @click="slidePrev"
        />
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2"
          type="image"
          :src="product3Unit8Data.icons.arrowRight"
          alt=""
          :lazy="false"
          @click="slideNext"
        />
        <div class="card pt-[63px]" v-for="item in 4">
          <MediaAsset
            class="w-[185px] h-[165px] mx-auto"
            type="image"
            :src="product3Unit8Data.images.card"
            alt=""
            :lazy="false"
          />
          <div class="cardTitle pl-[20px] mt-[46px]">
            {{ product3Unit8Data.specs.unicorn[0].title }}
          </div>
          <div class="cardLabel mt-[2px] pl-[20px]">
            {{ product3Unit8Data.specs.unicorn[0].label }}
          </div>
          <div class="btn ml-[20px] mt-[17px]">
            {{ product3Unit8Data.specs.unicorn[0].btnText }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.cardBox{
  .card{
    width: 305px;
    height: 440px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #23242A;
    .cardTitle{
      color: #FFF;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
    }
    .cardLabel{
      color: #F5F5F5;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
    .btn{
      border-radius: 50px;
      background: #CAA4FB;
      width: 130px;
      height: 40px;
      flex-shrink: 0;
      color: #000;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.title2{
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  line-height: 80px; /* 100% */
  letter-spacing: -5px;
}

</style>
