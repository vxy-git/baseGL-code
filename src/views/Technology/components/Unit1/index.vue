<script setup>
import icon1_1 from '@/assets/img/icon1_1.png'
import icon1_3 from '@/assets/img/icon1_3.png'
import Playone from '@/assets/img/Play-one.png'
</script>

<template>
  <div class="relative h-screen flex justify-center items-start pt-[373px]">
    <div class="flex flex-col items-center">
      <!-- 标题 -->
      <div class="title">
        UNICORE
      </div>

      <!-- 主图片 -->
      <img :src="icon1_1" alt="" class="w-[445px] h-[633px] object-contain -mt-[440px]" />
    </div>

    <!-- 底部按钮图片 - 右下角 -->
    <div class="absolute bottom-[100px] right-0 w-[300px] h-[252px] mr-[339px]">
      <!-- icon1_3 图片 -->
      <img :src="icon1_3" alt="" class="w-full h-full object-contain" />

      <!-- Watch Video + 播放按钮 放到 icon1_3 上面 -->
      <div class="absolute inset-0 flex items-center justify-center gap-2">
        <div class="title1">Watch Video</div>
        <img :src="Playone" alt="" class="w-[24px] h-[24px] object-contain" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  width: 842px;
  height: 234px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 200px;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title1 {
  width: 113px;
  height: 23px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}
</style>
