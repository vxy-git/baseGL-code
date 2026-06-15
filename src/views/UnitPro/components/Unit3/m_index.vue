<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit3Data } from '@/data/unit_pro/unit3'
import { computed } from 'vue'
import { useUnitData } from '@/composables/useUnitData'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, unit3Data)

const iconDevice = computed(() => unitData.value?.icons?.device ?? unit3Data.icons.device)
const m1 = '/api/uploads/file/default/assets/unit_pro/unit3/m1.jpg'
const m2 = '/api/uploads/file/default/assets/unit_pro/unit3/m2.jpg'
const m3 = '/api/uploads/file/default/assets/unit_pro/unit3/m3.jpg'
</script>

<template>
  <section class="sequence-wrap relative">
    <div class="size-full flex items-start justify-center">
      <div class="text-layer">
        <div class="text-block c_padding">
          <div class="title whitespace-break-spaces">{{ unitData.textBlocks.tb1.title }}</div>
          <MediaAsset :src="m1" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">{{ unitData.textBlocks.tb2.smallTitle }}</div>
          <div class="wTitle">{{ unitData.textBlocks.tb2.wTitle }}</div>
          <div class="text">{{ unitData.textBlocks.tb2.text }}</div>
          <MediaAsset :src="m2" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">{{ unitData.textBlocks.tb3.smallTitle }}</div>
          <div class="wTitle whitespace-break-spaces">{{ unitData.textBlocks.tb3.wTitle }}</div>
          <div class="text">{{ unitData.textBlocks.tb3.text }}</div>
          <MediaAsset :src="m3" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">
            {{ unitData.textBlocks.tb4.smallTitle }}
          </div>
          <div class="wTitle whitespace-break-spaces">
            {{ unitData.textBlocks.tb4.wTitle }}
          </div>
          <div class="text !mt-[28px]">
            {{ unitData.textBlocks.tb4.text }}
          </div>
          <div class="flex justify-center gap-x-[150px] mt-[68px]">
            <div
              v-for="stat in unitData.textBlocks.tb4.stats"
              :key="stat.label"
              class="flex flex-col items-center justify-center"
            >
              <div class="text1 h-[40px]">
                {{ stat.value }}
              </div>
              <div class="text2">
                {{ stat.label }}
              </div>
            </div>
          </div>
          <MediaAsset
            :src="iconDevice"
            type="image"
            class="mx-auto max-h-[600px]"
            alt=""
            :lazy="false"
          />
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
  background: linear-gradient(180deg, #1ce785 0%, #a8ffd5 50%, #1ce785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.smallTitle {
  padding-right: 10px;
  color: #1ce785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.wTitle {
  color: #fff;
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
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
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
</style>
