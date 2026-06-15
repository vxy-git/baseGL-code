<script setup>
import { useUnitData } from '@/composables/useUnitData'
import MediaAsset from '@/components/MediaAsset.vue'
import { unit8Data } from '@/data/universe_series/unit8'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit8Data)
</script>

<template>
  <div class="pt-[153px] pb-[45px]">
    <div class="title c_padding capitalize">
      {{ unitData.labelText }}
    </div>
    <div class="title1 c_padding">
      {{ unitData.mainTitle }}
    </div>
    <div class="mt-[54px] overflow-hidden m_mt_0">
      <div class="unit-stage">
        <div
          class="unitbox max-w-[1500px] mx-auto w-full flex flex-col justify-center items-center"
        >
          <div class="w-[1500px] h-[300px]">
            <div class="size-full overflow-hidden flex justify-end">
              <div class="imgbox1 w-max flex gap-x-[30px] relative">
                <div class="mask1 absolute left-[-1px] top-1/2 translate-y-[-50%] rotate-180"></div>
                <template v-for="i in 2" :key="'top-' + i">
                  <div
                    v-for="(img, idx) in unitData.designImages.top"
                    :key="'top-' + i + '-' + idx"
                    class="h-full w-[480px]"
                    :class="{ 'rounded-[20px]': idx !== 0 }"
                  >
                    <MediaAsset
                      :src="img"
                      type="image"
                      class="w-full h-full object-cover rounded-[20px] overflow-hidden"
                      alt=""
                      :lazy="false"
                    />
                  </div>
                </template>
                <div class="mask1 absolute right-[-1px] top-1/2 translate-y-[-50%]"></div>
              </div>
            </div>
          </div>
          <div class="w-[1500px] h-[300px] flex relative gap-x-[30px] mt-[20px]">
            <div class="size-full overflow-hidden">
              <div class="imgbox2 w-max flex gap-x-[30px] relative">
                <div class="mask1 absolute left-[-1px] top-[-1px] rotate-180"></div>
                <template v-for="i in 2" :key="'bottom-' + i">
                  <div
                    v-for="(img, idx) in unitData.designImages.bottom"
                    :key="'bottom-' + i + '-' + idx"
                    class="h-full w-[480px] rounded-[20px]"
                  >
                    <MediaAsset
                      :src="img"
                      type="image"
                      class="w-full h-full object-cover rounded-[20px] overflow-hidden"
                      alt=""
                      :lazy="false"
                    />
                  </div>
                </template>
                <div class="mask1 absolute right-[-1px] top-[-1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #3ad3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title1 {
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 19.55px;
}

.mask1 {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000 46.49%);
  width: 185px;
  height: 120%;
  flex-shrink: 0;
}

.unit-stage {
  position: relative;
  // min-height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unitbox {
  transform: scale(0.7);
}

.imgbox1 {
  // transform: translateX(-50%);
  will-change: transform;
}

.imgbox2 {
  transform: translateX(0%);
  will-change: transform;
}
</style>
