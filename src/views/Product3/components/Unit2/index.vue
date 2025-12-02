<script setup>

</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full">
      <img class="w-full" src="@/assets/product3/unit2-1.jpg" alt="">
      <div class="absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1">
          UNICORN
        </div>
        <div class="title2 mt-[19.55px]">
          Super thin. Strikingly light.<br />
          Shockingly strong.
        </div>
      </div>
    </div>
    <div class="relative w-full">
      <img class="w-full" src="@/assets/product3/unit2-2.jpg" alt="">
      <div class="absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <div class="title1 !text-black">
          UNICORN PRO
        </div>
        <div class="title2 !text-white mt-[19px]">
          Tiny powerhouse&nbsp;<br />
          Exceptional pro capability&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title1 {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {

  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>