<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product4Unit9Data } from '@/data/product4/product4-unit9.js'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, product4Unit9Data)
</script>

<template>
  <div class="c_padding c_1230">
    <div class="mx-auto flex relative justify-center w-full">
      <MediaAsset
        :src="unitData.icons.icon38"
        type="image"
        class="absolute left-0 size-[34px] -top-[4px] animate-pulse"
        alt=""
        :lazy="false"
      />
      <MediaAsset
        :src="unitData.icons.icon38"
        type="image"
        class="absolute left-[35px] size-[22px] -top-[22px] animate-pulse"
        alt=""
        :lazy="false"
      />
      <div class="title text-nowrap whitespace-break-spaces">{{ unitData.content.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.title {
  width: 100%;
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  background: linear-gradient(89deg, #fb7d4e 2.34%, #e25667 49.42%, #6a87d7 96.5%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.4px;
}

@media screen and (max-width: 1100px) {
  .title {
    font-size: 60px;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .title {
    font-size: 40px;
  }
}
</style>
