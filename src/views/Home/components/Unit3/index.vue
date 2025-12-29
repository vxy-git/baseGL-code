<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { BANNER_IMAGE, TAG_TEXT, TITLE, SUBTITLE, BUTTON_TEXT, ROUTE_NAME } from '@/data/home-unit3'
import { useRouter } from 'vue-router'

const router = useRouter()

const goTech = () => {
  router.push({ name: ROUTE_NAME })
}
</script>

<template>
<div>
  <div class="c_1300 w-full mx-auto mt-[75px] h-[480px] c_padding">
    <div class="relative size-full">
      <div class="absolute size-full left-0 top-0 z-10">
        <div class="w-[374px] pt-[128.5px] ml-[118px]">
          <div class="tag text-center">{{ TAG_TEXT }}</div>
          <div class="title mt-[11px]">
            {{ TITLE }}
          </div>
          <div class="subTitle mt-[15px]">
            {{ SUBTITLE }}
          </div>
          <div class="btn mx-auto mt-[38px] cursor-pointer" @click="goTech">
            {{ BUTTON_TEXT }}
          </div>
        </div>
      </div>
      <MediaAsset
        class="size-full object-contain object-right px-[10%] rounded-[20px] overflow-hidden logo bg-[#f1f1f1]"
        type="image"
        :src="BANNER_IMAGE"
        alt=""
        :lazy="false"
      />
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.tag{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title{
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
}
.subTitle{
  color: #555;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
}
.btn{
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
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