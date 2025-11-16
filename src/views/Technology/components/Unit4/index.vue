<script setup>
import icon4_1 from '@/assets/img/icon4_1.png'
import icon4_2 from '@/assets/img/icon4_2.png'
</script>

<template>
<div class="h-[880px] bg-[#111111] flex items-center justify-center">
    <img :src="icon4_1"  class="w-[1920px] h-[1080px] translate-y-[135px] translate-x-[680px]">

    <div class="content-wrapper -mt-[-535px] translate-x-[-930px]">
        <div class="flex flex-col">
            <div class="text1 flex">
                <img class="size-[40px]" src="@/assets/img/icon19.png" alt="">
                20% at firing temp
            </div>
          </div>

      <div class="title2 -translate-y-[10px] translate-x-[21px]">
        Aerospace-grade<br>
high thermal conductivity.
      </div>

      <div class="title3 translate-y-[1px] translate-x-[21px]" >
      We never let existing rules and regulations hold us back.<br>
We pioneered the incorporation of aerospace-grade high thermal<br> conductivity materials into ceramics. Through round-the-clock firing<br> and suction tests, we have finally succeeded in firing the ceramic at<br> 1832 °F (1000 ℃), surpassing our peers by 20%.
        </div>
    </div> 

    <!-- <img :src="icon4_2"/> -->
     <img :src="icon4_2" class="w-[640px] h-[341px] translate-y-[250px] translate-x-[-1000px]">
</div>
</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;

  gap: 20px;
}

.title1 {
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}



.text1{
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}

.title2 {
  width: 584px;
  height: 94px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.14; // 缩短行间距
}

.title3 {
  width: 750px;
  height: 232px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.percentage {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
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