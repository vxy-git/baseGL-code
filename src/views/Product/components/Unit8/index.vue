<script setup>

</script>

<template>
  <div class="pt-[110px] bg-white pb-[148px]">
    <div class="label text-center">
      Design your own look
    </div>
    <div class="title text-center mt-[20px]">
      Realize your unique design with CALEAF TECH
    </div>
    <div class="flex justify-center gap-x-[20px] mt-[58px] relative">
      <img class="absolute cursor-pointer size-[50px] z-10 left-[calc((100vw-1300px)/2+150px)] top-1/2 -translate-y-1/2" src="@/assets/img/icon4.png" alt="" @click="slidePrev">
      <img class="absolute cursor-pointer size-[50px] z-10 right-[calc((100vw-1300px)/2+150px)] top-1/2 -translate-y-1/2" src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover opacity-40" alt="">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover" alt="">
      <img src="@/assets/img/icon22.png" class="w-[800px] h-[500px] flex-shrink-0 object-cover opacity-40" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.label{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title{
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>