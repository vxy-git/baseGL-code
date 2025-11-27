<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const moduleRef = ref(null);
const stageRef = ref(null);
const unitRef = ref(null);
const imgBox1Ref = ref(null);
const imgBox2Ref = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const timeline = gsap.timeline({
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

    timeline.to(unitRef.value, { scale: 1, duration: 1 });
    timeline.fromTo(
      imgBox1Ref.value,
      { xPercent: 0 },
      { xPercent: 50, duration: 1, immediateRender: false },
      'move'
    );
    timeline.fromTo(
      imgBox2Ref.value,
      { xPercent: 0 },
      { xPercent: -50, duration: 1, immediateRender: false },
      'move'
    );
    timeline.to({}, { duration: 0.5 }); // 结束后额外停留，再滚动离开
  }, moduleRef);
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <div ref="moduleRef" class="pt-[153px] pb-[45px]">
    <div class="title c_padding">
      Design your own look
    </div>
    <div class="title1 c_padding">
      Realize your unique design with CALEAF TECH.
    </div>
    <div class="mt-[54px] overflow-hidden">
      <div ref="stageRef" class="unit-stage">
        <div ref="unitRef" class="unitbox max-w-[1500px] mx-auto w-full flex flex-col justify-center items-center">
          <div class="w-[1500px] h-[300px]">
            <div class="size-full overflow-hidden flex justify-end">
              <div ref="imgBox1Ref" class="imgbox1 w-max flex gap-x-[30px] relative">
                <div class="mask1 absolute left-[-1px] top-1/2 translate-y-[-50%] rotate-180"></div>
                <div class="h-full w-[480px]">
                  <img src="@/assets/product2/realize1.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize2.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize3.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px]">
                  <img src="@/assets/product2/realize1.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize2.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize3.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="mask1 absolute right-[-1px] top-1/2 translate-y-[-50%]"></div>
              </div>
            </div>
          </div>
          <div class="w-[1500px] h-[300px] flex relative gap-x-[30px] mt-[20px]">
            <div class="size-full overflow-hidden">
              <div ref="imgBox2Ref" class="imgbox2 w-max flex gap-x-[30px] relative">
                <div class="mask1 absolute left-[-1px] top-[-1px] rotate-180"></div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize4.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize5.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize6.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize4.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize5.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
                </div>
                <div class="h-full w-[480px] rounded-[20px] bg-[#D9D9D9]">
                  <img src="@/assets/product2/realize6.jpg"
                    class="w-full h-full object-cover rounded-[20px] overflow-hidden" alt="" />
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
  color: #1CE785;
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
