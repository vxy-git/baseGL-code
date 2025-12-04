<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
const l1 = '/assets/technology/t1/l1.mp4'
const r1 = '/assets/technology/t1/r1.jpg'
const r2 = '/assets/technology/t1/r2.mp4'
</script>

<template>
  <div class="unit2 relative w-[1560px] max-w-full mx-auto c_padding pb-[65px]">
    <div class="shrink-0 w-full m_video">
      <MediaAsset type="video" :src="l1" :autoplay="false" :muted="true" :loop="true"
        :controls="false" :view-play="true" playsinline class="mediaBox size-full" />
    </div>
    <div
      class="content-wrapper mt-[55px] will-change-transform h-max">
      <div class="content1 flex flex-col items-center">
        <div class="title1">
          100% Rosin-Ready
        </div>

        <div class="title2 mt-[20px] -ml-[5px] tracking-[0.2px]">
          Savor the most natural
          and rich flavors
        </div>

        <div class="title3 mt-[28px]">
          We always strive to be pioneers in the industry.
          Our patented U-shape ceramic design is the result of extensive testing and validation of various
          structures.
          It is the optimal structure for the vast majority of Resin and Rosin oils on the market.
          It is 30% thinner than ordinary ceramics while maintaining the strength, which means fewer terpene
          molecules
          are filtered out, and the rich, natural flavors are preserved.
        </div>

        <div class="flex pl-[3px] justify-center gap-x-[152px] mt-[36px]">
          <div class="flex flex-col items-center justify-center ">
            <div class="text1">
              30%
            </div>
            <div class="text2">
              Thinner in Structure
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text1 flex">
              45%
            </div>
            <div class="text2">
              Flavor Retention
            </div>
          </div>
        </div>
        <MediaAsset class="w-[763px] object-contain" type="image" :src="r1" alt="" />
      </div>
      <div class="content2 mt-[60px] flex flex-col items-center">
        <div class="title1">
          We Fixed It First
        </div>

        <div class="title2 mt-[20px]">
          The most effective <br>
          anti-clogging solution ever built.
        </div>

        <div class="title3 mt-[25px]">
          Most customers have reported bubble issues to us with various devices from different suppliers during oil filling. Our U-shape ceramic design solves this problem perfectly. No more burnt taste caused by clogged bubbles. 
        </div>
        <MediaAsset :src="r2" type="video" class="w-[595px] mt-[66px]" muted :loop="true"
          :controls="false" :view-play="true" playsinline alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.m_video {
    height: 400px;
    border-top: .2667vw solid hsla(0, 0%, 100%, .15);
    border-bottom: .2667vw solid hsla(0, 0%, 100%, .15);
}

.content1 {
  width: 100%;
  flex: 1;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 418px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.1; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }


  .text1 {
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
    margin-top: 0px;
  }
}

.content2 {
    width: 100%;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 584px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.14; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }


  .text1 {
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
    margin-top: 5px;
  }
}
</style>