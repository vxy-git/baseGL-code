<script setup>

</script>

<template>
<div class="h-[975px] bg bg-[url(@/assets/img/icon48.png)] bg-[length:100%_100%] relative">
  <div class="absolute bottom-[105px] w-full">
    <div class="flex justify-center gap-x-[177px] ml-[20px]">
      <div class="">
        <img class="h-[459px] translate-x-[20px]" src="@/assets/img/icon59.png" alt="">
        <div class="title mt-[15px] translate-y-[4px] -ml-[26px]">
          UNIVERSE
        </div>
        <div class="btn mt-[18px] translate-y-[4px] ml-[104px]">
          1mL/2mL
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="h-[473px] translate-x-[15px]" src="@/assets/img/icon60.png" alt="">
        <div class="title text-nowrap -translate-x-[3px] translate-y-[4px]">
          UNIVERSE PRO
        </div>
        <div class="btn mt-[19px] translate-y-[4px] -ml-[5px]">
          0.5mL / 1mL
        </div>
      </div>
    </div>
    <div class="label mt-[29px] translate-y-[4px]">
      Unicore powered, the way to infinite.
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