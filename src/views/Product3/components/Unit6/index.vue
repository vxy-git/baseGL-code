<script setup>

</script>

<template>
<div class="h-[900px] bg-[#F5F5F5]">
  <div class="relative">
    <div class="flex gap-x-[84px] -ml-[19px] pt-[126px]">
      <div :class="{
        'mx-[50px]':index === 1,
        '!ml-[calc(61px-86px)]':index === 2
      }" class="size-[280px] rounded-[40px] bg-[#D9D9D9] flex-shrink-0 relative" v-for="(item,index) in 10">
        <div v-if="index ===2" class="absolute top-[calc(280px+71px)]">
          <div class="title">
            ULTRA-LARGE SMART DISPLAY
          </div>
          <div class="title2">
            Design Your Own
          </div>
          <div class="w-[500px] title3">
            Customize it further with any brand graphics to create your unique brand screen. Drive market trends with a design that breaks the mold and leads the way.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.title{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title2{
  text-wrap: nowrap;
  color: #111;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 19.55px;
}
.title3{
  color: #555;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  @apply mt-[37.45px]
}
</style>