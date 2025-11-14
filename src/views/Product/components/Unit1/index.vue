<script setup>

</script>

<template>
  <div class="h-[880px] mt-[100px] relative">
    <img class="size-full object-cover" src="@/assets/img/icon13.png" alt="">
    <div class="absolute h-full w-[1300px] left-[calc((100vw-1300px)/2)] top-0 flex flex-col justify-center">
      <div class="scroll text-center absolute w-full bottom-[67px] left-0">Scroll</div>
    <div class="title">
      UNIT PRO
    </div>
    <div class="subTitle">
      From lab to award,<br/>
      100% for Rosin we’ve perfected
    </div>
      <div class="btn cursor-pointer">
        1mL/2mL
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  color: #FFF;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.subTitle{
  color: #D9D9D9;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
}
.btn{
  margin-top: 80px;
  width: 120px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.scroll{
  color: #FFF;
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
}
</style>