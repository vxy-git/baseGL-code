<script setup>

</script>

<template>
  <div class="bg-black -mt-[5px] pb-[121px]">

    <div class=" w-[1300px] mx-auto pt-[114px]">
      <div class="title2">
        More Products
      </div>

      <div class="flex cardBox gap-x-[27px] mt-[45px] relative">
        <img class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2" src="@/assets/img/icon4.png" alt="" @click="slidePrev">
        <img class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2" src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
        <div class="card pt-[63px]" v-for="item in 4">
          <img class="w-[185px] h-[165px] mx-auto" src="@/assets/img/icon25.png" alt="">
          <div class="cardTitle pl-[20px] mt-[46px]">
            UNIT
          </div>
          <div class="cardLabel pl-[20px]">
            UNICORE™ tech & large display
          </div>
          <div class="btn ml-[20px] mt-[17px]">
            View More
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.cardBox{
  .card{
    width: 305px;
    height: 440px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #23242A;
    .cardTitle{
      color: #FFF;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
    }
    .cardLabel{
      color: #F5F5F5;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
    .btn{
      border-radius: 50px;
      background: #1CE785;
      width: 130px;
      height: 40px;
      flex-shrink: 0;
      color: #000;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.title2{
  color: #1CE785;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  line-height: 80px; /* 100% */
  letter-spacing: -5px;
}

</style>