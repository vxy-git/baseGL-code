<script setup>
import unit4Bg from '@/assets/product3/unit4.jpg'
import { onMounted, onBeforeUnmount } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import leftVideoSrc from '@/assets/product3/unit5-l.mp4'
import rightVideoSrc from '@/assets/product3/unit5-r.mp4'

let observer

onMounted(() => {
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target
      if (entry.isIntersecting) {
        try {
          el.currentTime = 0
          el.play()
        } catch (_) {}
      } else {
        try {
          el.pause()
        } catch (_) {}
      }
    })
  }

  observer = new IntersectionObserver(handleIntersect, { threshold: 0.2 })

  const left = document.querySelector('video.media-video[data-id="unit5-l"]')
  const right = document.querySelector('video.media-video[data-id="unit5-r"]')
  if (left) observer.observe(left)
  if (right) observer.observe(right)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div>
    <div class="unit4T">
      <div class="flex flex-col items-center mt-[48px]">
        <div class="title1">100% Rosin-Ready&nbsp;&nbsp;</div>
        <div class="title2 mt-[19.55px]">
          Savor the most natural<br />
          and rich flavors
        </div>
        <div class="title3 max-w-[1200px] mt-[-2.5px]">
          <br />
          Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene molecules
          are filtered out and the rich, natural flavors are preserved.
        </div>
        <div class="flex gap-x-[152px] mt-[70px]">
          <div class="flex flex-col items-center">
            <div class="text4 flex h-[39.805px]">
              30%

            </div>
            <div class="text5">
              Thinner in Structure
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text4 flex h-[39.805px]">
              45%
              <img src="@/assets/img/icon56.png" class="h-[39.805px] -ml-[3px]" alt="">
            </div>
            <div class="text5">
              Flavor Retention
            </div>
          </div>
        </div>
        <img src="@/assets/img/icon58.png" class="h-[600px] mt-[78px] object-contain m_mt_0" alt="">
      </div>
      <div
        class="c_padding flex mx-auto max-w-[1400px] w-full mt-[214px] justify-between pb-[155px] m_flex_warp gap-[5%] m_mt_0">
        <MediaAsset type="video" :src="leftVideoSrc" :muted="true" :autoplay="false" :loop="false" :controls="false"
          data-id="unit5-l" class="h-[740px] min-h-[500px] min-w-[300px] flex-1 w-[360px] rounded-[20px] mb-[20px]" />
        <div class="w-[500px] min-w-[400px] flex-1 flex flex-col items-center pt-[147px] m_order mb-[20px]">
          <div class="title1">Built-in wires</div>
          <div class="title2 mt-[19.55px]">No more dry burning</div>
          <div class="title3  mt-[44.45px]">
            The heating coil is embedded within the ceramic core, this way, the oil is heated by the ceramic core and
            not
            by exposed hot wires, so every draw releases rich THC and terpenes without a hint of burn, guaranteeing a
            flawless session every time.
          </div>
        </div>
        <MediaAsset type="video" :src="rightVideoSrc" :muted="true" :autoplay="false" :loop="false" :controls="false"
          data-id="unit5-r" class="h-[740px] min-h-[500px] min-w-[300px] flex-1 w-[360px] rounded-[20px] mb-[20px]" />
      </div>
    </div>
    <div class="unit4B h-[799px]" :style="{ backgroundImage: `url(${unit4Bg})` }">
      <div class="c_1230 c_padding mx-auto pt-[248px]">
        <div class="title1  ml-[2px]">
          UNICORN
        </div>
        <div class="title2 mt-[19.55px] w-max ml-[2px]">
          Nothing “basic” about it.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit4T {
  .text4 {
    // 30%
    color: #1CE785;
    font-size: 40px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
  }

  .text5 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .title {
    color: #666;
    font-family: Roboto;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .title1 {
    color: #1CE785;
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
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .text {
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text1 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .text2 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
  }

  .bar {

    height: 10px;
    flex-shrink: 0;
  }
}

.unit4B {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;


  .title1 {
    color: #FFF;
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
}
</style>