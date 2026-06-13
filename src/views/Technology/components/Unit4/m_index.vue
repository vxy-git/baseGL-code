<script setup>
import { computed } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { technologyUnit4Data } from '@/data/technology/technology-unit4'
import { useCmsNavStore } from '@/stores/cmsNav'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
})

const cmsNavStore = useCmsNavStore()
const cmsData = computed(() => {
  const techNav = cmsNavStore.getNavByName('Technology')
  return techNav?.moduleList?.unit4?.data || null
})

const unitData = useUnitData(props, technologyUnit4Data, { cmsData })
</script>

<template>
  <div class="relative mt-[100px] w-full bg-[#111111] overflow-hidden c_padding">
    <MediaAsset type="video" :src="unitData.media.bgVideo" :autoplay="false" :muted="true" :loop="false"
      :controls="false" :view-play="true" preload="auto" playsinline alt="" class="w-full object-cover" />

    <div class="size-full overflow-hidden">
      <div class="relative z-[2] h-full w-full pt-[45px]">
        <div class="shrink-0 w-full">
          <div class="w-[600px] max-w-[90vw]">
            <div class="flex flex-col">
              <div class="text1 flex items-center">
                <MediaAsset class="size-[28px] mr-[11px]" type="image"
                  :src="unitData.icons.icon" alt="" />
                <span>{{ unitData.sections.left.textLabel }}</span>
              </div>
            </div>

            <div class="title2 mt-[8px] whitespace-break-spaces">
              {{ unitData.sections.left.title }}
            </div>

            <div class="title3 mt-[32px]">
              {{ unitData.sections.left.description }}
            </div>
          </div>
          <MediaAsset type="image" :src="unitData.media.image1" alt="" class="w-full object-contain mt-[20px]" />
        </div>
        <div class="w-full shrink-0 mt-[60px]">
          <div class="flex flex-col">
            <div class="text1 flex items-center">
              <MediaAsset class="size-[28px] mr-[11px]" type="image"
                :src="unitData.icons.icon" alt="" />
              {{ unitData.sections.right.textLabel }}
            </div>
          </div>

          <div class="title2 mt-[8px] ">
            {{ unitData.sections.right.title }}
          </div>

          <div class="title3 mt-[32px]">
            {{ unitData.sections.right.description }}
          </div>
        </div>
        <div class="w-full mt-[60px]">
          <MediaAsset type="video" :src="unitData.media.video2" :autoplay="false" :muted="true" :loop="true"
            :controls="false" :view-play="true" preload="auto" playsinline alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.title1 {
  max-width: 100%;
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}


.text1 {
  max-width: 100%;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}

.title2 {
  max-width: 100%;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.14; // 缩短行间距
  letter-spacing: .8px;
  font-weight: 700;
}

.title3 {
  max-width: 100%;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.percentage {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
}

.text2 {
  max-width: 100%;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  margin-top: 5px;
}

@media screen and (max-width: 1600px) {
  .m_fit {
    width: 100px;
  }
}

@media screen and (max-width: 1400px) {
  .m_fit {
    width: 200px;
  }
}

@media screen and (max-width: $breakpoint-medium) {
  .m_fit {
    width: 300px;
  }
}

@media screen and (max-width: 1000px) {
  .m_fit {
    width: 400px;
  }
}


@media screen and (max-width: 800px) {
  .m_fit {
    width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .m_fit {
    width: 600px;
  }
}
</style>
