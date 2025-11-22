<template>
  <div ref="wrapper" class="fis-wrapper"></div>
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
});

const wrapper = ref(null);
let seq = null;

// —— tar 版本真正的进度控制 ——
// 只用 seq.progress = number
watch(
  () => props.progress,
  (p) => {
    if (seq) seq.progress = p;
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
    seq.progress = props.progress;
    window.addEventListener("resize", handleResize);
    handleResize();
  } catch (err) {
    console.error("FastImageSequence 初始化失败", err);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  seq?.destroy?.();
});

function handleResize() {
  seq?.resize?.();
}
</script>

<style scoped>
.fis-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>