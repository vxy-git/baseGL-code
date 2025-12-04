<script setup>
const logoSrc1 = '/assets/product4/unit6-1.jpg'
const logoSrc2 = '/assets/product4/unit6-2.jpg'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const unitRef = ref(null)
const innerRef = ref(null)
const trackRef = ref(null)
const moveDuration = 1
const pauseDuration = 1
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  ctx = gsap.context(() => {
    const maskEls = innerRef.value.querySelectorAll('.mask')

    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: unitRef.value,
        start: 'center bottom',
        end: 'center center',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .fromTo(
        innerRef.value,
        { yPercent: 50 },
        { yPercent: 0 }
      )
      .to(
        maskEls,
        { width: '0%', height: '0%' },
        0
      )

    const endDistance = () => {
      const panelsCount = trackRef.value?.querySelectorAll('.unit6-panel').length || 1
      return window.innerHeight * (
        1 + // first fade-only segment
        (Math.max(panelsCount, 1) - 1) * ((moveDuration + pauseDuration) / moveDuration)
      )
    }

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: unitRef.value,
        pin: true,
        start: 'center center',
        end: () => '+=' + endDistance(),
        scrub: true,
        invalidateOnRefresh: true
      }
    })

    const firstPanel = trackRef.value.querySelector('.unit6-panel')
    tl.to(firstPanel, {
      opacity: 0.2,
      duration: moveDuration
    })
    tl.to(trackRef.value, {
      x: () => -1 * window.innerWidth,
      duration: moveDuration
    })
    tl.to(firstPanel, {
      opacity: 0,
      duration: moveDuration
    }, '-=' + moveDuration)
    tl.to(trackRef.value, {
      x: () => -1 * window.innerWidth,
      duration: pauseDuration
    })
    tl.to(trackRef.value, {
      x: () => -2 * window.innerWidth,
      duration: moveDuration
    })
    tl.to(trackRef.value, {
      x: () => -2 * window.innerWidth,
      duration: pauseDuration
    })

    ScrollTrigger.refresh()
  }, unitRef)
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <div ref="unitRef" class="unit6-scroll">
    <div ref="innerRef" class="unit6-inner">
      <div ref="trackRef" class="unit6-track">
        <div class="unit6-panel">
          <div class="c_1230 c_padding w-full">
            <div class="relative w-full mx-[4px] flex flex-col items-center justify-center">
              <div class="style-line">
                <span class="line"></span>
                <span class="mask mask_l"></span>
                <span class="mask mask_r"></span>
              </div>
              <div class="title">Advanced Interactivity</div>
            </div>
          </div>
        </div>

        <div class="unit6-panel">
          <div class="c_1230 c_padding">
            <div>
              <div class="w-full flex justify-between mx-auto gap-[98px] m_flex_col">
                <div>
                  <div class="btn mt-[3px]">Taste Switcher</div>
                  <div class="title1">Let's live it up!</div>
                  <div class="title2">
                    Tap once—screen and flavor sync in a flash. Sit back and soak up the visual-and-taste ride.
                  </div>
                </div>
                <div class="max-w-full shrink-0 h-[360px] w-[600px] rounded-[20px] overflow-hidden bg-black">
                  <MediaAsset type="image" :src="logoSrc1" />
                </div>
              </div>
              <!-- <div class="title3 mt-[70px]">
                DEEP TRACK 3.0
                <span class="mx-[10px]">|</span>
                <span class="num inline-block">01</span>
              </div> -->
            </div>
          </div>
        </div>

        <div class="unit6-panel">
          <div class="c_1230 c_padding">
            <div>
              <div class="w-full flex justify-between mx-auto gap-[98px] m_flex_col">
                <div>
                  <div class="btn mt-[3px]">Hit a Blinker</div>
                  <div class="title1">Toggle the mode, bye-bye boring!</div>
                  <div class="title2">
                    Turn the brand icon into a shape-shifting star, craft a vibe that's signature-only.
                  </div>
                </div>
                <div class="max-w-full shrink-0 h-[360px] w-[600px] rounded-[20px] overflow-hidden bg-black">
                  <MediaAsset type="image" :src="logoSrc2" />
                </div>
              </div>
              <!-- <div class="title3 mt-[70px]">
                DEEP TRACK 3.0
                <span class="mx-[10px]">|</span>
                <span class="num inline-block">03</span>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit6-scroll {
  width: 100%;
  min-height: 100vh;
}

.unit6-inner {
  display: flex;
  will-change: transform;
  min-height: 100vh;
}

.unit6-track {
  display: flex;
  align-items: center;
  will-change: transform;
}

.unit6-panel {
  width: 100vw;
  flex-shrink: 0;
}

.style-line {
  max-width: 800px;
  width: 100%;
  height: 400px;

  .line {
    position: relative;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    display: block;
    background: linear-gradient(270deg, #7A7FD9 0%, #E5525F 50%, #FB8047 100%);

    &::after {
      content: '';
      display: block;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      border-radius: 20px;
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      background-color: #000;
    }
  }

  .mask_l,
  .mask_r {
    position: absolute;
    width: 80%;
    height: 80%;
    background: #000;
    display: block;
  }

  .mask_l {
    top: 0;
    left: 0;
  }

  .mask_r {
    right: 0;
    bottom: 0;
  }
}

.title {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: italic;
  font-weight: 900;
  line-height: 80px;

  background: linear-gradient(270deg, #7A7FD9 0%, #E5525F 50%, #FB8047 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title1 {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
}

.title2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  width: 100%;
  margin-top: 43px;
}

.title3 {
  color: rgba(255, 255, 255, 0.80);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: center;

  .num {
    color: #1CE785;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.btn {
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  //justify-content: center;
  //letter-spacing: -.1px;

  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(90deg, #00FFF5 0%, #839DFF 50%, #BF48FF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
