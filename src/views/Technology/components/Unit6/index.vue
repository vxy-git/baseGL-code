<script setup>
import icon5_1 from '@/assets/img/icon5_1.png'
</script>

<template>
<div class="h-[880px] bg-[#111111] flex items-center justify-center">
    <div class="content-wrapper ">
        <div class="title2 translate-y-[1380px] translate-x-[-68px]">
            Our clients have taken home trophies
      </div>
      <div class="title3  translate-y-[1415px] translate-x-[-4px]">
        We take pride in having earned our clients’ trust. The trophies shine brightly and stand as<br> proof of our products’ excellence.
      </div>
      <div class="title2 translate-y-[1670px] translate-x-[-68px]">
            Our clients have taken home trophies
      </div>
      <img :src="icon5_1" alt="" class="w-[800px] h-[400px] translate-y-[1650px] translate-x-[0px]" />



      <div class="title3  translate-y-[1670px] translate-x-[-4px]">
        We take pride in having earned our clients’ trust. The trophies shine brightly and stand as<br> proof of our products’ excellence.
      </div>
      
      
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


.title2 {
  width: 669px;
  height: 79px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  line-height: 1.1; // 缩短行间距
}

.title3 {
  width: 800px;
  height: 100px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
//   text-align: center;
}
</style>