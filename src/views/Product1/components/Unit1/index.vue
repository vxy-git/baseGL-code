<script setup>

</script>

<template>
  <div class="unit1 h-[880px] mt-[100px] relative">
    <img class="size-full object-cover block" src="@/assets/img/icon13.jpg" alt="">
    <div class="absolute h-full w-full left-0 top-0 flex flex-col justify-center">
      <div class="c_1230 c_padding w-full m_flex_col">
      <div class="scroll text-center absolute w-full bottom-[67px] left-0">Scroll</div>
      <div class="title">
        UNIT PRO
      </div>
      <div class="subTitle translate-y-[-2px]">
        From lab to award,<br/>
        100% for Rosin we’ve perfected
      </div>
        <div class="btn cursor-pointer">
          1mL/2mL
        </div>
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
  margin-top: 78px;
  //transform: translateY(-4px);
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

@media screen and (max-width: 1024px) {
  .unit1{
    height: 600px !important;
    margin-top: 60px !important;
  }
  .title{
    font-size: 40px;
    text-align: center;
  }
  .subTitle{
    font-size: 22px;
    text-align: center;
  }
  .btn{
    margin-top: 40px;
    width: 110px;
    height: 36px;
    font-size: 16px;
  }
  .scroll{
    font-size: 12px;
    bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .unit1{
    height: 520px !important;
    margin-top: 40px !important;
  }
  .title{
    font-size: 34px;
  }
  .subTitle{
    font-size: 18px;
  }
  .btn{
    margin-top: 30px;
    width: 100px;
    height: 34px;
    font-size: 16px;
  }
  .scroll{
    font-size: 12px;
    bottom: 30px;
  }
}
</style>