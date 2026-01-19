<script setup>
import MediaAsset from "@/components/MediaAsset.vue";
import { product3Unit3Data } from '@/data/product3/product3-unit3'
const m1 = '/api/uploads/file/default/assets/product3/unit3/m1.jpg'
const m2 = '/api/uploads/file/default/assets/product3/unit3/m2.jpg'
const m3 = '/api/uploads/file/default/assets/product3/unit3/m3.jpg'
</script>

<template>
  <section class="m-unit3 text-white">
    <div class="c_padding c_1230 mx-auto flex flex-col gap-[56px] py-[96px]">
      <div class="text-block text-center flex flex-col gap-[14px]">
        <div class="title">
          <span class="text-white">Gold</span> {{ product3Unit3Data.textBlocks.tb1TitleText }}
        </div>
        <MediaAsset :src="m1" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
      </div>

      <div class="text-block c_padding">
        <div class="title1">{{ product3Unit3Data.textBlocks.tb2Content.smallTitle }}</div>
        <div class="title2 mt-[19.55px]">{{ product3Unit3Data.textBlocks.tb2Content.title }}</div>
        <div class="title3 max-w-[1200px] mt-[19.45px]">
          {{ product3Unit3Data.textBlocks.tb2Content.description }}
        </div>
      </div>
      <MediaAsset :src="m2" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />

      <div class="relative w-full planM">
        <div class="text-block c_padding">
          <div class="bg-[#23242A]/70 rounded-[40px] w-[800px] h-[440px] flex pl-[65px] pt-[146px] m_scale_70">
            <div>
              <div class="flex text">
                {{ product3Unit3Data.textBlocks.tb3Content.figure }}
                <MediaAsset :src="product3Unit3Data.arrowIcon" type="image" class="h-[39.805px]" alt="" :lazy="false" />
              </div>
              <div class="text1">
                {{ product3Unit3Data.textBlocks.tb3Content.label }}
              </div>
            </div>
            <div class="ml-[63.5px]">
              <div>
                <div class="bar w-[480px] bg-[#CAA4FB] rounded-full"></div>
                <div class="text2 mt-[15px]">
                  {{ product3Unit3Data.textBlocks.tb3Content.bar1Text }}
                </div>
              </div>
              <div class="mt-[46px]">
                <div class="bar w-[319px] bg-[#D9D9D9] rounded-full"></div>
                <div class="text2 mt-[15px]">
                  {{ product3Unit3Data.textBlocks.tb3Content.bar2Text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MediaAsset :src="m3" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
    </div>
  </section>
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

.text-block {
  width: 100%;
}

.text-block:first-child,
.text-block:nth-child(2),
.text-block:nth-child(3) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.planM {
  height: 400px;
  margin-top: -100px;
}

.planM:first-child {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  background: linear-gradient(180deg, #CAA4FB 0%, #E0B8FF 50%, #CAA4FB 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title1 {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
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
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.text {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}

.text1 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.bar {
  height: 10px;
  flex-shrink: 0;
}
</style>