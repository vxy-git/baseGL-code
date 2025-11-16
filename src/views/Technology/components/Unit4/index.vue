<script setup>
import icon4_1 from '@/assets/img/icon4_1.png'
import icon4_2 from '@/assets/img/icon4_2.png'
</script>

<template>
  <div
      class="-mt-[6px] w-full h-[1080px] bg-[url(@/assets/img/icon4_1.png)] bg-[length:100%_100%] bg-[#111111]">


    <div class="content-wrapper mx-auto justify-between pt-[447px]">
      <div>
        <div class="flex flex-col">
          <div class="text1 flex">
            <img class="size-[40px] scale-75 -translate-y-[2px] -translate-x-[2px] -ml-[14px]" src="@/assets/img/icon19.png" alt="">
            20% at firing temp
          </div>
        </div>

        <div class="title2 mt-[8px] ">
          Aerospace-grade<br>
          high thermal conductivity.
        </div>

        <div class="title3 mt-[32px]">
          We never let existing rules and regulations hold us back.<br>
          We pioneered the incorporation of aerospace-grade high thermal<br> conductivity materials into ceramics. Through
          round-the-clock firing<br> and suction tests, we have finally succeeded in firing the ceramic at<br> 1832 °F
          (1000 ℃), surpassing our peers by 20%.
        </div>
      </div>
      <img :src="icon4_2" class="w-[640px] h-[341px] mt-[10px]">
    </div>

    <!--     <img :src="icon4_2"/>-->

  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;

  gap: 20px;
  width: 1300px;
}

.title1 {
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}


.text1 {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}

.title2 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.14; // 缩短行间距
  letter-spacing: .8px;
}

.title3 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.percentage {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  margin-top: 5px;
}
</style>