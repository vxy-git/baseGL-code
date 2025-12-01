<script setup>
import MediaAsset from '@/components/MediaAsset.vue';
import product1_best_L from '@/assets/product1/best-L.mp4';
import product1_best_R from '@/assets/product1/best-R.mp4';
import product1_no_L from '@/assets/product1/no-L.mp4';
import product1_no_R from '@/assets/product1/no-R.mp4';
import { ref, onMounted, onUnmounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

// 容器和可见性
const containerRef = ref(null);
const isVisible = ref(false);

// 大视频引用
const video1Ref = ref(null);
const video2Ref = ref(null);

// 小视频引用
const smallVideo1Ref = ref(null);
const smallVideo2Ref = ref(null);

// 进度值
const progress1 = ref(0);
const progress2 = ref(0);

// 大视频的匀速进度动画帧ID
const progressAnimationFrame1 = ref(null);
const progressAnimationFrame2 = ref(null);

// 事件监听器
const listeners = ref([]);

// 播放大视频并使用匀速进度条
const playLargeVideo = (videoEl, progressRef, animationFrameRef) => {
  if (!videoEl) return;

  videoEl.currentTime = 0;
  videoEl.play().catch(err => console.error('视频播放失败:', err));

  let startTime = null;
  let lastCurrentTime = 0;

  const animate = () => {
    if (!videoEl.duration || videoEl.paused) return;

    // 初始化开始时间
    if (!startTime) {
      startTime = Date.now() - (videoEl.currentTime * 1000);
    }

    // 检测视频是否真的在播放(currentTime 是否变化)
    if (videoEl.currentTime !== lastCurrentTime) {
      lastCurrentTime = videoEl.currentTime;
      startTime = Date.now() - (videoEl.currentTime * 1000);
    }

    // 计算平滑进度
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / (videoEl.duration * 1000)) * 100, 100);
    progressRef.value = progress;

    // 继续动画
    if (progress < 100) {
      animationFrameRef.value = requestAnimationFrame(animate);
    }
  };

  // 视频结束事件
  const endedHandler = () => {
    progressRef.value = 100;
    setTimeout(() => {
      videoEl.currentTime = 0;
      progressRef.value = 0;
      startTime = null;
      lastCurrentTime = 0;
      videoEl.play();
      // 重新启动动画帧,确保进度条在循环播放时继续更新
      animationFrameRef.value = requestAnimationFrame(animate);
    }, 100);
  };

  videoEl.addEventListener('ended', endedHandler);
  animationFrameRef.value = requestAnimationFrame(animate);

  // 保存监听器以便清理
  listeners.value.push({ videoEl, endedHandler, animationFrameRef });
};

// 播放小视频(无进度条,只控制播放/暂停)
const playSmallVideo = (videoEl) => {
  if (!videoEl) return;
  videoEl.currentTime = 0;
  videoEl.play().catch(err => console.error('小视频播放失败:', err));
};

// 暂停所有视频(包括大视频和小视频)
const pauseAllVideos = () => {
  const allVideos = [
    video1Ref.value,      // 大视频1
    video2Ref.value,      // 大视频2
    smallVideo1Ref.value, // 小视频1
    smallVideo2Ref.value  // 小视频2
  ];

  allVideos.forEach(ref => {
    if (ref) {
      const videoEl = ref.querySelector('video');
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    }
  });
};

// 清理所有监听器和动画帧
const clearAllListeners = () => {
  listeners.value.forEach(({ videoEl, endedHandler, animationFrameRef }) => {
    videoEl?.removeEventListener('ended', endedHandler);
    if (animationFrameRef?.value) {
      cancelAnimationFrame(animationFrameRef.value);
    }
  });
  listeners.value = [];

  // 清理独立的动画帧
  if (progressAnimationFrame1.value) {
    cancelAnimationFrame(progressAnimationFrame1.value);
    progressAnimationFrame1.value = null;
  }
  if (progressAnimationFrame2.value) {
    cancelAnimationFrame(progressAnimationFrame2.value);
    progressAnimationFrame2.value = null;
  }
};

// 开始播放所有视频
const startAllVideos = () => {
  // 大视频1 (带进度条)
  const video1 = video1Ref.value?.querySelector('video');
  if (video1) playLargeVideo(video1, progress1, progressAnimationFrame1);

  // 大视频2 (带进度条)
  const video2 = video2Ref.value?.querySelector('video');
  if (video2) playLargeVideo(video2, progress2, progressAnimationFrame2);

  // 小视频1 (无进度条)
  const smallVideo1 = smallVideo1Ref.value?.querySelector('video');
  if (smallVideo1) playSmallVideo(smallVideo1);

  // 小视频2 (无进度条)
  const smallVideo2 = smallVideo2Ref.value?.querySelector('video');
  if (smallVideo2) playSmallVideo(smallVideo2);
};

onMounted(() => {
  useIntersectionObserver(
    containerRef,
    ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting;

      if (isIntersecting) {
        startAllVideos();
      } else {
        clearAllListeners();
        pauseAllVideos();
        progress1.value = 0;
        progress2.value = 0;
      }
    },
    { threshold: 0.3 }
  );
});

onUnmounted(() => {
  clearAllListeners();
});
</script>

<template>
  <div ref="containerRef" class="mt-[507px]">
    <div class="title">
      Consistent Temp<br />
      Ideal for Rosin
    </div>
    <div class="c_1230 c_padding mt-[185px]">
      <div class="greenText">RTD Control</div>
      <div class="flex justify-between mt-[19px] gap-[20px] m_flex_col">
        <div class="title2">
          Best flavor preservation
        </div>
        <div class="label">
          Powered by Unicore tech, UNIT PRO combines smoothness with purity, ensuring efficient THC and terpene
          extraction without burning, and guarantees an exceptional session every time.
        </div>
      </div>
      <div class="flex justify-between mt-[78px] m_flex_col_r gap-[20px]">
        <div ref="smallVideo1Ref" class="img-small max-h-[500px] object-cover w-[39%] rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="product1_best_L"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            class="w-full h-full object-cover"
          />
        </div>
        <div ref="video1Ref" class="img-large max-h-[500px] object-cover w-[59.4%] rounded-[20px] overflow-hidden relative">
          <MediaAsset
            type="video"
            :src="product1_best_R"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
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
      <div class="greenText">Built-in Wires</div>
      <div class="flex justify-between mt-[19px] gap-[20px] m_flex_col">
        <div class="title2">
          No more dry burning
        </div>
        <div class="label mt-[2px]">
          The heating coil is embedded within the ceramic core, this way, the oil<br /> is heated by the ceramic core
          and not by exposed hot wires, maximizing prevention of burnt flavors and preservation.
        </div>
      </div>
      <div class="flex justify-between mt-[75px] m_flex_col gap-[20px]">
        <div ref="video2Ref" class="img-large max-h-[500px] object-cover w-[59.4%] rounded-[20px] overflow-hidden relative">
          <MediaAsset
            type="video"
            :src="product1_no_L"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
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
        <div ref="smallVideo2Ref" class="img-small max-h-[500px] object-cover w-[39%] rounded-[20px] overflow-hidden">
          <MediaAsset
            type="video"
            :src="product1_no_R"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
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