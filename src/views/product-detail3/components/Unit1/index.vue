<script setup>

</script>

<template>
<div class="h-[975px] bg bg-[url(@/assets/img/icon48.png)] bg-[length:100%_100%] relative">
  <img class="absolute w-[1280px] left-[90px] top-[158px]" src="@/assets/img/icon49.png" alt="">
  <img class="absolute w-[1730px] left-[280px] top-[75px] scale-90" src="@/assets/img/icon50.png" alt="">
  <div class="absolute top-[722px] w-full">
    <div class="flex justify-center gap-x-[409px] ml-[20px]">
      <div class="w-[120px]">
        <div class="title">
          UNICORN
        </div>
        <div class="btn mt-[18px]">
          0.5mL / 1mL
        </div>
      </div>
      <div class="w-[120px] flex flex-col items-center">
        <div class="title text-nowrap">
          UNICORN PRO
        </div>
        <div class="btn mt-[18px]">
          0.5mL / 1mL
        </div>
      </div>
    </div>
    <div class="label mt-[29px]">
      Unicore powered, unlock the magic.
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.bg{
  background-position-y: 30px;
}
.title{
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.btn{
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 120px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
  display: flex;
  align-items: center;
  justify-content: center;
}
.label{
  color: #D9D9D9;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>