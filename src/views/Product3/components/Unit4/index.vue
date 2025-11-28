<script setup>
import unit4Bg from '@/assets/product3/unit4.jpg'
</script>

<template>
  <div class="unit4 h-[799px]" :style="{ backgroundImage: `url(${unit4Bg})` }">
    <div class="c_1230 c_padding mx-auto pt-[248px]">
      <div class="title1  ml-[2px]">
        UNICORN
      </div>
      <div class="title2 mt-[19.55px] w-max ml-[2px]">
        Nothing “basic” about it.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit4 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.title1 {
  color: #FFF;
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