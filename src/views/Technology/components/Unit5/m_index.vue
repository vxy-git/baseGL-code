<script setup>
import { computed } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { unit5Data } from '@/data/technology/unit5'
import { useCmsNavStore } from '@/stores/cmsNav'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const cmsNavStore = useCmsNavStore()
const cmsData = computed(() => {
  const techNav = cmsNavStore.getNavByName('Technology')
  return techNav?.moduleList?.unit5?.data || null
})

const unitData = useUnitData(props, unit5Data, { cmsData })
</script>

<template>
  <div class="relative max-w-[1702px] mt-[100px] mx-auto c_padding">
    <div class="mediaBox shrink-0">
      <MediaAsset
        :src="unitData.media.leftVideo"
        type="video"
        :autoplay="false"
        :muted="true"
        :loop="true"
        :controls="false"
        :view-play="true"
        class="size-full"
        playsinline
        alt=""
      />
    </div>
    <div class="content-wrapper will-change-transform h-max">
      <div class="content1 flex flex-col items-center">
        <div class="title1">
          {{ unitData.sections.section1.title1 }}
        </div>

        <div class="title2 mt-[23px] tracking-[0.3px]">
          {{ unitData.sections.section1.title2 }}
        </div>

        <div class="title3 mt-[23px] whitespace-break-spaces">
          {{ unitData.sections.section1.title3 }}
        </div>
        <MediaAsset
          :src="unitData.media.rightVideo1"
          type="video"
          :autoplay="false"
          :muted="true"
          :loop="true"
          :controls="false"
          :view-play="true"
          class="w-[750px] mt-[66px] max-w-full"
          playsinline
          alt=""
        />
      </div>
      <div class="content2 mt-[60px] flex flex-col items-center">
        <div class="title1">
          {{ unitData.sections.section2.title1 }}
        </div>

        <div class="title2 mt-[23px]">
          {{ unitData.sections.section2.title2 }}
        </div>

        <div class="title3 mt-[25px]">
          {{ unitData.sections.section2.title3 }}
        </div>
        <MediaAsset
          :src="unitData.media.rightVideo2"
          type="video"
          :autoplay="false"
          :muted="true"
          :loop="false"
          :controls="false"
          :view-play="true"
          class="w-[750px] mt-[66px] max-w-full"
          playsinline
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content1 {
  width: 100%;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1ce785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 418px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.1; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1ce785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }

  .text1 {
    max-width: 100%;
    color: #1ce785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }

  .text2 {
    max-width: 100%;
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
    margin-top: 0px;
  }
}

.content2 {
  width: 100%;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1ce785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 584px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.14; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1ce785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }

  .text1 {
    max-width: 100%;
    color: #1ce785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
    max-width: 100%;
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
    margin-top: 5px;
  }
}
</style>
