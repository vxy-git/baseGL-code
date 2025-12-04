<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
const either_L = 'https://img.cloudcode.ink/assets/product2/either-L.mp4'
const either_R = 'https://img.cloudcode.ink/assets/product2/either-R.mp4'
</script>

<template>
  <div class="mt-[158px] c_1230 c_padding">
    <div class="title1 text-center capitalize">
      Take Your Pick
    </div>
    <div class="title2 mt-[19px]">
      Either one's a winner
    </div>
    <div class="flex gap-[20px] justify-center mt-[54px] m_flex_col">
      <div class="w-full h-[440px] bg-black rounded-[20px]">
        <MediaAsset
          class="w-full h-full object-cover"
          type="video"
          :src="either_L"
          :autoplay="false"
          :muted="true"
          :loop="true"
          :controls="false"
          :view-play="true"
        />
      </div>
      <div class="w-full h-[440px] bg-black rounded-[20px]">
        <MediaAsset
          class="w-full h-full object-cover"
          type="video"
          :src="either_R"
          :autoplay="false"
          :muted="true"
          :loop="true"
          :controls="false"
          :view-play="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img {
  width: 1400px;
  height: 656px;
  flex-shrink: 0;
  aspect-ratio: 175/82;
}

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
</style>