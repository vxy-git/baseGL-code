<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useIntersectionObserver } from "@vueuse/core";
import MediaAsset from "@/components/MediaAsset.vue";
import { product1Unit8Data  } from '@/data/product1-unit8'

const list = product1Unit8Data.designImages

const bannerCurrent = ref(0);
const splideRef = ref(null);
const canSlidePrev = ref(true);
const canSlideNext = ref(true);
const isHovered = ref(false);
const isMobile = ref(false);

// 进度条和播放相关变量
const containerRef = ref(null);
const isVisible = ref(false);
const mediaRefs = ref([]);
const progressValues = ref([]);
const progressTimers = ref([]);
const playSessionId = ref(0);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 767;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);

  // 初始化进度条数组
  initProgress();

  // 使用 Intersection Observer 监听可见性
  useIntersectionObserver(
    containerRef,
    ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting;

      if (isIntersecting) {
        // 进入视口,开始播放当前幻灯片
        if (splideRef.value) {
          playCurrentSlide(splideRef.value.index);
        }
      } else {
        // 离开视口,清理所有定时器和视频
        clearAllTimers();
        pauseAllVideos();
        initProgress();
      }
    },
    { threshold: 0.3 }
  );
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
  clearAllTimers();
  pauseAllVideos();
});

const splideOptions = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1.25rem",
  speed: 800,
  arrows: false,
  pagination: false,
  drag: false,
  keyboard: false,
  width: "100vw",
  fixedWidth: "50rem",
  focus: "center",
  autoplay: false,
};

const updateArrowStatus = (splide) => {
  canSlidePrev.value = true;
  canSlideNext.value = true;
  bannerCurrent.value = splide.index;
};

const changeEnd = (splide) => {
  updateArrowStatus(splide);
};

const onSlideChange = (splide) => {
  updateArrowStatus(splide);
  if (isVisible.value) {
    playCurrentSlide(splide.index);
  }
};

const onSplideInit = (splide) => {
  splideRef.value = splide;
  updateArrowStatus(splide);
};

const slidePrev = () => {
  splideRef.value?.go("<");
};

const slideNext = () => {
  splideRef.value?.go(">");
};

const goToSlide = (index) => {
  splideRef.value?.go(index);
};

// 初始化进度条
const initProgress = () => {
  progressValues.value = list.map(() => 0);
};

// 清除所有定时器
const clearAllTimers = () => {
  progressTimers.value.forEach((timer) => {
    if (timer) {
      clearTimeout(timer);
      cancelAnimationFrame(timer);
    }
  });
  progressTimers.value = [];
};

// 暂停所有视频
const pauseAllVideos = () => {
  mediaRefs.value.forEach((mediaRef) => {
    if (mediaRef && mediaRef.$el) {
      const videoElement = mediaRef.$el.querySelector('video');
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.removeEventListener('timeupdate', () => {});
        videoElement.removeEventListener('ended', () => {});
      }
    }
  });
};

// 播放当前幻灯片
const playCurrentSlide = (index) => {
  const currentSessionId = ++playSessionId.value;
  const stopIfStale = () => currentSessionId !== playSessionId.value;

  clearAllTimers();
  pauseAllVideos();
  initProgress();

  const media = list[index];
  const mediaRef = mediaRefs.value[index];

  if (!mediaRef || !mediaRef.$el) return;

  setTimeout(() => {
    if (stopIfStale()) return;

    if (media.type === 'video') {
      const videoElement = mediaRef.$el.querySelector('video');
      if (videoElement) {
        const updateProgress = () => {
          if (stopIfStale()) return;
          const { currentTime, duration } = videoElement;
          if (duration > 0) {
            progressValues.value[index] = (currentTime / duration) * 100;
          }
        };

        const onEnded = () => {
          if (stopIfStale()) return;
          goToNext();
        };

        videoElement.addEventListener('timeupdate', updateProgress);
        videoElement.addEventListener('ended', onEnded);
        videoElement.play();
      }
    } else {
      // 图片类型：10秒动画
      const startTime = Date.now();
      const duration = 10000;

      const animate = () => {
        if (stopIfStale()) return;

        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        progressValues.value[index] = progress;

        if (progress < 100) {
          progressTimers.value[index] = requestAnimationFrame(animate);
        } else {
          goToNext();
        }
      };

      progressTimers.value[index] = requestAnimationFrame(animate);
    }
  }, 500);
};

// 自动切换到下一张
const goToNext = () => {
  const currentIndex = splideRef.value.index;
  const totalSlides = list.length;

  if (currentIndex === totalSlides - 1) {
    splideRef.value.go(0);
  } else {
    splideRef.value.go('+1');
  }
};

// 设置媒体引用
const setMediaRef = (el, index) => {
  // 只在首次设置时保存 ref,避免 Splide loop 模式克隆节点重复调用
  if (el && el.$el && !mediaRefs.value[index]) {
    mediaRefs.value[index] = el;
  }
};
</script>

<template>
  <div class="pt-[110px] bg-white pb-[148px]" ref="containerRef">
    <div class="label text-center">{{ product1Unit8Data.labelText }}</div>
    <div class="title text-center mt-[20px]">{{ product1Unit8Data.titleText }}</div>
    <div class="mt-[58px] relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div class="w-full">
        <Splide :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange"
          @splide:move="changeEnd">
          <SplideSlide class="h-[500px] max-w-[94vw]" v-for="(media, index) in list" :key="index">
            <div class="media-wrapper relative w-full h-full rounded-[20px] overflow-hidden"
              :class="{ 'is-active': index === bannerCurrent }">
              <!-- 黑色遮罩层 -->
              <div class="overlay"></div>

              <!-- MediaAsset 组件 -->
              <MediaAsset :ref="el => setMediaRef(el, index)" :type="media.type" :src="media.src" :alt="media.alt"
                :poster="media.poster" :autoplay="false" :muted="true" :loop="false" :controls="false" :lazy="false"
                class="media-content w-full h-full object-cover rounded-[20px]" />

              <!-- 进度条容器 -->
              <div
                class="progress-bar-container absolute bottom-0 left-0 right-0 h-[4px] bg-gray-200/30 rounded-b-[20px] overflow-hidden">
                <div class="progress-bar h-full bg-[#1CE785] transition-all duration-100"
                  :style="{ width: `${progressValues[index] || 0}%` }"></div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div class="size-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[1000px] mx-auto">
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          type="image"
          :src="product1Unit8Data.arrowIcon"
          alt=""
          :lazy="false"
          @click="slidePrev"
        />
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          type="image"
          :src="product1Unit8Data.arrowIcon"
          alt=""
          :lazy="false"
          @click="slideNext"
        />
      </div>
    </div>
    <!-- <div class="flex justify-center gap-x-[10px] pt-[26px]">
      <div
        v-for="(item,index) in list"
        :class="{ '!bg-black !w-[30px]': bannerCurrent === index }"
        :key="index"
        class="dotItem cursor-pointer"
        @click="goToSlide(index)"
      ></div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.label {
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.dotItem {
  width: 10px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}

.media-wrapper {
  position: relative;
  overflow: hidden;
}

// 黑色透明遮罩层
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  pointer-events: none;
  border-radius: 20px;
  opacity: 1;
  transition: opacity 2000ms ease-out; // 500ms 淡出过渡
}

.media-content {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// 当前激活的 Slide，遮罩透明
.media-wrapper.is-active .overlay {
  opacity: 0;
}

.progress-bar-container {
  z-index: 20;
}

.progress-bar {
  transition: width 100ms linear;
}
</style>