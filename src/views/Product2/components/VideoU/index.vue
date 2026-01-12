<script setup>
import { computed } from 'vue';
import MediaAsset from '@/components/MediaAsset.vue'
import { product2VideoUData } from '@/data/product2/product2-videou.js'

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = computed(() => {
  if (props.data) {
    return { ...product2VideoUData, ...props.data };
  }
  return product2VideoUData;
});
</script>

<template>
  <div class="videoU w-full relative h-[1210px] flex flex-col justify-end">
    <MediaAsset
      type="video"
      :src="unitData.media.videoSrc"
      :autoplay="false"
      :muted="true"
      :controls="false"
      :loop="true"
      :view-play="true"
      class="w-full object-contain"
    />

    <div class="w-full c_padding absolute top-0">
      <div class="mt-[117px] w-full c_1230">
        <div class="title1 text-center capitalize">
          {{ unitData.content.title1 }}
        </div>
        <div class="title2 mt-[19px]">
          {{ unitData.content.title2 }}
        </div>
        <div class="title3 mt-[19px]">
          {{ unitData.content.title3 }}
        </div>
        <div class="flex gap-x-[150px] valBox justify-center mt-[82px] max-w-[95%]">
          <div class="flex flex-col items-center">
            <div class="label h-[39.805px]">
              {{ unitData.values[0].label }}
            </div>
            <div class="value">
              {{ unitData.values[0].text }}
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="label h-[39.805px] flex">
              {{ unitData.values[1].label }}
              <MediaAsset
                class="h-[39.805px] -ml-[10px] translate-x-[8px]"
                type="image"
                :src="unitData.media.arrowIcon"
                alt=""
                :lazy="false"
              />
            </div>
            <div class="value">
              {{ unitData.values[1].text }}
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="label h-[39.805px] flex">
              {{ unitData.values[2].label }}
              <MediaAsset
                class="h-[39.805px] -ml-[13px] translate-x-[12px]"
                type="image"
                :src="unitData.media.arrowIcon"
                alt=""
                :lazy="false"
              />
            </div>
            <div class="value">
              {{ unitData.values[2].text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  /* 150% */
}

.valBox {
  .label {
    color: #3ad3ff;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .value {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }
}

@media screen and (max-width: 1024px) {
  .videoU {
    height: 900px;
  }
}
</style>