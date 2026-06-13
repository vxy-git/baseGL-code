<script setup>
import { useUnitData } from '@/composables/useUnitData'
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit1Data } from '@/data/product1/product1-unit1'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, product1Unit1Data)
</script>

<template>
  <div class="unit1 relative mt_nav">
    <MediaAsset
      class="w-full h-full object-cover"
      type="video"
      :src="unitData.videoSrc"
      :controls="false"
      :autoplay="false"
      :muted="true"
      :loop="false"
      :view-play="true"
      playsinline
    />
    <div class="absolute h-full w-full left-0 top-0 flex flex-col justify-center">
      <div class="c_1230 c_padding w-full m_flex_col">
        <div class="scroll text-center absolute w-full bottom-[67px] left-0">
          {{ unitData.content.scrollText }}
        </div>
        <div class="title">
          {{ unitData.content.title }}
        </div>
        <div class="subTitle translate-y-[-2px]">
          {{ unitData.content.subtitle }}
        </div>
        <div class="btn cursor-pointer">
          {{ unitData.content.buttonText }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.unit1 {
  min-height: calc(980px / 1920px * 100vw);
}

.title {
  color: #fff;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.subTitle {
  color: #d9d9d9;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
}

.btn {
  margin-top: 78px;
  //transform: translateY(-4px);
  width: 120px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1ce785;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.scroll {
  color: #fff;
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
}

@media screen and (max-width: $breakpoint-tablet) {
  .title {
    font-size: 40px;
    text-align: center;
  }

  .subTitle {
    font-size: 22px;
    text-align: center;
  }

  .btn {
    margin-top: 40px;
    width: 110px;
    height: 36px;
    font-size: 16px;
  }

  .scroll {
    font-size: 12px;
    bottom: 40px;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .title {
    font-size: 34px;
  }

  .subTitle {
    font-size: 18px;
  }

  .btn {
    margin-top: 30px;
    width: 100px;
    height: 34px;
    font-size: 16px;
  }

  .scroll {
    font-size: 12px;
    bottom: 30px;
  }
}
</style>
