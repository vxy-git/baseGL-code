<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product2GsapUData } from '@/data/product2-gsapu.js'
</script>

<template>
  <div class="pt-[133px]">
    <section class="sequence-wrap relative">
      <div class="size-full flex items-start justify-center">
        <div class="text-layer">
          <div class="text-block">
            <div class="c_1230 c_padding">
              <div class="title1 translate-y-[1px] text-center">{{ product2GsapUData.content.labelText }}</div>
              <div class="title2 mt-[19px] whitespace-break-spaces">{{ product2GsapUData.content.mainTitle }}</div>
              <div class="title3 mt-[19px]">{{ product2GsapUData.content.description }}</div>
            </div>
          </div>
          <MediaAsset :src="product2GsapUData.media.image" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

.text-layer {
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  max-width: 1400px;
  flex-shrink: 0;
}

.title1 {
  color: #3ad3ff;
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

.title3 {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}
</style>