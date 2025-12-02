<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import ConsistentTR from '@/assets/product2/consistent-TR.mp4'
import ConsistentBR from '@/assets/product2/consistent-BR.mp4'
import ConsistentBL from '@/assets/product2/consistent-BL.mp4'

import vl from '@/assets/product2/no-L.mp4'
import vr from '@/assets/product2/no-R.mp4'
</script>

<template>
  <div>
    <div class="c_1230 c_padding m_flex_col mt-[42px] mx-auto flex gap-[32px]">
      <div class="w-[622.074px] pt-[145px] c_padding">
        <div class="title1 text-left">
          RTD Control
        </div>
        <div class="title2 mt-[19px]  !text-left">
          Consistent temp, <br />
          Ideal for Rosin
        </div>
        <div class="title3 mt-[56px] !text-left">

          Powered by Unicore tech, UNIT PRO combines smoothness with <br /> purity, ensuring efficient THC and terpene
          extraction without burning, and guarantees an exceptional session every time.
        </div>
      </div>
      <MediaAsset
        class="h-[553px] object-cover"
        type="video"
        :src="ConsistentTR"
        :autoplay="false"
        :muted="true"
        :controls="false"
        :loop="true"
        :view-play="true"
      />
    </div>

    <div class="c_1230 c_padding">
      <div class="h-full flex justify-between m_flex_col_r gap-[20px]">
        <div class="img-small h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="ConsistentBL"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="false"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="ConsistentBR"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="false"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div class="c_1230 c_padding mt-[145px]">
      <div class="greenText">Built-in Wires</div>
      <div class="flex justify-between mt-[19px] gap-[20px] m_flex_col">
        <div class="title2">
          No more dry burning
        </div>
        <div class="label mt-[2px]">
          The heating coil is embedded within the ceramic core, this way, the oil<br /> is heated by the ceramic core
          and not by exposed hot wires, maximizing prevention of burnt flavors and preservation.
        </div>
      </div>
      <div class="flex justify-between mt-[75px] m_flex_col gap-[20px]" ref="wiresRef">
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="vl"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="false"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="vr"
            :autoplay="false"
            :muted="true"
            :controls="false"
            :loop="false"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

.greenText {
  color: #3ad3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  /* 150% */
}

.label {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  width: 622.074px;
  flex-shrink: 0;
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 48px;
    line-height: 52px;
    text-align: center;
  }

  .greenText {
    font-size: 18px;
    text-align: center;
  }

  .title2 {
    font-size: 28px;
    text-align: center;
  }

  .label {
    width: 100% !important;
    text-align: center;
    margin-top: 10px;
  }

  .img-small,
  .img-large {
    width: 100% !important;
    height: auto !important;
    margin-top: 15px;
  }
}
</style>
