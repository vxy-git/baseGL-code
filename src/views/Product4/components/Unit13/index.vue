<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product4Unit13Data  } from '@/data/product4/product4-unit13.js'
import { ref } from 'vue';
import { useUnitData } from '@/composables/useUnitData';

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = useUnitData(props, product4Unit13Data);

const cardBoxRef = ref(null);

const slidePrev = () => {
  if (cardBoxRef.value) {
    cardBoxRef.value.scrollBy({ left: -332, behavior: 'smooth' });
  }
};

const slideNext = () => {
  if (cardBoxRef.value) {
    cardBoxRef.value.scrollBy({ left: 332, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="-mt-[5px] pb-[121px]">

    <div class=" c_1300 mx-auto pt-[114px] c_padding">
      <div class="title2">
        {{ unitData.content.title }}
      </div>

      <div class="relative mt-[45px]">
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2"
          type="image"
          :src="unitData.icons.arrowLeft"
          alt=""
          :lazy="false"
          @click="slidePrev"
        />
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2"
          type="image"
          :src="unitData.icons.arrowRight"
          alt=""
          :lazy="false"
          @click="slideNext"
        />
        <div class="flex cardBox gap-x-[27px]" ref="cardBoxRef">
          <div class="card pt-[63px]" v-for="item in 4">
            <MediaAsset
              class="w-[185px] h-[165px] mx-auto"
              type="image"
              :src="unitData.icons.card"
              alt=""
              :lazy="false"
            />
            <div class="cardTitle pl-[20px] mt-[46px]">
              {{ unitData.cardData.title }}
            </div>
            <div class="cardLabel pl-[20px]">
              {{ unitData.cardData.label }}
            </div>
            <div class="btn ml-[20px] mt-[17px]">
              {{ unitData.cardData.buttonText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.cardBox{
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .card{
    width: 305px;
    height: 440px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #23242A;
    .cardTitle{
      color: #FFF;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
    }
    .cardLabel{
      color: #F5F5F5;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
    .btn{
      border-radius: 50px;
      background: #1CE785;
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
.title2{
  color: #1CE785;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  line-height: 80px; /* 100% */
  letter-spacing: -5px;
}

</style>