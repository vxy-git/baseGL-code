<script setup>
const deviceSpecs = [
  {
    label: 'Dimension(mm)',
    value: '71.0H*37.5W*13.0D'
  },
  {
    label: 'Tank Volume',
    value: '1mL / 2mL'
  },
  {
    label: 'Battery Capacity',
    value: '280mAh'
  },
  {
    label: 'Resistance',
    value: '1.8Ω'
  },
  {
    label: 'Voltage',
    value: '1.8V - 2.0V - 2.2V'
  },
  {
    label: 'Housing Material',
    value: 'Plastic'
  },
  {
    label: 'Ceramic Core',
    value: 'Unicore'
  },
  {
    label: 'Charging',
    value: 'Type-C'
  },
  {
    label: 'Activation',
    value: 'Button & Inhale Activated'
  }
]

</script>

<template>
<div class="pt-[142px] pb-[140px]">
  <div class="title text-center">
    SPECS
  </div>
  <div class="flex w-[1300px] mx-auto pl-[35px]" >
    <div class="w-[683px] flex-shrink-0 pt-[66px]">
      <div v-for="(item, index) in deviceSpecs" :key="index" class="flex border-b border-white/20">
        <div class="tableText w-[370px]">{{ item.label }}</div>
        <div class="tableText">{{ item.value }}</div>
      </div>

    </div>
    <img src="@/assets/img/icon24.png" class="h-[666px] mt-[30px] -ml-[15px]" alt="">
  </div>
  <div class=" w-[1300px] mx-auto mt-[132px]">
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
        <div class="cardLabel pl-[20px] mt-[2px]">
          UNICORE™ tech & large display
        </div>
        <div class="btn ml-[20px] mt-[18px]">
          View More
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped lang="scss">
.title{
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.tableText{
  color: #D9D9D9;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 70px;
}
.title2{
  color: #1CE785;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  line-height: 80px; /* 100% */
  letter-spacing: -4.8px;
}


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
</style>