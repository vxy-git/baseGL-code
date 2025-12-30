<script setup>
import MediaAsset from '@/components/MediaAsset.vue';
import { product1Unit4Data  } from '@/data/product1/product1-unit4'
import { ref } from 'vue';

const progress1 = ref(0);
const progress2 = ref(0);

const updateProgress = (e, progressRef) => {
  const el = e?.target;
  if (!el || !el.duration) {
    progressRef.value = 0;
    return;
  }
  progressRef.value = Math.min(100, (el.currentTime / el.duration) * 100);
};

const resetProgress = (progressRef) => {
  progressRef.value = 0;
};

const handleProgress1 = (e) => updateProgress(e, progress1);
const handleProgress2 = (e) => updateProgress(e, progress2);
const handleReset1 = () => resetProgress(progress1);
const handleReset2 = () => resetProgress(progress2);
</script>

<template>
  <div class="mt-[507px] m_mt_0">
    <div class="title whitespace-break-spaces">
      {{ product1Unit4Data.mainTitle }}
    </div>
    <div class="c_1230 c_padding mt-[185px]">
      <div class="greenText">{{ product1Unit4Data.section1.greenText }}</div>
      <div class="flex justify-between mt-[19px] gap-[20px] m_flex_col">
        <div class="title2">
          {{ product1Unit4Data.section1.title }}
        </div>
        <div class="label">
          {{ product1Unit4Data.section1.description }}
        </div>
      </div>
      <div class="flex justify-between mt-[78px] m_flex_col_r gap-[20px]">
        <div ref="smallVideo1Ref" class="img-small max-h-[500px] object-cover w-[39%] rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="product1Unit4Data.section1.videos.left"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden relative">
          <MediaAsset
            type="video"
            :src="product1Unit4Data.section1.videos.right"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :view-play="true"
            @timeupdate="handleProgress1"
            @ended="handleReset1"
            @pause="handleReset1"
            class="w-full h-full object-cover"
          />

          <!-- 进度条 -->
          <div class="progress-bar-container">
            <div
              class="progress-bar"
              :style="{ width: `${progress1}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="c_1230 c_padding mt-[228px]">
      <div class="greenText">{{ product1Unit4Data.section2.greenText }}</div>
      <div class="flex justify-between mt-[19px] gap-[20px] m_flex_col">
        <div class="title2">
          {{ product1Unit4Data.section2.title }}
        </div>
        <div class="label mt-[2px]">
          {{ product1Unit4Data.section2.description }}
        </div>
      </div>
      <div class="flex justify-between mt-[75px] m_flex_col gap-[20px]">
        <div class="img-large h-[500px] object-cover w-auto rounded-[20px] overflow-hidden relative">
          <MediaAsset
            type="video"
            :src="product1Unit4Data.section2.videos.left"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :view-play="true"
            @timeupdate="handleProgress2"
            @ended="handleReset2"
            @pause="handleReset2"
            class="w-full h-full object-cover"
          />

          <!-- 进度条 -->
          <div class="progress-bar-container">
            <div
              class="progress-bar"
              :style="{ width: `${progress2}%` }"
            ></div>
          </div>
        </div>
        <div ref="smallVideo2Ref" class="img-small h-[500px] object-cover w-auto rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="product1Unit4Data.section2.videos.right"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :view-play="true"
            class="w-full h-full object-cover"
          />
        </div>
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
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.greenText {
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.label {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  width: 622.074px;
  flex-shrink: 0;
}

// 进度条容器
.progress-bar-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0);
  z-index: 20;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

// 绿色进度条
.progress-bar {
  height: 100%;
  // background: #1CE785;
  background-color: transparent;
  transition: width 0.05s linear;
  border-bottom-left-radius: 20px;
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 48px;
    line-height: 52px;
    text-align: center;
  }

  .greenText {
    font-size: 18px;
    text-align: center;
  }

  .title2 {
    font-size: 28px;
    text-align: center;
  }

  .label {
    width: 100% !important;
    text-align: center;
    margin-top: 10px;
  }

  .img-small,
  .img-large {
    width: 100% !important;
    height: auto !important;
    margin-top: 15px;
  }
}
</style>