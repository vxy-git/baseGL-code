<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product3Unit9Data } from '@/data/product3-unit9'
</script>

<template>
    <div class="mt-[158px] c_1230 c_padding pb-[170px] m_mt_0">
      <div class="title1 text-center">
        {{ product3Unit9Data.labels.unicorn }}
      </div>
      <div class="title2 mt-[19px]">
        {{ product3Unit9Data.content.mainTitle }}
      </div>
      <div class="flex gap-[20px] justify-center mt-[54px] m_flex_col">
        <MediaAsset
          type="image"
          :src="product3Unit9Data.media.leftImage"
          class="w-auto max-w-full h-[440px] rounded-[20px] overflow-hidden"
        />
        <MediaAsset
          type="image"
          :src="product3Unit9Data.media.rightImage"
          class="w-auto max-w-full h-[440px] rounded-[20px] overflow-hidden"
        />
      </div>
    </div>
</template>

<style scoped lang="scss">
.img {
  width: 1400px;
  height: 656px;
  flex-shrink: 0;
  aspect-ratio: 175/82;
}

.title1 {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
