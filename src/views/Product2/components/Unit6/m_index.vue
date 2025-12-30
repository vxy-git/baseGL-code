<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product2Unit6Data } from '@/data/product2-unit6'
</script>

<template>
  <div class="unit6-scroll">
    <div class="unit6-inner">
      <div class="unit6-track">
        <div class="unit6-panel">
          <div class="c_1230 c_padding w-full">
            <div class="relative w-full mx-[4px] flex flex-col items-center justify-center">
              <div class="style-line">
                <span class="line"></span>
                <span class="mask mask_l"></span>
                <span class="mask mask_r"></span>
              </div>
              <div class="title">{{ product2Unit6Data.mainTitle }}</div>
            </div>
          </div>
        </div>

        <div class="unit6-panel" v-for="(panel, index) in product2Unit6Data.panelsList" :key="index">
          <div class="c_1230 c_padding">
            <div>
              <div class="w-full flex justify-between mx-auto gap-[43px] m_flex_col">
                <div>
                  <div class="btn mt-[3px]">{{ panel.btn }}</div>
                  <div class="title1">{{ panel.title }}</div>
                  <div class="title2">{{ panel.description }}</div>
                </div>
                <div class="shrink-0 h-[340px] w-[560px] rounded-[20px] bg-black">
                  <MediaAsset :type="panel.mediaType" :src="panel.mediaSrc" autoplay muted playsinline loop :controls="false"></MediaAsset>
                </div>
              </div>
              <div class="title3 mt-[70px]">
                {{ product2Unit6Data.trackPrefix }}
                <span class="mx-[10px]">|</span>
                <span class="num inline-block">{{ panel.number }}</span></div>
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
  padding: 10vh 0;
}

.unit6-track {
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform;
  gap: 10vh;
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