<script setup>
import { computed } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { unit2Data } from '@/data/technology/unit2'
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
  return techNav?.moduleList?.unit2?.data || null
})

const unitData = useUnitData(props, unit2Data, { cmsData })
</script>

<template>
  <div class="unit2 relative w-[1560px] max-w-full mx-auto c_padding pb-[65px]">
    <div class="shrink-0 w-full m_video">
      <MediaAsset
        type="video"
        :src="unitData.media.leftVideo"
        :autoplay="false"
        :muted="true"
        :loop="true"
        :controls="false"
        :view-play="true"
        playsinline
        class="mediaBox size-full"
      />
    </div>
    <div class="content-wrapper mt-[55px] will-change-transform h-max">
      <div class="content1 flex flex-col items-center">
        <div class="title1">
          {{ unitData.sections.section1.title1 }}
        </div>

        <div class="title2 mt-[20px] -ml-[5px] tracking-[0.2px] whitespace-break-spaces">
          {{ unitData.sections.section1.title2 }}
        </div>

        <div class="title3 mt-[28px]">
          {{ unitData.sections.section1.title3 }}
        </div>

        <div class="flex pl-[3px] justify-center gap-x-[152px] mt-[36px]">
          <div
            v-for="stat in unitData.sections.section1.stats"
            :key="stat.label"
            class="flex flex-col items-center justify-center"
          >
            <div class="text1">
              {{ stat.percentage }}
            </div>
            <div class="text2">
              {{ stat.label }}
            </div>
          </div>
        </div>
        <MediaAsset
          class="w-[763px] object-contain"
          type="image"
          :src="unitData.media.rightImage1"
          alt=""
        />
      </div>
      <div class="content2 mt-[60px] flex flex-col items-center">
        <div class="title1">
          {{ unitData.sections.section2.title1 }}
        </div>

        <div class="title2 mt-[20px] whitespace-break-spaces">
          {{ unitData.sections.section2.title2 }}
        </div>

        <div class="title3 mt-[25px]">
          {{ unitData.sections.section2.title3 }}
        </div>
        <MediaAsset
          :src="unitData.media.rightVideo"
          type="video"
          class="w-[595px] mt-[66px]"
          muted
          :loop="true"
          :controls="false"
          :view-play="true"
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

.m_video {
  height: 400px;
  border-top: 0.2667vw solid hsla(0, 0%, 100%, 0.15);
  border-bottom: 0.2667vw solid hsla(0, 0%, 100%, 0.15);
}

.content1 {
  width: 100%;
  flex: 1;

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
    color: #1ce785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
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
    color: #1ce785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
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
