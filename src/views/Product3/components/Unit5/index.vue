<script setup>
import MediaAsset from '@/components/MediaAsset.vue'

const base = import.meta.env.BASE_URL + 'static/product3/'
const tempControl = base + '3-Temperature-Control.mp4'
const batteryLifeMonitor = base + 'Battery-Life-Monitor.mp4'
const preheatStatus = base + 'Preheat-Status-Indication.mp4'
const puffCounter = base + 'Puff-Counter.mp4'
</script>

<template>
  <div class="unit5 pt-[250px] pb-[10px] c_1230 c_padding m_mt_0">
    <div class="c_1230 c_padding">
      <div class="title_tag">UNICORN PRO</div>
      <div class="title mt-[25px]">
        Smart Display
      </div>
      <div class="stitle text-center mt-[120px]">
        Upgrade your adventure
      </div>
      <div class="unit5__cards mx-auto mt-[60px] scrollbar-hide">
        <div class="unit5__row">
          <div class="unit5__card">
            <div class="tag">
              3-Temperature Control
            </div>
            <MediaAsset
              class="unit5__card-img"
              type="video"
              :src="tempControl"
              :autoplay="false"
              :muted="true"
              :loop="true"
              :controls="false"
              :hover-play="true"
            />
          </div>
          <div class="unit5__card unit5__card--wide">
            <div class="tag">
              Battery Life Monitor
            </div>
            <MediaAsset
              class="unit5__card-img"
              type="video"
              :src="batteryLifeMonitor"
              :autoplay="false"
              :muted="true"
              :loop="true"
              :controls="false"
              :hover-play="true"
            />
          </div>
        </div>
        <div class="unit5__row unit5__row--swap">
          <div class="unit5__card unit5__card--wide">
            <div class="tag">
              Preheat Status Indication
            </div>
            <MediaAsset
              class="unit5__card-img"
              type="video"
              :src="preheatStatus"
              :autoplay="false"
              :muted="true"
              :loop="true"
              :controls="false"
              :hover-play="true"
            />
          </div>
          <div class="unit5__card">
            <div class="tag">
              Dosing Timer
            </div>
            <MediaAsset
              class="unit5__card-img"
              type="video"
              :src="puffCounter"
              :autoplay="false"
              :muted="true"
              :loop="true"
              :controls="false"
              :hover-play="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title_tag {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #CAA4FB 0%, #E0B8FF 50%, #CAA4FB 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.tag {
  position: absolute;
  top: 25px;
  left: 21px;
  z-index: 1;
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gtext {
  color: #CAA4FB;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.label {
  max-width: 727px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.itemTitle {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  /* 125% */
}

.itemLabel {
  color: #F5F5F5;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 166.667% */
  opacity: .8;
}

.unit5__cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.unit5__row {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 15px;
}

.unit5__row--swap {
  grid-template-columns: 1.35fr 1fr;
}

.unit5__card {
  position: relative;
  min-height: 440px;
  border-radius: 20px;
  // background: #D9D9D9;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.unit5__card-img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  overflow: hidden;
}

.unit5__content {
  align-items: center;
}

.unit5__steps {
  gap: 12px;
}

.unit5__step img {
  border-radius: 12px;
}

.unit5__img {
  object-fit: cover;
}

@media screen and (max-width: 1200px) {
  .title {
    font-size: 64px;
    line-height: 1.05;
  }

  .stitle {
    font-size: 32px;
  }

  .unit5__img {
    width: 380px;
    height: 480px;
  }
}

@media screen and (max-width: 1024px) {
  .unit5 {
    margin-top: 160px;
    padding-bottom: 150px;
  }

  .stitle {
    margin-top: 80px;
  }

  .unit5__row,
  .unit5__row--swap {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .unit5__content {
    margin-top: 200px;
  }

  .label {
    font-size: 18px;
    line-height: 28px;
  }

  .itemTitle {
    font-size: 20px;
  }

  .itemLabel {
    font-size: 16px;
    line-height: 26px;
  }

  .unit5__img {
    width: 340px;
    height: 440px;
  }
}

@media screen and (max-width: 767px) {
  .unit5 {
    margin-top: 120px;
    padding-bottom: 120px;
  }

  .title {
    font-size: 40px;
    line-height: 1.1;
  }

  .stitle {
    font-size: 22px;
    margin-top: 50px;
  }

  .unit5__row,
  .unit5__row--swap {
    display: contents;
  }

  .unit5__card {
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  .unit5__card-img {
    margin-top: 18px;
  }

  .unit5__content {
    margin-top: 160px;
  }

  .gtext {
    font-size: 18px;
  }

  .label {
    font-size: 16px;
    line-height: 26px;
    margin-top: 32px;
  }

  .unit5__steps {
    width: 100%;
    gap: 0;
    justify-content: center;
    margin-top: 36px;
  }

  .unit5__step {
    flex: 1;
  }

  .itemTitle {
    font-size: 18px;
  }

  .itemLabel {
    font-size: 14px;
    line-height: 22px;
  }

  .unit5__img {
    width: 100%;
    max-width: 360px;
    height: auto;
    min-height: 320px;
    align-self: center;
  }
}
</style>
