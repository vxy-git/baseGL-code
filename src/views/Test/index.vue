<template>
  <FrameSequence class="bg-black" :frames="18" tarURL="/product1.tar" :imageURL="(i) => `product1/frame${i+1}.png`"
    :useScroll="true" scrollHeight="200vh">
    <div class="title">
      UNICORE<br />
      POWERED
    </div>
    <div class="w-full relative">
      <div class="smallTitle pl-[8px]">
        Award-Winning
      </div>
      <div class="wTitle">
        Simply the best
      </div>
      <div class="text !mt-[34px]">
        In June 2025, UNIT secured 1st place in the Live Resin vape category at the 2025 California State Fair Cannabis
        Awards. This victory is a testament to our product's excellence. With this market validation, we are not just
        confident, but eager to bring this golden standard to more brands using Resin and Rosin.
      </div>
    </div>
    <div class="w-full relative">
      <div class="smallTitle pl-[8px]">
        A Significant Breakthrough
      </div>
      <div class="wTitle">
        U-shape design<br />
        Pioneering industry
      </div>
      <div class="text !mt-[24px]">
        Our patented U-shape ceramic design is the result of extensive testing and validation of various structures. It
        is the optimal structure for the vast majority of Resin and Rosin oils on the market.
      </div>
    </div>
  </FrameSequence>
</template>

<script setup>
import FrameSequence from "@/components/FrameSequence.vue";
</script>

<style scoped>
/* 1 */
.title {
  margin-top: 133px;
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



/* 2 */
.smallTitle {
  margin-top: 600px;
  padding-right: 10px;
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.wTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}

.text {
  max-width: 1200px;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}
</style>