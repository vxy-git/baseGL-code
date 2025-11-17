<script setup>
import icon5_1 from '@/assets/img/icon5_1.png'
import icon5_2 from '@/assets/img/icon5_2.png'
</script>

<template>
  <div class="w-[calc(100vw-620px)] mx-auto pt-[156px]">
    <div class="relative flex justify-between">
      <div class="content-wrapper mt-[145px]">
        <div class="title1">
          Built-in wires
        </div>

        <div class="title2 mt-[17px]">
          No more dry burning
        </div>

        <div class="title3 mt-[23px]">
          We pay attention to every detail.<br>
          It is only when we use the highest-grade nichrome alloy as the heating coil material, shape it for uniform
          heat distribution, and embed it into the ceramic core, allowing the oil to be heated by the ceramic and not by
          exposed hot wires, that we say, "That's it. This is a truly perfect structure!"
        </div>

        <img :src="icon5_1" alt="" class="w-[750px] h-[400px] mt-[50px]"/>

        <div class="title1 mt-[130px]">
          RTD Control
        </div>

        <div class="title2 mt-[23px]">
          Consistent Temp
        </div>

        <div class="title3 mt-[25px]">
          Unicore combines smoothness with purity, ensuring efficient THC and terpene extraction without burning, and
          guarantees an exceptional session every time.
        </div>

        <img :src="icon5_1" alt="" class="w-[750px] h-[400px] mt-[58px]"/>



      </div>
      <img class="h-[1630px] ml-[40px]" src="@/assets/img/ico42.png" alt="">
      <img :src="icon5_2" alt="" class="w-[577px] h-[560px] mt-[90px] -mr-[calc(310px-109px)]"/>
    </div>
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
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  line-height: 47px; // 缩短行间距
}

.title3 {
  width: 750px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
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
  margin-top: 5px;
}
</style>