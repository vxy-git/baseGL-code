<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FrameSequence from '@/components/FrameSequence.vue'

gsap.registerPlugin(ScrollTrigger)

const seqProgress = ref(0)
const frames = 18
const tarURL = '/product1.tar'
const imageURL = (i) => `/product1/frame${i + 1}.png`

const pinSection = ref(null)
const tb1 = ref(null)
const tb2 = ref(null)
const tb3 = ref(null)

let tl

onMounted(() => {
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection.value,
      start: 'top top',
      end: '+=3000',
      pin: true,
      scrub: true,
      anticipatePin: 1
    }
  })
  tl.add(() => { seqProgress.value = 0 })
    .to(seqProgress, { value: 0.33, duration: 1 })
    .fromTo(tb1.value, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6 }, '<')
    .to(tb1.value, { yPercent: -40, opacity: 0, duration: 0.6 }, '+=0.8')
    .to(seqProgress, { value: 0.66, duration: 1 })
    .fromTo(tb2.value, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6 }, '<')
    .to(tb2.value, { yPercent: -40, opacity: 0, duration: 0.6 }, '+=0.8')
    .to(seqProgress, { value: 1, duration: 1 })
    .fromTo(tb3.value, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6 }, '<')
    .to(tb3.value, { yPercent: -40, opacity: 0, duration: 0.6 }, '+=0.8')
})

onUnmounted(() => {
  tl && tl.kill()
  ScrollTrigger.getAll().forEach(i => i.kill())
})

</script>

<template>
  <div class="pt-[133px]">
    <div class="c_1300 c_padding">
      <div class="title">UNICORE<br/>POWERED</div>
    </div>

    <section ref="pinSection" class="sequence-wrap relative">
      <FrameSequence :frames="frames" :tarURL="tarURL" :imageURL="imageURL" :progress="seqProgress" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-layer">
          <div ref="tb1" class="text-block">
            <div class="smallTitle">Award-Winning</div>
            <div class="wTitle">Simply the best</div>
            <div class="text">In June 2025, UNIT secured 1st place in the Live Resin vape category at the 2025 California State Fair Cannabis Awards. This victory is a testament to our product's excellence. With this market validation, we are not just confident, but eager to bring this golden standard to more brands using Resin and Rosin.</div>
          </div>
          <div ref="tb2" class="text-block">
            <div class="smallTitle">A Significant Breakthrough</div>
            <div class="wTitle">U-shape design<br/>Pioneering industry</div>
            <div class="text">Our patented U-shape ceramic design is the result of extensive testing and validation of various structures. It is the optimal structure for the vast majority of Resin and Rosin oils on the market.</div>
          </div>
          <div ref="tb3" class="text-block">
            <div class="smallTitle">100% Rosin-Ready</div>
            <div class="wTitle">Savor the most natural<br/>and rich flavors</div>
            <div class="text">Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene molecules are filtered out and the rich, natural flavors are preserved.</div>
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
}
.text-block {
  display: none;
}
.text-block:first-child,
.text-block:nth-child(2),
.text-block:nth-child(3) {
  display: block;
  position: absolute;
}
.title{
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px; /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.smallTitle{
  padding-right: 10px;
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}
.wTitle{
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}
.text{
  max-width: 1200px;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
}
.text1{
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 75% */
}
.text2{
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  margin-top: 0px;
}
</style>