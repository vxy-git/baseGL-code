<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import icon33 from '@/assets/img/icon33.png'
</script>

<template>
<div class="pb-[208px] c_1230 c_padding">
  <div class="title -mt-[8px]">
    Twice the performance,<br/>
    Triple the flavors.
  </div>
  <div class="label mt-[34px]">
    Get ready for DUKES to spice up your taste buds. It combines both flavors for a new experience, allowing users to switch between<br/> tastes or enjoy a mix of both.
  </div>
  <MediaAsset
    class="w-[1020px] mx-auto mt-[47px] h-[580px] block object-cover rounded-[20px]"
    type="image"
    :src="icon33"
    alt=""
    :lazy="false"
  />
</div>
</template>

<style scoped lang="scss">
.title{
  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}
.label{
  color: #444;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
}
</style>
