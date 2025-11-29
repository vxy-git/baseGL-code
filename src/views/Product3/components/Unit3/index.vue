<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FrameSequence from '@/components/FrameSequence.vue'

gsap.registerPlugin(ScrollTrigger)

const seqProgress = ref(0)
const frames = 29
const tarURL = '/product3.tar'
const imageURL = (i) => `product3/frame${i + 1}.jpg`

const pinSection = ref(null)
const frameContainer = ref(null)

const tb1 = ref(null)
const tb2 = ref(null)
const tb3 = ref(null)

// tb1
const tb1Title = ref(null)
const tb1Image = ref(null)

// tb2
const tb2SmallTitle = ref(null)
const tb2WTitle = ref(null)
const tb2Text = ref(null)
const tb2Image = ref(null)

// tb3
const tb3Card = ref(null)
const tb3Figure = ref(null)
const tb3Label = ref(null)
const tb3Bar1 = ref(null)
const tb3Bar1Text = ref(null)
const tb3Bar2 = ref(null)
const tb3Bar2Text = ref(null)
const tb3Image = ref(null)

const isMobile = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 767
}

if (typeof window !== 'undefined') {
  updateIsMobile()
}

let tl

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection.value,
      start: 'top top',
      end: '+=6500',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      fastScrollEnd: false
    }
  })

  tl.add(() => { seqProgress.value = 0 })
    .to(seqProgress, { value: 0.33, duration: 3.6, ease: 'power1.inOut' })
    // tb1 进入/淡入
    .fromTo(tb1.value, { yPercent: 60 }, { yPercent: 0, duration: 2.2, ease: 'power1.inOut' }, '<')
    .fromTo([tb1Title.value, tb1Image.value],
      { opacity: 0, yPercent: 10 },
      { opacity: 1, yPercent: 0, duration: 1.4, stagger: 0.2, ease: 'power1.out' }, '<')
    // tb1 退出
    .to(tb1.value, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to([tb1Title.value, tb1Image.value], { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress, { value: 0.66, duration: 3.6, ease: 'power1.inOut' })
    // tb2 进入/淡入
    .fromTo(tb2.value, { yPercent: 60 }, { yPercent: 0, duration: 2.0, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo([tb2SmallTitle.value, tb2WTitle.value, tb2Text.value, tb2Image.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.25, ease: 'power1.out' }, '<')
    // tb2 退出
    .to(tb2.value, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to([tb2SmallTitle.value, tb2WTitle.value, tb2Text.value, tb2Image.value], { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress, { value: 1, duration: 3.6, ease: 'power1.inOut' })
    // tb3 进入，帧动画淡出
    .fromTo(tb3.value, { yPercent: 80 }, { yPercent: 0, duration: 2.6, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo([tb3Card.value, tb3Image.value, tb3Figure.value, tb3Label.value, tb3Bar1.value, tb3Bar1Text.value, tb3Bar2.value, tb3Bar2Text.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.2, ease: 'power1.out' }, '<+=0.2')
    // tb3 退出与整体淡出
    .to(tb3.value, { yPercent: -200, opacity: 0, duration: 1.6, ease: 'power1.inOut' }, '+=2.0')
    // .to(frameContainer.value, { opacity: 0, duration: 3.0, ease: 'power1.inOut' }, '<')
    .to(pinSection.value, { opacity: 0, duration: 1.4, ease: 'power1.inOut' }, '>+=0.2')
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
            <div ref="tb1Title" class="title">
              <span class="text-white">Gold</span> standard for Resin/Rosin
            </div>
          </div>

          <div ref="tb2" class="text-block">
            <div ref="tb2SmallTitle" class="title1">UNICORE powered</div>
            <div ref="tb2WTitle" class="title2 mt-[19.55px]">33% in pore uniformity</div>
            <div ref="tb2Text" class="title3 max-w-[1200px] mt-[19.45px]">
              We pioneered the use of aerospace-grade, high-thermal-conductivity ceramics, firing temperature at 1832 °F
              to
              create a 20% denser, uniformly porous structure that perfectly matches resin and rosin molecules, eliminating
              any risk of dry burn for consistently optimal performance.
            </div>
          </div>

          <div ref="tb3" class="text-block">
            <div ref="tb3Card" class="bg-[#23242A]/70 rounded-[40px] w-[800px] h-[440px] flex pl-[65px] pt-[146px] m_scale_70">
              <div>
                <div ref="tb3Figure" class="flex text">
                  20%
                  <img src="@/assets/img/icon56.png" class="h-[39.805px]" alt="">
                </div>
                <div ref="tb3Label" class="text1">
                  Firing temp
                </div>
              </div>
              <div class="ml-[63.5px]">
                <div>
                  <div ref="tb3Bar1" class="bar w-[480px] bg-[#1CE785] rounded-full"></div>
                  <div ref="tb3Bar1Text" class="text2 mt-[15px]">
                    CALEAF TECH 1832 ℉ (1000℃)
                  </div>
                </div>
                <div class="mt-[46px]">
                  <div ref="tb3Bar2" class="bar w-[319px] bg-[#D9D9D9] rounded-full"></div>
                  <div ref="tb3Bar2Text" class="text2 mt-[15px]">
                    Others 1472 ℉ (800℃)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.sequence-wrap {
  height: 100vh;
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
  width: 100%;
  padding-top: 20vh;
  display: none;
}

.text-block:first-child,
.text-block:nth-child(2),
.text-block:nth-child(3) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title1 {
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title2 {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title3 {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.text {
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}

.text1 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.bar {
  height: 10px;
  flex-shrink: 0;
}

// 初始透明度由 GSAP 控制
.text-block {

  .title,
  .title1,
  .title2,
  .title3,
  .text,
  .text1,
  .text2,
  img,
  .bar {
    opacity: 0;
  }
}
</style>
