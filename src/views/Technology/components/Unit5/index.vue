<script setup>
import icon5_1 from '@/assets/img/icon5_1.png'
import icon5_2 from '@/assets/img/icon5_2.png'
</script>

<template>
  <div class="relative h-screen flex justify-center items-start pt-[373px]">
    <div class="content-wrapper translate-y-[188px] translate-x-[-280px]">
      <div class="title1">
        Built-in wires
      </div>

      <div class="title2">
        No more dry burning
      </div>

      <div class="title3  translate-y-[-50px] translate-x-[10px]">
        We pay attention to every detail.<br>
It is only when we use the highest-grade nichrome alloy as the heating coil material, shape it for uniform heat distribution, and embed it into the ceramic core, allowing the oil to be heated by the ceramic and not by exposed hot wires, that we say, "That's it. This is a truly perfect structure!"
      </div>

      <img :src="icon5_1" alt="" class="w-[750px] h-[400px] translate-y-[-100px] translate-x-[10px]" />

      <div class="title1 translate-y-[10px] translate-x-[10px]" >
        RTD Control
      </div>

      <div class="title2 translate-y-[15px] translate-x-[10px]">
        Consistent Temp
      </div>

      <div class="title3  translate-y-[-30px] translate-x-[10px]">
        Unicore combines smoothness with purity, ensuring efficient THC and terpene extraction without burning, and guarantees an exceptional session every time.
      </div>

      <img :src="icon5_1" alt="" class="w-[750px] h-[400px] translate-y-[-170px] translate-x-[10px]" />


      
      <img :src="icon5_2" alt="" class="w-[577px] h-[560px] translate-y-[-1700px] translate-x-[840px]" />
    </div>
</div>
    
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