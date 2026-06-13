<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product3Unit4Data } from '@/data/product3/product3-unit4'
import { useUnitData } from '@/composables/useUnitData'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, product3Unit4Data)
</script>

<template>
  <div>
    <div class="unit4T">
      <div class="flex flex-col items-center pt-[48px] c_padding">
        <div class="title1 whitespace-pre-line">{{ unitData.unit4T.title1 }}</div>
        <div class="title2 mt-[19.55px] whitespace-pre-line">{{ unitData.unit4T.title2 }}</div>
        <div class="title3 max-w-[1200px] mt-[-2.5px]">
          <br />
          {{ unitData.unit4T.description }}
        </div>
        <div class="flex gap-x-[152px] mt-[70px]">
          <div
            v-for="(stat, index) in unitData.unit4T.stats"
            :key="index"
            class="flex flex-col items-center"
          >
            <div class="text4 flex h-[39.805px]">
              {{ stat.value }}
              <MediaAsset
                v-if="index === 1"
                :src="unitData.media.arrowIcon"
                type="image"
                class="h-[39.805px] -ml-[3px]"
                alt=""
                :lazy="false"
              />
            </div>
            <div class="text5">
              {{ stat.label }}
            </div>
          </div>
        </div>
        <MediaAsset
          :src="unitData.media.productImage"
          type="image"
          class="h-[600px] mt-[78px] object-contain m_mt_0"
          alt=""
          :lazy="false"
        />
      </div>
      <div
        class="c_padding flex mx-auto max-w-[1400px] w-full mt-[214px] justify-between pb-[155px] m_flex_warp gap-[5%] m_mt_0"
      >
        <MediaAsset
          type="video"
          :src="unitData.media.leftVideo"
          :muted="true"
          :autoplay="false"
          :loop="true"
          :controls="false"
          :hover-play="false"
          :view-play="true"
          class="h-[740px] max-h-max flex-1 w-[360px] max-w-[47%] rounded-[20px] mb-[20px]"
        />
        <div
          class="m_order w-[500px] min-w-[400px] flex-1 flex flex-col items-center pt-[147px] mb-[20px]"
        >
          <div class="title1">{{ unitData.unit4T.builtInWiresTitle }}</div>
          <div class="title2 mt-[19.55px]">{{ unitData.unit4T.builtInWiresSubtitle }}</div>
          <div class="title3 mt-[44.45px]">
            {{ unitData.unit4T.builtInWiresDescription }}
          </div>
        </div>
        <MediaAsset
          type="video"
          :src="unitData.media.rightVideo"
          :muted="true"
          :autoplay="false"
          :loop="true"
          :controls="false"
          :hover-play="false"
          :view-play="true"
          class="h-[740px] max-h-max flex-1 w-[360px] max-w-[47%] rounded-[20px] mb-[20px]"
        />
      </div>
    </div>
    <div class="unit4B h-[800px] relative">
      <MediaAsset
        :src="unitData.media.background"
        type="image"
        class="size-full absolute inset-0 object-cover"
        alt=""
        :lazy="false"
      />
      <div class="c_1230 c_padding mx-auto pt-[248px] relative">
        <div class="title1 ml-[2px]">
          {{ unitData.unit4B.title }}
        </div>
        <div class="title2 mt-[19.55px] w-max ml-[2px]">
          {{ unitData.unit4B.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit4T {
  .text4 {
    // 30%
    color: #caa4fb;
    font-size: 40px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word;
  }

  .text5 {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .title {
    color: #666;
    font-family: Roboto;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .title1 {
    color: #caa4fb;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .title2 {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .title3 {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .text {
    color: #caa4fb;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text1 {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .text2 {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .bar {
    height: 10px;
    flex-shrink: 0;
  }
}

.unit4B {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title1 {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .title2 {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
