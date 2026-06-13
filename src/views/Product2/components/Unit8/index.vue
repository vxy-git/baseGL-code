<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useUnitData } from '@/composables/useUnitData'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaAsset from '@/components/MediaAsset.vue'
import { product2Unit8Data  } from '@/data/product2/product2-unit8'

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = useUnitData(props, product2Unit8Data)

const moduleRef = ref(null);
const stageRef = ref(null);
const unitRef = ref(null);
const imgBox1Ref = ref(null);
const imgBox2Ref = ref(null);
let scrollTl;

const initScroll = () => {
  scrollTl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: moduleRef.value,
      start: 'center center',
      end: '+=300%',
      scrub: true,
      pin: moduleRef.value,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  scrollTl.to(unitRef.value, { scale: 1, duration: 1 });
  scrollTl.fromTo(
    imgBox1Ref.value,
    { xPercent: 0 },
    { xPercent: 50, duration: 1, immediateRender: false },
    'move'
  );
  scrollTl.fromTo(
    imgBox2Ref.value,
    { xPercent: 0 },
    { xPercent: -50, duration: 1, immediateRender: false },
    'move'
  );
  scrollTl.to({}, { duration: 0.5 }); // 结束后额外停留，再滚动离开
}

onMounted(() => {
  initScroll();
  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  scrollTl && scrollTl.kill();
});
</script>

<template>
  <div ref="moduleRef" class="pt-[153px] pb-[45px]">
    <div class="title c_padding capitalize">
      {{ unitData.labelText }}
    </div>
    <div class="title1 c_padding">
      {{ unitData.mainTitle }}
    </div>
    <div class="mt-[54px] overflow-hidden">
      <div ref="stageRef" class="unit-stage">
        <div ref="unitRef" class="unitbox max-w-[1500px] mx-auto w-full flex flex-col justify-center items-center">
          <div class="w-[1500px] h-[300px]">
            <div class="size-full overflow-hidden flex justify-end">
              <div ref="imgBox1Ref" class="imgbox1 w-max flex gap-x-[30px] relative">
                <div class="mask1 absolute left-[-1px] top-1/2 translate-y-[-50%] rotate-180"></div>
                <div v-for="(img, index) in [...unitData.designImages.top, ...unitData.designImages.top]" :key="`top-${index}`" class="h-full w-[480px]" :class="{ 'rounded-[20px]': index % 2 === 1 }">
                  <MediaAsset
                    :src="img"
                    type="image"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden"
                    alt=""
                    :lazy="false"
                  />
                </div>
                <div class="mask1 absolute right-[-1px] top-1/2 translate-y-[-50%]"></div>
              </div>
            </div>
          </div>
          <div class="w-[1500px] h-[300px] flex relative gap-x-[30px] mt-[20px]">
            <div class="size-full overflow-hidden">
              <div ref="imgBox2Ref" class="imgbox2 w-max flex gap-x-[30px] relative">
                <div class="mask1 absolute left-[-1px] top-[-1px] rotate-180"></div>
                <div v-for="(img, index) in [...unitData.designImages.bottom, ...unitData.designImages.bottom]" :key="`bottom-${index}`" class="h-full w-[480px] rounded-[20px]">
                  <MediaAsset
                    :src="img"
                    type="image"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden"
                    alt=""
                    :lazy="false"
                  />
                </div>
                <div class="mask1 absolute right-[-1px] top-[-1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #3ad3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title1 {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 19.55px;
}

.mask1 {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000 46.49%);
  width: 185px;
  height: 120%;
  flex-shrink: 0;
}

.unit-stage {
  position: relative;
  // min-height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unitbox {
  transform-origin: center bottom;
  will-change: transform;
  transform: scale(2);
}

.imgbox1 {
  // transform: translateX(-50%);
  will-change: transform;
}

.imgbox2 {
  transform: translateX(0%);
  will-change: transform;
}
</style>