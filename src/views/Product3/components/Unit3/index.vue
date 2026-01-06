<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FrameSequence from '@/components/FrameSequence.vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { product3Unit3Data  } from '@/data/product3/product3-unit3'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

// 合并 CMS 数据和本地数据
const unitData = computed(() => {
  if (props.data) {
    return { ...product3Unit3Data, ...props.data };
  }
  return product3Unit3Data;
});

gsap.registerPlugin(ScrollTrigger)

const seqProgress1 = ref(0)
const seqProgress2 = ref(0)

const pinSection1 = ref(null)
const pinSection2 = ref(null)
const frameContainer1 = ref(null)
const frameContainer2 = ref(null)

const tb1 = ref(null)
const tb2 = ref(null)
const tb3 = ref(null)

// tb1
const tb1Title = ref(null)
const tb1Chars = computed(() => unitData.value.textBlocks.tb1TitleText.split(''))
const tb1MaskChars = ref([])
const setTb1MaskCharRef = (el, index) => {
  if (el) {
    tb1MaskChars.value[index] = el
  }
}
const typingStagger = 0.03
const typingTotal = computed(() => tb1Chars.value.length * typingStagger)
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

let tl1
let tl2

onMounted(async () => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)

  await nextTick()
  const maskChars = tb1MaskChars.value.filter(Boolean)
  if (!maskChars.length || !tb1Chars.value.length) {
    return
  }

  tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection1.value,
      start: 'top top',
      end: '+=3200',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      fastScrollEnd: false,
      pinSpacing: true
    }
  })

  tl1.add(() => {
    seqProgress1.value = 0
    gsap.set(maskChars, { opacity: 0 })
  })
    .addLabel('printStart')
    .to(seqProgress1, { value: 1, duration: typingTotal.value, ease: 'none' }, 'printStart')
    .fromTo(
      maskChars,
      { opacity: 0 },
      {
        opacity: 1,
        duration: typingStagger,
        ease: 'none',
        stagger: typingStagger,
        immediateRender: false
      },
      'printStart'
    )

  tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection2.value,
      start: 'top top',
      end: '+=4200',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      fastScrollEnd: false,
      pinSpacing: true
    }
  })

  tl2
    .add(() => { seqProgress2.value = 0 })
    .to(seqProgress2, { value: 0.5, duration: 3.0, ease: 'power1.inOut' })
    .fromTo(tb2.value, { yPercent: 60 }, { yPercent: 0, duration: 2.0, ease: 'power1.inOut' }, '<')
    .fromTo([tb2SmallTitle.value, tb2WTitle.value, tb2Text.value, tb2Image.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.25, ease: 'power1.out' }, '<')
    .to(tb2.value, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to([tb2SmallTitle.value, tb2WTitle.value, tb2Text.value, tb2Image.value], { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress2, { value: 1, duration: 3.0, ease: 'power1.inOut' })
    .fromTo(tb3.value, { yPercent: 80 }, { yPercent: 0, duration: 2.6, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo([tb3Card.value, tb3Image.value, tb3Figure.value, tb3Label.value, tb3Bar1.value, tb3Bar1Text.value, tb3Bar2.value, tb3Bar2Text.value],
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.2, ease: 'power1.out' }, '<+=0.2')
    .to(tb3.value, { yPercent: -200, opacity: 0, duration: 1.6, ease: 'power1.inOut' }, '+=2.0')
    .to(pinSection2.value, { opacity: 0, duration: 1.4, ease: 'power1.inOut' }, '>+=0.2')
})

onUnmounted(() => {
  tl1 && tl1.kill()
  tl2 && tl2.kill()
  ScrollTrigger.getAll().forEach(i => i.kill())
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<template>
  <div class="pt-[133px]">
    <!-- 模块 1：帧动画 + tb1 -->
    <section ref="pinSection1" class="sequence-wrap relative">
      <div ref="frameContainer1" class="absolute left-1/2 -translate-x-1/2 bottom-0 c_1300 max-h-[74vh] w-full h-full">
        <FrameSequence :frames="unitData.frameSequences.sequence1.frames" :tarURL="unitData.frameSequences.sequence1.tarURL" :imageURL="unitData.frameSequences.sequence1.imageURL" :progress="seqProgress1"
          :objectFit="isMobile ? 'contain' : 'cover'" />
      </div>
      <div class="size-full flex items-start justify-center c_padding">
        <div class="text-layer">
          <div ref="tb1" class="text-block">
            <div ref="tb1Title" class="title printer-title">
              <span class="title-base">{{ unitData.textBlocks.tb1TitleText }}</span>
              <span class="title-mask" aria-hidden="true">
                <span
                  v-for="(ch, index) in tb1Chars"
                  :key="index"
                  class="mask-char"
                  :ref="el => setTb1MaskCharRef(el, index)"
                >
                  {{ ch === ' ' ? '\u00A0' : ch }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模块 2：tb2 + tb3 -->
    <section ref="pinSection2" class="sequence-wrap relative">
      <div ref="frameContainer2" class="absolute left-1/2 -translate-x-1/2 bottom-0 c_1300 max-h-[74vh] w-full h-full">
        <FrameSequence :frames="unitData.frameSequences.sequence2.frames" :tarURL="unitData.frameSequences.sequence2.tarURL" :imageURL="unitData.frameSequences.sequence2.imageURL" :progress="seqProgress2"
          :objectFit="isMobile ? 'contain' : 'cover'" />
      </div>
      <div class="size-full flex items-start justify-center">
        <div class="text-layer">
          <div ref="tb2" class="text-block c_padding">
            <div ref="tb2SmallTitle" class="title1">{{ unitData.textBlocks.tb2Content.smallTitle }}</div>
            <div ref="tb2WTitle" class="title2 mt-[19.55px]">{{ unitData.textBlocks.tb2Content.title }}</div>
            <div ref="tb2Text" class="title3 max-w-[1200px] mt-[19.45px]">
              {{ unitData.textBlocks.tb2Content.description }}
            </div>
          </div>

          <div ref="tb3" class="text-block c_padding">
            <div ref="tb3Card" class="bg-[#23242A]/70 rounded-[40px] w-[800px] h-[440px] flex pl-[65px] pt-[146px] m_scale_70">
              <div>
                <div ref="tb3Figure" class="flex text">
                  {{ unitData.textBlocks.tb3Content.figure }}
                  <MediaAsset
                    :src="unitData.arrowIcon"
                    type="image"
                    class="h-[39.805px]"
                    alt=""
                    :lazy="false"
                  />
                </div>
                <div ref="tb3Label" class="text1">
                  {{ unitData.textBlocks.tb3Content.label }}
                </div>
              </div>
              <div class="ml-[63.5px]">
                <div>
                  <div ref="tb3Bar1" class="bar w-[480px] bg-[#CAA4FB] rounded-full"></div>
                  <div ref="tb3Bar1Text" class="text2 mt-[15px]">
                    {{ unitData.textBlocks.tb3Content.bar1Text }}
                  </div>
                </div>
                <div class="mt-[46px]">
                  <div ref="tb3Bar2" class="bar w-[319px] bg-[#D9D9D9] rounded-full"></div>
                  <div ref="tb3Bar2Text" class="text2 mt-[15px]">
                    {{ unitData.textBlocks.tb3Content.bar2Text }}
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
  font-size: clamp(40px, 7vw, 80px);
  font-style: normal;
  font-weight: 700;
  line-height: clamp(40px, 7vw, 80px);
}

.printer-title {
  position: relative;
  display: inline-block;
}

.title-base {
  white-space: nowrap;
  position: relative;
  z-index: 1;
  color: #fff;
  opacity: 0.5;
}

.title-mask {
  position: absolute;
  inset: 0;
  color: #CAA4FB;
  background: none;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  -webkit-text-fill-color: #CAA4FB;
  white-space: pre;
  pointer-events: none;
  z-index: 2;
}

.mask-char {
  display: inline-block;
  opacity: 0;
}

.title1 {
  color: #CAA4FB;
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
  color: #CAA4FB;
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
  .title1,
  .title2,
  .title3,
  .text,
  .text1,
  .text2,
  .bar {
    opacity: 0;
  }
}
</style>
