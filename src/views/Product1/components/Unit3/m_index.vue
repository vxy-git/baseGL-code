<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit3Data } from '@/data/product1-unit3'
const iconFlavor = product1Unit3Data.icons.flavor
const iconDevice = product1Unit3Data.icons.device
const m1 = '/assets/product1/unit3/m1.jpg'
const m2 = '/assets/product1/unit3/m2.jpg'
const m3 = '/assets/product1/unit3/m3.jpg'
</script>

<template>
  <section class="sequence-wrap relative">
    <div class="size-full flex items-start justify-center">
      <div class="text-layer">
        <div class="text-block c_padding">
          <div class="title whitespace-break-spaces">{{ product1Unit3Data.textBlocks.tb1.title }}</div>
          <MediaAsset :src="m1" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">{{ product1Unit3Data.textBlocks.tb2.smallTitle }}</div>
          <div class="wTitle">{{ product1Unit3Data.textBlocks.tb2.wTitle }}</div>
          <div class="text">{{ product1Unit3Data.textBlocks.tb2.text }}
          </div>
          <MediaAsset :src="m2" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">{{ product1Unit3Data.textBlocks.tb3.smallTitle }}</div>
          <div class="wTitle whitespace-break-spaces">{{ product1Unit3Data.textBlocks.tb3.wTitle }}</div>
          <div class="text">{{ product1Unit3Data.textBlocks.tb3.text }}
          </div>
          <MediaAsset :src="m3" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">
            {{ product1Unit3Data.textBlocks.tb4.smallTitle }}
          </div>
          <div class="wTitle whitespace-break-spaces">
            {{ product1Unit3Data.textBlocks.tb4.wTitle }}
          </div>
          <div class="text !mt-[28px]">
            {{ product1Unit3Data.textBlocks.tb4.text }}
          </div>
          <div class="flex justify-center gap-x-[150px] mt-[68px]">
            <div class="flex flex-col items-center justify-center " v-for="stat in product1Unit3Data.textBlocks.tb4.stats" :key="stat.label">
              <div class="text1 h-[40px]">
                {{ stat.value }}
              </div>
              <div class="text2">
                {{ stat.label }}
              </div>
            </div>
          </div>
          <MediaAsset :src="iconDevice" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sequence-wrap {
  height: max-content;
  // overflow: hidden;
}

.text-layer {
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-block {
  padding-bottom: 150px;
  display: none;
}

.text-block:first-child,
.text-block:nth-child(2),
.text-block:nth-child(3),
.text-block:nth-child(4) {
  display: block;
  // position: absolute;
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.smallTitle {
  padding-right: 10px;
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.wTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}

.text {
  max-width: 1200px;
  margin: 20px auto 0;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.text1 {
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  /* 75% */
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  margin-top: 0px;
}
</style>