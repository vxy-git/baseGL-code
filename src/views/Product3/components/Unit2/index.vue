<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product3Unit2Data  } from '@/data/product3/product3-unit2'
import { computed } from 'vue';

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

// 合并 CMS 数据和本地数据
const unitData = computed(() => {
  if (props.data) {
    return { ...product3Unit2Data, ...props.data };
  }
  return product3Unit2Data;
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full h-[56.25vw] mBox">
      <MediaAsset class="w-full" type="image" :src="unitData.products.product1Image" alt="" :lazy="false" />
      <div class="info absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1">
          {{ unitData.products.product1Name }}
        </div>
        <div class="title2 mt-[19.55px] whitespace-break-spaces">
          {{ unitData.products.product1Description }}
        </div>
      </div>
    </div>
    <div class="relative w-full h-[56.25vw] mBox">
      <MediaAsset class="w-full" type="image" :src="unitData.products.product2Image" alt="" :lazy="false" />
      <div class="info absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1 !text-black">
          {{ unitData.products.product2Name }}
        </div>
        <div class="title2 !text-white mt-[19px] whitespace-break-spaces">
          {{ unitData.products.product2Description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
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

@media screen and (max-width: $breakpoint-tablet) {
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