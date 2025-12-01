<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FrameSequence from '@/components/FrameSequence.vue'

gsap.registerPlugin(ScrollTrigger)

const seqProgress = ref(0)
const frames = 17
const tarURL = '/product2.tar'
const imageURL = (i) => `product2/frame${i + 1}.jpg`

const pinSection = ref(null)
const frameContainer = ref(null)
const textBlock = ref(null)
const title1 = ref(null)
const title2 = ref(null)
const title3 = ref(null)
const image = ref(null)

const isMobile = ref(false)
const updateIsMobile = () => { isMobile.value = window.innerWidth <= 767 }
if (typeof window !== 'undefined') { isMobile.value = window.innerWidth <= 767 }

let tl

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection.value,
      start: 'top top',
      end: '+=5000',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      fastScrollEnd: false
    }
  })
  tl.add(() => { seqProgress.value = 0 })
    .to(seqProgress, { value: 1, duration: 3.6, ease: 'power1.inOut' })
    .fromTo(textBlock.value, { yPercent: 0 }, { yPercent: 0, duration: 3.0, ease: 'power1.out' }, '<')
    .fromTo([title1.value, title2.value, title3.value, image.value], { opacity: 0, yPercent: 15 }, { opacity: 1, yPercent: 0, duration: 1.0, stagger: 0.3, ease: 'power1.out' }, '<+=0.4')
    .to([title1.value, title2.value, title3.value, image.value], {opacity: 1, yPercent: -10, duration: 1.2, stagger: 0.2, ease: 'power1.inOut' }, '+=1.0')
    .to(pinSection.value, { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, '<')
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
      <div ref="textBlock" class="size-full flex items-start justify-center">
        <div class="text-layer">
          <div class="text-block">
            <div class="c_1230 c_padding">
              <div ref="title1" class="title1 translate-y-[1px] text-center capitalize">Tiny But Mighty</div>
              <div ref="title2" class="title2 mt-[19px]">A plam-sized<br />Rosin powerhouse</div>
              <div ref="title3" class="title3 mt-[19px]">UNIVERSE Series is the ultimate portable solution for rosin
                enthusiasts. The little cutie disappears in your hand and fits flat in your pocket, making it the
                perfect companion for those on the go.</div>
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
  padding-top: 20vh;
  position: absolute;
}

.img {
  max-width: 1400px;
  flex-shrink: 0;
}

.title1 {
  color: #3ad3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.text-block {

  .title1,
  .title2,
  .title3,
  img {
    opacity: 0;
  }
}
</style>