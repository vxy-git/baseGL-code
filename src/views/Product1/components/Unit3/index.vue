<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FrameSequence from '@/components/FrameSequence.vue'

gsap.registerPlugin(ScrollTrigger)

const seqProgress = ref(0)
const frames = 18
const tarURL = '/product1.tar'
const imageURL = (i) => `product1/frame${i + 1}.png`

const pinSection = ref(null)
const frameContainer = ref(null)
const tb1 = ref(null)
const tb2 = ref(null)
const tb3 = ref(null)
const tb4 = ref(null)

// tb1 子元素
const tb1Title = ref(null)

// tb2 子元素
const tb2SmallTitle = ref(null)
const tb2WTitle = ref(null)
const tb2Text = ref(null)

// tb3 子元素
const tb3SmallTitle = ref(null)
const tb3WTitle = ref(null)
const tb3Text = ref(null)

// tb4 子元素
const tb4SmallTitle = ref(null)
const tb4WTitle = ref(null)
const tb4Text = ref(null)
const tb4Stats = ref(null)
const tb4Image = ref(null)

const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 767
}

if (typeof window !== 'undefined') {
  isMobile.value = window.innerWidth <= 767
}

let tl

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection.value,
      start: 'top top',
      end: '+=7000',
      pin: true,
      scrub: 2,
      anticipatePin: 1,
      fastScrollEnd: false
    }
  })
  tl.add(() => { seqProgress.value = 0 })
    .to(seqProgress, { value: 0.33, duration: 3.6, ease: 'power1.inOut' })
    // tb1: 整体滑动,标题淡入
    .fromTo(tb1.value, { yPercent: 60 }, { yPercent: 0, duration: 2.2, ease: 'power1.inOut' }, '<')
    .fromTo(tb1Title.value, { opacity: 0 }, { opacity: 1, duration: 1.8, ease: 'power1.inOut' }, '<')
    // tb1: 整体滑出,标题淡出
    .to(tb1.value, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to(tb1Title.value, { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress, { value: 0.66, duration: 3.6, ease: 'power1.inOut' })
    // tb2: 整体滑动,子元素按顺序淡入
    .fromTo(tb2.value, { yPercent: 60 }, { yPercent: 0, duration: 2.0, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo([tb2SmallTitle.value, tb2WTitle.value, tb2Text.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.35, ease: 'power1.out' }, '<')
    // tb2: 整体滑出,子元素一起淡出
    .to(tb2.value, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to([tb2SmallTitle.value, tb2WTitle.value, tb2Text.value], { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress, { value: 1, duration: 3.6, ease: 'power1.inOut' })
    // tb3: 整体滑动,子元素按顺序淡入
    .fromTo(tb3.value, { yPercent: 60 }, { yPercent: 0, duration: 2.0, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo([tb3SmallTitle.value, tb3WTitle.value, tb3Text.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.35, ease: 'power1.out' }, '<')
    // tb3: 整体滑出,子元素一起淡出
    .to(tb3.value, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to([tb3SmallTitle.value, tb3WTitle.value, tb3Text.value], { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    // tb4 上移的同时，帧动画淡出
    .to(frameContainer.value, { opacity: 0, duration: 3.5, ease: 'power1.inOut' })
    // tb4: 整体滑动,子元素按顺序淡入
    .fromTo(tb4.value, { yPercent: 120 }, { yPercent: 0, duration: 3.3, ease: 'power1.out' }, '<+=0.4')
    .fromTo([tb4SmallTitle.value, tb4WTitle.value, tb4Text.value, tb4Stats.value, tb4Image.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.3, ease: 'power1.out' }, '<+=0.4')
})

onUnmounted(() => {
  tl && tl.kill()
  ScrollTrigger.getAll().forEach(i => i.kill())
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<template>
  <div class="pt-[133px]">
    <section ref="pinSection" class="sequence-wrap relative">
      <div ref="frameContainer" class="absolute left-1/2 -translate-x-1/2 bottom-0 c_1300 max-h-[74vh] w-full h-full">
        <FrameSequence :frames="frames" :tarURL="tarURL" :imageURL="imageURL" :progress="seqProgress"
          :objectFit="isMobile ? 'contain' : 'cover'" />
      </div>
      <div class="size-full flex items-start justify-center">
        <div class="text-layer">
          <div ref="tb1" class="text-block">
            <div ref="tb1Title" class="title">UNICORE<br />POWERED</div>
          </div>
          <div ref="tb2" class="text-block">
            <div ref="tb2SmallTitle" class="smallTitle">Award-Winning</div>
            <div ref="tb2WTitle" class="wTitle">Simply the best</div>
            <div ref="tb2Text" class="text">In June 2025, UNIT secured 1st place in the Live Resin vape category at the
              2025
              California State Fair Cannabis Awards. This victory is a testament to our product's excellence. With this
              market validation, we are not just confident, but eager to bring this golden standard to more brands using
              Resin and Rosin.</div>
          </div>
          <div ref="tb3" class="text-block">
            <div ref="tb3SmallTitle" class="smallTitle">A Significant Breakthrough</div>
            <div ref="tb3WTitle" class="wTitle">U-shape design<br />Pioneering industry</div>
            <div ref="tb3Text" class="text">Our patented U-shape ceramic design is the result of extensive testing and
              validation of
              various structures. It is the optimal structure for the vast majority of Resin and Rosin oils on the
              market.</div>
          </div>
          <div ref="tb4" class="text-block">
            <div ref="tb4SmallTitle" class="smallTitle">
              100% Rosin-Ready
            </div>
            <div ref="tb4WTitle" class="wTitle">
              Savor the most natural&nbsp;<br />
              and rich flavors
            </div>
            <div ref="tb4Text" class="text !mt-[28px]">
              Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene
              molecules
              are filtered out and the rich, natural flavors are preserved.
            </div>
            <div ref="tb4Stats" class="flex justify-center gap-x-[150px] mt-[68px]">
              <div class="flex flex-col items-center justify-center ">
                <div class="text1 h-[40px]">
                  30%
                </div>
                <div class="text2">
                  Thinner in Structure
                </div>
              </div>
              <div class="flex flex-col items-center h-[40px]">
                <div class="text1 flex">
                  45%
                  <img class="size-[40px]" src="@/assets/img/icon19.png" alt="">
                </div>
                <div class="text2">
                  Flavor Retention
                </div>
              </div>
            </div>
            <img ref="tb4Image" src="@/assets/img/icon18.png" class="mx-auto mt-[82px] max-h-[600px]" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.sequence-wrap {
  height: 100vh;
  // overflow: hidden;
}

.text-layer {
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-block {
  padding-top: 20vh;
  display: none;
}

.text-block:first-child,
.text-block:nth-child(2),
.text-block:nth-child(3),
.text-block:nth-child(4) {
  display: block;
  position: absolute;
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.smallTitle {
  padding-right: 10px;
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.wTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}

.text {
  max-width: 1200px;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.text1 {
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  /* 75% */
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  margin-top: 0px;
}

// 设置子元素初始透明度为0,由GSAP控制动画
.text-block {

  .title,
  .smallTitle,
  .wTitle,
  .text,
  .text1,
  .text2,
  img {
    opacity: 0;
  }
}
</style>