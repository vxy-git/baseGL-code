<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MAIN_TITLE, PANELS_LIST, TRACK_PREFIX } from '@/data/product2-unit6'

const unitRef = ref(null)
const innerRef = ref(null)
const trackRef = ref(null)
const panels = 4
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

    const endDistance = () =>
      window.innerHeight *
      (
        1 + // first fade-only segment
        (panels - 1) * ((moveDuration + pauseDuration) / moveDuration)
      )

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

    for (let i = 2; i < panels; i++) {
      tl.to(trackRef.value, {
        x: () => -i * window.innerWidth,
        duration: moveDuration
      })
      tl.to(trackRef.value, {
        x: () => -i * window.innerWidth,
        duration: pauseDuration
      })
    }

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
              <div class="title">{{ MAIN_TITLE }}</div>
            </div>
          </div>
        </div>

        <div class="unit6-panel" v-for="(panel, index) in PANELS_LIST" :key="index">
          <div class="c_1230 c_padding">
            <div>
              <div class="w-full flex justify-between mx-auto gap-[43px] m_flex_col">
                <div>
                  <div class="btn mt-[3px]">{{ panel.btn }}</div>
                  <div class="title1">{{ panel.title }}</div>
                  <div class="title2">{{ panel.description }}</div>
                </div>
                <div class="shrink-0 h-[340px] w-[560px] rounded-[20px] bg-black">
                  <MediaAsset
                    :type="panel.mediaType"
                    :src="panel.mediaSrc"
                    autoplay
                    muted
                    playsinline
                    loop
                    :controls="false"
                  ></MediaAsset>
                </div>
              </div>
              <div class="title3 mt-[70px]">
                {{ TRACK_PREFIX }}
                <span class="mx-[10px]">|</span>
                <span class="num inline-block">{{ panel.number }}</span>
              </div>
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
  max-width: 1222px;
  width: 100%;
  height: 378px;

  .line {
    height: 100%;
    width: 100%;
    border: 10px solid #3ad3ff;
    display: block;
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
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
  line-height: 145px;
  background: linear-gradient(180deg, #3ad3ff 0%, #C9FFE5 50%, #3ad3ff 100%);
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
    color: #3ad3ff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.btn {
  width: max-content;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #3ad3ff;
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  //justify-content: center;
  //letter-spacing: -.1px;
  padding: 0 24px;
}
</style>