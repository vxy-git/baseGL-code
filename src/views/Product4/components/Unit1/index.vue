<script setup>

</script>

<template>
<div class="unit1 h-[880px] mt-[110px] bg-[url(@/assets/img/icon27.png)]">
  <div class="title">
    DUKES
  </div>
  <div class="label mt-[16px]">
    The best of both worlds, every puff with more hits.
  </div>

  <div class="flex justify-center mt-[89px] gap-x-[265px]">
    <div class="flex flex-col items-center">
      <img class="w-[192px] h-[380px]" src="@/assets/img/icon28.png" alt="">
      <div class="btn mt-[35px]">
        0.5+0.5mL
      </div>
    </div>
    <div class="flex flex-col items-center">
      <img class="w-[192px] h-[380px]" src="@/assets/img/icon29.png" alt="">
      <div class="btn mt-[35px]">
        1.0+1.0mL
      </div>
    </div>
    <div class="flex flex-col items-center">
      <img class="w-[192px] h-[380px]" src="@/assets/img/icon30.png" alt="">
      <div class="btn mt-[35px]">
        1.5+1.5mL
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.unit1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: calc(880px / 1920px * 100vw);
  background-size: cover;
  padding-bottom: 8%;
}

.title{
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 59px;
}
.label{
  color: #D9D9D9;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
.btn{
  width: 120px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
  color: #222;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>