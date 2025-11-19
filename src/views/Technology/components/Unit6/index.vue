<script setup>
import icon5_1 from '@/assets/img/icon5_1.png'
</script>

<template>
  <div class=" bg-[#111111] flex items-center justify-center pt-[275px]">
    <div class="content-wrapper w-[800px]">
      <div class="title2">
        Our clients have taken home trophies
      </div>
      <div class="w-[100vw] -translate-x-[calc((100vw-800px)/2)] bg-[#1CE785] h-[2px] mt-[40px]">

      </div>
      <div class="title3 mt-[44px]">
        We take pride in having earned our clients’ trust. The trophies shine brightly and stand as<br> proof of our
        products’ excellence.
      </div>
      <div class="title2 mt-[315px]">
        Our clients have taken home trophies
      </div>
      <img :src="icon5_1" alt="" class="w-[800px] h-[400px] mt-[41px]"/>


      <div class="title3 mt-[34px]">
        We take pride in having earned our clients’ trust. The trophies shine brightly and stand as<br> proof of our
        products’ excellence.
      </div>


    </div>

  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
}


.title2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;

}

.title3 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
}
</style>