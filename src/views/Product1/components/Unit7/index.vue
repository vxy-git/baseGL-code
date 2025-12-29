<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit7Data  } from '@/data/product1-unit7'
</script>

<template>
  <div class=" unit7 mt-[202px] pb-[202px]">
    <div class="c_1230 c_padding">
      <div class="title">
        {{ product1Unit7Data.mainTitle }}
      </div>
      <div class="stitle text-center mt-[120px]">
        {{ product1Unit7Data.subTitle }}
      </div>
      <div class="unit7__cards mx-auto mt-[60px] scrollbar-hide">
        <div class="unit7__row">
          <div class="unit7__card">
            <div class="tag">
              {{ product1Unit7Data.upgradeCards[0].tag }}
            </div>
            <div class="unit7__card-img">
              <MediaAsset
                type="video"
                :src="product1Unit7Data.upgradeCards[0].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="unit7__card unit7__card--wide">
            <div class="tag">
              {{ product1Unit7Data.upgradeCards[1].tag }}
            </div>
            <div class="unit7__card-img">
              <MediaAsset
                type="video"
                :src="product1Unit7Data.upgradeCards[1].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="unit7__row unit7__row--swap">
          <div class="unit7__card unit7__card--wide">
            <div class="tag">
              {{ product1Unit7Data.upgradeCards[2].tag }}
            </div>
            <div class="unit7__card-img">
              <MediaAsset
                type="video"
                :src="product1Unit7Data.upgradeCards[2].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="unit7__card">
            <div class="tag">
              {{ product1Unit7Data.upgradeCards[3].tag }}
            </div>
            <div class="unit7__card-img">
              <MediaAsset
                type="video"
                :src="product1Unit7Data.upgradeCards[3].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="unit7__content c_padding c_1230 flex justify-between mt-[267px] gap-[20px] m_flex_col_r">
      <div class="unit7__text">
        <div class="gtext">
          {{ product1Unit7Data.oneButtonControl.greenText }}
        </div>
        <div class="stitle mt-[20px]">
          {{ product1Unit7Data.oneButtonControl.title }}
        </div>
        <div class="label mt-[44px]">
          {{ product1Unit7Data.oneButtonControl.description }}
        </div>
        <div class="unit7__steps flex mt-[66px] justify-between max-w-[602px]">
          <div v-for="(step, index) in product1Unit7Data.oneButtonControl.steps" :key="index" class="unit7__step flex flex-col items-center">
            <MediaAsset
              class="size-[80px]"
              type="image"
              :src="step.icon"
              alt=""
              :lazy="false"
            />
            <div class="itemTitle mt-[19px]">{{ step.title }}</div>
            <div class="itemLabel mt-[4px]">{{ step.label }}</div>
          </div>
        </div>
      </div>
      <div class="unit7__img w-[450px] h-[540px]">
        <MediaAsset
          type="video"
          :src="product1Unit7Data.oneButtonControl.video"
          :autoplay="true"
          :muted="true"
          :loop="true"
          :controls="false"
          :hover-play="false"
          :view-play="true"
          class="w-full h-full object-cover rounded-[20px] bg-black overflow-hidden"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  // line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
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
  position: relative;
  z-index: 1;
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.35);
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
  color: #1CE785;
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

.unit7__cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.unit7__row {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 15px;
}

.unit7__row--swap {
  grid-template-columns: 1.35fr 1fr;
}

.unit7__card {
  position: relative;
  min-height: 440px;
  border-radius: 20px;
  // background: #D9D9D9;
  padding: 25px 21px 21px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.unit7__card-img {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  // background: #D9D9D9;
  object-fit: cover;
  overflow: hidden;

  :deep(video),
  :deep(.media-video) {
    transition: transform 0.3s ease-in-out;

    // &:hover {
    //   transform: scale(1.1);
    // }
  }
}

.unit7__content {
  align-items: center;
}

.unit7__steps {
  gap: 12px;
}

.unit7__step img {
  border-radius: 12px;
}

.unit7__img {
  overflow: hidden;
  border-radius: 20px;

  :deep(video),
  :deep(.media-video) {
    transition: transform 0.3s ease-in-out;

    // &:hover {
    //   transform: scale(1.1);
    // }
  }
}

@media screen and (max-width: 1200px) {
  .title {
    font-size: 64px;
    // line-height: 1.05;
  }

  .stitle {
    font-size: 32px;
  }

  .unit7__img {
    width: 380px;
    height: 480px;
  }
}

@media screen and (max-width: 1024px) {
  .unit7 {
    margin-top: 160px;
    padding-bottom: 150px;
  }

  .stitle {
    margin-top: 80px;
  }

  .unit7__row,
  .unit7__row--swap {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .unit7__content {
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

  .unit7__img {
    width: 340px;
    height: 440px;
  }
}

@media screen and (max-width: 767px) {
  .unit7 {
    margin-top: 120px;
    padding-bottom: 120px;
  }

  .title {
    font-size: 40px;
    // line-height: 1.1;
  }

  .stitle {
    font-size: 22px;
    margin-top: 50px;
  }

  .unit7__row,
  .unit7__row--swap {
    display: contents;
  }

  .unit7__card {
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  .unit7__content {
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

  .unit7__steps {
    width: 100%;
    gap: 0;
    justify-content: center;
    margin-top: 36px;
  }

  .unit7__step {
    flex: 1;
  }

  .itemTitle {
    font-size: 18px;
  }

  .itemLabel {
    font-size: 14px;
    line-height: 22px;
  }

  .unit7__img {
    width: 100%;
    max-width: 360px;
    height: auto;
    min-height: 320px;
    align-self: center;
  }
}
</style>