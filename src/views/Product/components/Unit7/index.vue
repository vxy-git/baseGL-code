<script setup>

</script>

<template>
<div class="mt-[202px] pb-[199px]">
  <div class="title">
    Smart Display
  </div>
  <div class="stitle text-center mt-[114px]">
    Upgrade your adventure
  </div>
  <div class="w-[calc(520px+15px+695px)] mx-auto mt-[60px]">
    <div class="justify-between flex">
      <div class="bg-[#D9D9D9] h-[440px] w-[520px] rounded-[20px] relative">
        <div class="tag absolute left-[21px] top-[25px]">
          3-Temperature Control
        </div>
        <img src="" alt="">
      </div>
      <div class="bg-[#D9D9D9] h-[440px] w-[695px] rounded-[20px] relative">
        <div class="tag absolute left-[21px] top-[25px]">
          Battery Life Monitor
        </div>
        <img src="" alt="">
      </div>
    </div>
    <div class="justify-between flex mt-[15px]">
      <div class="bg-[#D9D9D9] h-[440px] w-[695px] rounded-[20px] relative">
        <div class="tag absolute left-[21px] top-[25px]">
          Preheat Status Indication
        </div>
        <img src="" alt="">
      </div>
      <div class="bg-[#D9D9D9] h-[440px] w-[520px] rounded-[20px] relative">
        <div class="tag absolute left-[21px] top-[25px]">
          Activation Indication
        </div>
        <img src="" alt="">
      </div>

    </div>
    <div class="flex justify-between mt-[264px]">
      <div class="mt-[25px]">
        <div class="gtext">
          The Enhanced
        </div>
        <div class="stitle mt-[20px]">
          One-Button Control
        </div>
        <div class="label mt-[44px]">
          With just one button, you can easily turn on/off, pre-heat, and adjust temperature settings. Take full control of your experience and embark on your own unique adventure.Take full control of your experience with the one-button controls for pre-heating, temperature settings, and child safety lock.
        </div>
        <div class="flex gap-x-[50px] mt-[66px]">
          <div class="flex flex-col items-center w-[107px]">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">1 Tap</div>
            <div class="itemLabel mt-[4px]">Check temp</div>
          </div>
          <div class="flex flex-col items-center w-[107px]">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">2 Taps</div>
            <div class="itemLabel mt-[4px]">Warm up</div>
          </div>
          <div class="flex flex-col items-center w-[107px]">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">3 Taps</div>
            <div class="itemLabel mt-[4px]">Change temp</div>
          </div>
          <div class="flex flex-col items-center w-[107px]">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">5 Taps</div>
            <div class="itemLabel mt-[4px]">Turn on/off</div>
          </div>
        </div>
      </div>
      <img class="w-[450px] h-[540px] rounded-[20px] bg-[#D9D9D9]" src="" alt="">
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.title{
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px; /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stitle{
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.tag{
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #FFF;
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gtext{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.label{
  width: 727px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
}
.itemTitle{
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 125% */
}
.itemLabel{
  color: #F5F5F5;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  opacity: .8;
}
</style>