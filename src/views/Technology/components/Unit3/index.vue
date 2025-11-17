<script setup>
import icon3_1 from '@/assets/img/icon3_1.png'
</script>

<template>
    <div class="content-wrapper mt-[158px]">
      <div class="title1">
        We fixed it first
      </div>

      <div class="title2">
        The most effective<br>
anti-clogging solution ever built.
      </div>

      <div class="title3 mt-[21px]" >
        Most customers have reported bubble issues to us with various devices from different suppliers during oil filling. Our U-shape ceramic design solves this problem perfectly. No more burnt taste caused by clogged bubbles.
      </div>
    </div>
<img :src="icon3_1"  class="w-[595px] h-[412px] mt-[66px]">
</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
  width: 584px;
  height: 94px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  line-height: 1.14; // 缩短行间距
}

.title3 {
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


.text1{
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 75% */
}
.text2{
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  margin-top: 5px;
}
</style>