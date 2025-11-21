<script setup>

</script>

<template>
  <div class=" unit7 mt-[202px] pb-[202px]">
    <div class="c_1230 c_padding">
      <div class="title">
        Smart Display
      </div>
      <div class="stitle text-center mt-[120px]">
        Upgrade your adventure
      </div>
      <div class="unit7__cards mx-auto mt-[60px] scrollbar-hide">
        <div class="unit7__row">
          <div class="unit7__card">
            <div class="tag">
              3-Temperature Control
            </div>
            <img class="unit7__card-img" src="" alt="">
          </div>
          <div class="unit7__card unit7__card--wide">
            <div class="tag">
              Battery Life Monitor
            </div>
            <img class="unit7__card-img" src="" alt="">
          </div>
        </div>
        <div class="unit7__row unit7__row--swap">
          <div class="unit7__card unit7__card--wide">
            <div class="tag">
              Preheat Status Indication
            </div>
            <img class="unit7__card-img" src="" alt="">
          </div>
          <div class="unit7__card">
            <div class="tag">
              Activation Indication
            </div>
            <img class="unit7__card-img" src="" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="unit7__content c_padding c_1230 flex justify-between mt-[267px] gap-[20px] m_flex_col_r">
      <div class="unit7__text mt-[25px]">
        <div class="gtext">
          The Enhanced
        </div>
        <div class="stitle mt-[20px]">
          One-Button Control
        </div>
        <div class="label mt-[44px]">
          With just one button, you can easily turn on/off, pre-heat, and adjust temperature settings. Take full
          control of your experience and embark on your own unique adventure.Take full control of your experience with
          the one-button controls for pre-heating, temperature settings, and child safety lock.
        </div>
        <div class="unit7__steps flex mt-[66px] justify-between max-w-[602px]">
          <div class="unit7__step flex flex-col items-center">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">1 Tap</div>
            <div class="itemLabel mt-[4px]">Check temp</div>
          </div>
          <div class="unit7__step flex flex-col items-center">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">2 Taps</div>
            <div class="itemLabel mt-[4px]">Warm up</div>
          </div>
          <div class="unit7__step flex flex-col items-center">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">3 Taps</div>
            <div class="itemLabel mt-[4px]">Change temp</div>
          </div>
          <div class="unit7__step flex flex-col items-center">
            <img class="size-[80px] bg-[#D9D9D9]" src="" alt="">
            <div class="itemTitle mt-[19px]">5 Taps</div>
            <div class="itemLabel mt-[4px]">Turn on/off</div>
          </div>
        </div>
      </div>
      <img class="unit7__img w-[450px] h-[540px] rounded-[20px] bg-[#D9D9D9]" src="" alt="">
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
  line-height: 80px;
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
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #FFF;
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
  background: #D9D9D9;
  padding: 25px 21px 21px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.unit7__card-img {
  flex: 1;
  width: 100%;
  border-radius: 14px;
  background: #D9D9D9;
  object-fit: cover;
  margin-top: 24px;
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
    line-height: 1.1;
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

  .unit7__card-img {
    margin-top: 18px;
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
