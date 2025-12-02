<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import unitImg from '@/assets/product2/unit2.png'
</script>

<template>
  <div class="c_1230 c_padding pt-[120px]">
    <div class="title">
      Relish the golden hours with the UNIVERSE Series.
      Savor the sweetness, dive into <span class="text-[#3ad3ff]">smoothness</span>
    </div>
    <MediaAsset
      :src="unitImg"
      type="image"
      class="logo mx-auto block mt-[63px] h-[1152px] c_1230 w-full object-contain"
      alt=""
      :lazy="false"
    />
  </div>
</template>

<style scoped lang="scss">
.title {
  margin: auto;
  max-width: 1000px;
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;
}

@media screen and (max-width: 1024px) {
  .logo {
    height: 800px;
  }
}
</style>
