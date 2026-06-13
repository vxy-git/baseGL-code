<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit3Data } from '@/data/home/unit3'
import { useRouter } from 'vue-router'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit3Data)

const router = useRouter()

const goTech = () => {
  router.push({ name: unitData.value.routeName })
}
</script>

<template>
  <div>
    <div class="c_1300 w-full mx-auto mt-[75px] h-[480px] c_padding">
      <div class="relative size-full">
        <div class="absolute size-full left-0 top-0 z-10">
          <div class="w-[374px] pt-[128.5px] ml-[118px]">
            <div class="tag text-center">{{ unitData.tagText }}</div>
            <div class="title mt-[11px] whitespace-break-spaces">
              {{ unitData.title }}
            </div>
            <div class="subTitle mt-[15px] whitespace-break-spaces">
              {{ unitData.subtitle }}
            </div>
            <div class="btn mx-auto mt-[38px] cursor-pointer" @click="goTech">
              {{ unitData.buttonText }}
            </div>
          </div>
        </div>
        <MediaAsset
          class="size-full object-contain object-right px-[10%] rounded-[20px] overflow-hidden logo bg-[#f1f1f1]"
          type="image"
          :src="unitData.bannerImage"
          alt=""
          :lazy="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
  color: #1ce785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
}
.subTitle {
  color: #555;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}
.btn {
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1ce785;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
