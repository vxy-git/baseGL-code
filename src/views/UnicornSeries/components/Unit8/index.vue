<script setup>
import { ref, computed } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { unit8Data } from '@/data/unicorn-series/unit8'
import { useUnitData } from '@/composables/useUnitData'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, unit8Data)

// 卡片总数量
const totalCards = 4

// 当前幻灯片索引
const currentIndex = ref(0)

// 单张卡片宽度 (305px card + 27px gap = 332px)
const cardWidth = 332

/**
 * 切换到上一张幻灯片
 */
const slidePrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

/**
 * 切换到下一张幻灯片
 */
const slideNext = () => {
  if (currentIndex.value < totalCards - 1) {
    currentIndex.value++
  }
}

/**
 * 计算卡片的位移距离
 */
const translateX = computed(() => {
  return `translateX(-${currentIndex.value * cardWidth}px)`
})
</script>

<template>
  <div class="bg-black -mt-[5px] pb-[121px]">
    <div class="c_1300 mx-auto pt-[114px]">
      <div class="title2">
        {{ unitData.pageTitle }}
      </div>

      <div class="cardBoxWrapper mt-[45px] relative">
        <!-- 左箭头 -->
        <MediaAsset
          v-if="currentIndex > 0"
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2"
          type="image"
          :src="unitData.icons.arrowLeft"
          alt=""
          :lazy="false"
          @click="slidePrev"
        />
        <!-- 右箭头 -->
        <MediaAsset
          v-if="currentIndex < totalCards - 1"
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2"
          type="image"
          :src="unitData.icons.arrowRight"
          alt=""
          :lazy="false"
          @click="slideNext"
        />
        <!-- 卡片容器 -->
        <div
          class="cardBox flex gap-x-[27px]"
          :style="{ transform: translateX, transition: 'transform 0.3s ease' }"
        >
          <div v-for="item in totalCards" :key="item" class="card pt-[63px]">
            <MediaAsset
              class="w-[185px] h-[165px] mx-auto"
              type="image"
              :src="unitData.images.card"
              alt=""
              :lazy="false"
            />
            <div class="cardTitle pl-[20px] mt-[46px]">
              {{ unitData.specs.unicorn[0].title }}
            </div>
            <div class="cardLabel mt-[2px] pl-[20px]">
              {{ unitData.specs.unicorn[0].label }}
            </div>
            <div class="btn ml-[20px] mt-[17px]">
              {{ unitData.specs.unicorn[0].btnText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardBoxWrapper {
  overflow: hidden;
}
.cardBox {
  .card {
    width: 305px;
    height: 440px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #23242a;
    .cardTitle {
      color: #fff;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
    }
    .cardLabel {
      color: #f5f5f5;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
    .btn {
      border-radius: 50px;
      background: #caa4fb;
      width: 130px;
      height: 40px;
      flex-shrink: 0;
      color: #000;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.title2 {
  color: #caa4fb;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  line-height: 80px; /* 100% */
  letter-spacing: -5px;
}
</style>
