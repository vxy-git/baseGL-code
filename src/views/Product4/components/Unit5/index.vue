<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product4Unit5Data  } from '@/data/product4/product4-unit5.js'
import { useUnitData } from '@/composables/useUnitData';

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = useUnitData(props, product4Unit5Data);
</script>

<template>
  <div class="pt-[294px] c_1230 c_padding">
    <div class="title">
      {{ unitData.content.title }}
    </div>
    <div class="w-[900px] h-[409px] mx-auto mt-[64px] max-w-full">
      <MediaAsset type="video" :src="unitData.videos.dualGemcoCore" :autoplay="false" :muted="true" :loop="true"
        :controls="false" :view-play="true" class="w-full h-full object-cover rounded-[20px]" />
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
  line-height: normal;
  background: linear-gradient(90deg, #10814A 0%, #1CE785 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>