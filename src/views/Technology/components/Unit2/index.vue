<script setup>
import icon2_1 from '@/assets/img/icon2_1.png'
import icon2_2 from '@/assets/img/icon2_2.png'
// import icon3_1 from '@/assets/img/icon3_1.png'
import Unit3 from "../Unit3/index.vue"
</script>

<template>
  <div class="relative flex w-[calc(100vw-180px-180px)] pr-[calc(314px-180px)] items-start mx-auto">
    <img :src="icon2_1" alt="" class="w-[400px] h-[680px] object-contain mt-[150px]"/>
    <div class="h-[2044px] w-[1px] ml-[170px] mr-[98px] bg-white/20">

    </div>
    <div class="content-wrapper mt-[150px]">
      <div class="title1">
        100% Rosin-Ready
      </div>

      <div class="title2 mt-[22px] -ml-[10px]">
        Savor the most natural
        and rich flavors
      </div>

      <div class="title3 mt-[28.45px]">
        We always strive to be pioneers in the industry.<br>
        Our patented U-shape ceramic design is the result of extensive testing and validation<br> of various structures.
        It is the optimal structure for the vast majority of Resin and Rosin oils on the market.<br>
        It is 30% thinner than ordinary ceramics while maintaining the strength, which means<br> fewer terpene molecules
        are filtered out, and the rich, natural flavors are preserved.
      </div>

      <div class="flex pl-[3px] justify-center gap-x-[152px] mt-[36px]">
        <div class="flex flex-col items-center justify-center ">
          <div class="text1 h-[40px]">
            30%
          </div>
          <div class="text2">
            Thinner in Structure
          </div>
        </div>
        <div class="flex flex-col items-center h-[40px]">
          <div class="text1 flex">
            45%
            <img class="size-[40px]" src="@/assets/img/icon19.png" alt="">
          </div>
          <div class="text2">
            Flavor Retention
          </div>
        </div>
      </div>
      <img src="@/assets/img/icon2_2.png" class="w-[763px] max-w-[763px] h-[368px] mt-[50px]">



      <Unit3/>
    </div>

    <!-- <div class="content-wrapper translate-y-[920px] translate-x-[-300px]">
      <div class="title1">
        We fixed it first
      </div>

      <div class="title2">
        The most effective anti-clogging solution ever built.
      </div>

      <div class="title3 translate-y-[21px]" >
        Most customers have reported bubble issues to us with various devices from different suppliers during oil filling. Our U-shape ceramic design solves this problem perfectly. No more burnt taste caused by clogged bubbles.
      </div>
    </div>
</div>
<img :src="icon3_1"  class="w-[595px] h-[412px] mt-[720px] translate-x-[930px]"> -->
  </div>


</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title1 {
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
}

.title2 {
  width: 418px;
  height: 94px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  line-height: 1.1; // 缩短行间距
}

.title3 {
  width: 750px;
  height: 232px;
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
  line-height: 30px; /* 75% */
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  margin-top: 0px;
}
</style>