<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FrameSequence from '@/components/FrameSequence.vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit3Data } from '@/data/product1/product1-unit3'

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
    return { ...product1Unit3Data, ...props.data };
  }
  return product1Unit3Data;
});

gsap.registerPlugin(ScrollTrigger)

const seqProgress = ref(0)
const { frames, tarURL, imageURL } = unitData.value.frameConfig

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
const toEl = (val) => (val && '$el' in val ? val.$el : val)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 767
}

if (typeof window !== 'undefined') {
  isMobile.value = window.innerWidth <= 767
}

let tl
const buildTimeline = () => {
  tl && tl.kill()

  const els = {
    pinSection: toEl(pinSection.value),
    frameContainer: toEl(frameContainer.value),
    tb1: toEl(tb1.value),
    tb1Title: toEl(tb1Title.value),
    tb2: toEl(tb2.value),
    tb2SmallTitle: toEl(tb2SmallTitle.value),
    tb2WTitle: toEl(tb2WTitle.value),
    tb2Text: toEl(tb2Text.value),
    tb3: toEl(tb3.value),
    tb3SmallTitle: toEl(tb3SmallTitle.value),
    tb3WTitle: toEl(tb3WTitle.value),
    tb3Text: toEl(tb3Text.value),
    tb4: toEl(tb4.value),
    tb4SmallTitle: toEl(tb4SmallTitle.value),
    tb4WTitle: toEl(tb4WTitle.value),
    tb4Text: toEl(tb4Text.value),
    tb4Stats: toEl(tb4Stats.value),
    tb4Image: toEl(tb4Image.value)
  }

  if (Object.values(els).some(el => !el)) {
    console.warn('[Unit3] missing element refs, skip timeline init')
    return
  }

  const tb2Elems = [els.tb2SmallTitle, els.tb2WTitle, els.tb2Text].map(toEl).filter(Boolean)
  const tb3Elems = [els.tb3SmallTitle, els.tb3WTitle, els.tb3Text].map(toEl).filter(Boolean)
  const tb4Elems = [els.tb4SmallTitle, els.tb4WTitle, els.tb4Text, els.tb4Stats, els.tb4Image].map(toEl).filter(Boolean)

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: els.pinSection,
      start: 'top top',
      end: '+=7000',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      fastScrollEnd: false
    }
  })
  tl.add(() => { seqProgress.value = 0 })
    .to(seqProgress, { value: 0.33, duration: 3.6, ease: 'power1.inOut' })
    // tb1: 整体滑动,标题淡入
    .fromTo(els.tb1, { yPercent: 60 }, { yPercent: 0, duration: 2.2, ease: 'power1.inOut' }, '<')
    .fromTo(els.tb1Title, { opacity: 0 }, { opacity: 1, duration: 1.8, ease: 'power1.inOut' }, '<')
    // tb1: 整体滑出,标题淡出
    .to(els.tb1, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to(els.tb1Title, { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress, { value: 0.66, duration: 3.6, ease: 'power1.inOut' })
    // tb2: 整体滑动,子元素按顺序淡入
    .fromTo(els.tb2, { yPercent: 60 }, { yPercent: 0, duration: 2.0, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo(tb2Elems,
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.35, ease: 'power1.out' }, '<')
    // tb2: 整体滑出,子元素一起淡出
    .to(els.tb2, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to(tb2Elems, { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    .to(seqProgress, { value: 1, duration: 3.6, ease: 'power1.inOut' })
    // tb3: 整体滑动,子元素按顺序淡入
    .fromTo(els.tb3, { yPercent: 60 }, { yPercent: 0, duration: 2.0, ease: 'power1.inOut' }, '<+=0.3')
    .fromTo(tb3Elems,
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.35, ease: 'power1.out' }, '<')
    // tb3: 整体滑出,子元素一起淡出
    .to(els.tb3, { yPercent: -60, duration: 1.2, ease: 'power1.inOut' }, '+=1.6')
    .to(tb3Elems, { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
    // tb4 上移的同时，帧动画淡出
    .to(els.frameContainer, { opacity: 0, duration: 3.5, ease: 'power1.inOut' })
    // tb4: 整体滑动,子元素按顺序淡入
    .fromTo(els.tb4, { yPercent: 120 }, { yPercent: 0, duration: 3.3, ease: 'power1.out' }, '<+=0.4')
    .fromTo(tb4Elems,
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.3, ease: 'power1.out' }, '<+=0.4')
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
  nextTick(buildTimeline)
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
          <div ref="tb1" class="text-block c_padding">
            <div ref="tb1Title" class="title whitespace-break-spaces">{{ product1Unit3Data.textBlocks.tb1.title }}</div>
          </div>
          <div ref="tb2" class="text-block c_padding">
            <div ref="tb2SmallTitle" class="smallTitle">{{ product1Unit3Data.textBlocks.tb2.smallTitle }}</div>
            <div ref="tb2WTitle" class="wTitle">{{ product1Unit3Data.textBlocks.tb2.wTitle }}</div>
            <div ref="tb2Text" class="text">{{ product1Unit3Data.textBlocks.tb2.text }}</div>
          </div>
          <div ref="tb3" class="text-block c_padding">
            <div ref="tb3SmallTitle" class="smallTitle">{{ product1Unit3Data.textBlocks.tb3.smallTitle }}</div>
            <div ref="tb3WTitle" class="wTitle whitespace-break-spaces">{{ product1Unit3Data.textBlocks.tb3.wTitle }}</div>
            <div ref="tb3Text" class="text">{{ product1Unit3Data.textBlocks.tb3.text }}</div>
          </div>
          <div ref="tb4" class="text-block c_padding">
            <div ref="tb4SmallTitle" class="smallTitle">
              {{ product1Unit3Data.textBlocks.tb4.smallTitle }}
            </div>
            <div ref="tb4WTitle" class="wTitle whitespace-break-spaces">
              {{ product1Unit3Data.textBlocks.tb4.wTitle }}
            </div>
            <div ref="tb4Text" class="text !mt-[28px]">
              {{ product1Unit3Data.textBlocks.tb4.text }}
            </div>
            <div ref="tb4Stats" class="flex justify-center gap-x-[150px] mt-[68px]">
              <div v-for="(stat, index) in product1Unit3Data.textBlocks.tb4.stats" :key="index" class="flex flex-col items-center justify-center ">
                <div class="text1 h-[40px]" :class="{ 'flex': stat.hasIcon }">
                  {{ stat.value }}
                  <MediaAsset
                    v-if="stat.hasIcon"
                    class="size-[40px]"
                    type="image"
                    :src="product1Unit3Data.icons.flavor"
                    alt=""
                    :lazy="false"
                  />
                </div>
                <div class="text2">
                  {{ stat.label }}
                </div>
              </div>
            </div>
            <MediaAsset
              ref="tb4Image"
              :src="product1Unit3Data.icons.device"
              type="image"
              class="mx-auto mt-[82px] max-h-[600px]"
              alt=""
              :lazy="false"
            />
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
  margin: 20px auto 0;
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
