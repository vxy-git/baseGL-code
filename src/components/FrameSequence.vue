<template>
  <section v-if="props.useScroll" class="sequence-section">
    <div class="sequence-sticky">
      <div ref="wrapper" class="fis-wrapper"></div>
    </div>
    <div ref="scrollBox" class="sequence-box">
      <div class="sequence-content" :style="{ height: props.scrollHeight }">
        <slot />
      </div>
    </div>
  </section>
  <div v-else ref="wrapper" class="fis-wrapper"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { FastImageSequence } from "@mediamonks/fast-image-sequence";

// Props 按 tar 的 API 完全匹配
const props = defineProps({
  frames: { type: Number, required: true },
  tarURL: { type: String, required: true },     // tar 文件路径
  imageURL: { type: Function, required: true }, // index => 路径
  progress: { type: Number, default: 0 },       // 0~1，由 GSAP 或 v-model 驱动
  objectFit: { type: String, default: "cover" },
  loop: { type: Boolean, default: false },
  useScroll: { type: Boolean, default: false },
  scrollHeight: { type: String, default: "200vh" },
});

const wrapper = ref(null);
const scrollBox = ref(null);
let seq = null;

watch(
  () => props.progress,
  (p) => {
    if (!props.useScroll && seq) seq.progress = p;
  }
);

onMounted(async () => {
  const container = wrapper.value;

  // ====== 按 tar 的方式创建 FastImageSequence ======
  seq = new FastImageSequence(container, {
    frames: props.frames,
    src: [
      {
        tarURL: props.tarURL,
        imageURL: props.imageURL,
      },
    ],
    loop: props.loop,
    objectFit: props.objectFit,
  });

  try {
    await seq.ready;
    if (props.useScroll) {
      updateProgress();
      scrollBox.value?.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress);
    } else {
      seq.progress = props.progress;
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  } catch (err) {
    console.error("FastImageSequence 初始化失败", err);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (props.useScroll) {
    scrollBox.value?.removeEventListener("scroll", updateProgress);
    window.removeEventListener("resize", updateProgress);
  }
  seq?.destroy?.();
});

function handleResize() {
  seq?.resize?.();
}

function updateProgress() {
  const el = scrollBox.value;
  if (!el || !seq) return;
  const max = el.scrollHeight - el.clientHeight;
  const top = el.scrollTop;
  const p = max > 0 ? Math.min(Math.max(top / max, 0), 1) : 0;
  seq.progress = p;
}
</script>

<style scoped>
.fis-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sequence-section {
  position: relative;
  width: 100%;
  height: 100%;
}

.sequence-box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.sequence-sticky {
  width: 100%;
  height: 100vh;
}

.sequence-content {}
</style>