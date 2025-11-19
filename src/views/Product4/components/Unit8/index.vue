<script setup>

</script>

<template>
  <div class="bg-black pt-[381px]">
    <div class="w-[1227px] mx-auto flex justify-between">
      <div class="pt-[61px]">
        <div class="gtext">
          Taste Switcher
        </div>
        <div class="title1">
          Let’s live it up!
        </div>
        <div class="label">
          Tap once—screen and flavor sync in a flash. Sit back and<br/> soak up the visual-and-taste ride.
        </div>

      </div>
      <img src="@/assets/img/icon35.png" class="w-[600px] h-[360px] rounded-[20px]" alt="">
    </div>
    <!--    <img class="w-[900px] h-[409px] mx-auto mt-[64px]" src="@/assets/img/icon34.png" alt="">-->
  </div>
</template>

<style scoped lang="scss">
.title{
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 94px;
  background: linear-gradient(90deg, #00FFF5 0%, #839DFF 50%, #BF48FF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gtext{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title1{
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 18px;
}
.label{
  width: 594px;
  height: 120px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  @apply mt-[18px];
}
</style>