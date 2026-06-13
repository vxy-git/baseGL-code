<template>
  <section v-if="props.useScroll" class="sequence-section">
    <div class="sequence-sticky">
      <div ref="wrapper" class="fis-wrapper" :style="{ '--fis-object-fit': props.objectFit }"></div>
    </div>
    <div ref="scrollBox" class="sequence-box">
      <div class="sequence-content" :style="{ height: props.scrollHeight }">
        <slot />
      </div>
    </div>
  </section>
  <div v-else ref="wrapper" class="fis-wrapper" :style="{ '--fis-object-fit': props.objectFit }"></div>
</template>

<script>
// defineProps 中被 hoist 引用的常量，需放在普通 <script> 块中
// eslint-disable-next-line no-undef
const DEFAULT_CDN_URL = import.meta.env.VITE_BASE_URL || "";
</script>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
import { FastImageSequence } from "@mediamonks/fast-image-sequence";
import { logger } from '@/utils/logger'

// Props 按 tar 的 API 完全匹配
const props = defineProps({
  frames: { type: Number, required: true },
  tarURL: { type: String, required: true },     // tar 文件路径
  imageURL: { type: Function, required: false }, // index => 路径（可选，用于向后兼容）
  imageFile: { type: String, required: false }, // 图片文件路径（如 "product1"）
  imageName: { type: String, required: false }, // 图片名称（如 "frame"）
  imageExtension: { type: String, default: ".jpg" }, // 图片扩展名（默认 .jpg）
  progress: { type: Number, default: 0 },       // 0~1，由 GSAP 或 v-model 驱动
  objectFit: { type: String, default: "cover" },
  loop: { type: Boolean, default: false },
  useScroll: { type: Boolean, default: false },
  scrollHeight: { type: String, default: "200vh" },
  cdnUrl: { type: String, default: DEFAULT_CDN_URL },
});

const resolvedCdnUrl = computed(() => props.cdnUrl || DEFAULT_CDN_URL);
const isAbsolute = (val = "") => /^(https?:)?\/\//.test(val) || /^(data|blob):/.test(val);
const normalizePath = (val = "") => (val.startsWith("/") ? val : `/${val}`).replace(/^\/+/, "/");
const withCdn = (val = "") => {
  if (isAbsolute(val)) return val;
  const base = resolvedCdnUrl.value.replace(/\/+$/, "");
  const path = normalizePath(val);
  return `${base}${path}`;
};

// 根据 tarURL 和 imageName 生成 imageURL 函数
const generateImageURL = (tarURL, imageFile, imageName, extension = ".jpg") => {
  // 从 tarURL 提取纯文件名（不含路径和扩展名）
  // "/api/uploads/file/default/product1.tar" → "product1"
  // "/path/to/product3_1.tar" → "product3_1"
  // const fileName = tarURL.split('/').pop().replace(/\.tar$/, "");
  // 确保扩展名以点号开头（兼容 "jpg" 和 ".jpg" 两种格式）
  const normalizedExtension = extension.startsWith('.') ? extension : `.${extension}`;
  // 返回函数：(i) => `product1/frame${i + 1}.jpg` (tar 文件内部的相对路径)
  return (i) => `${imageFile}/${imageName}${i + 1}${normalizedExtension}`;
};

// 计算最终的 imageURL 函数（支持向后兼容）
const finalImageURL = computed(() => {
  // 优先使用传入的函数（向后兼容）
  if (typeof props.imageURL === "function") {
    return props.imageURL;
  }
  // 否则根据 tarURL 和 imageName 生成
  if (props.tarURL && props.imageName) {
    return generateImageURL(props.tarURL, props.imageFile, props.imageName, props.imageExtension);
  }
  logger.error("FrameSequence: 缺少 imageURL 或 (tarURL + imageName)");
  return (i) => `frame${i}.jpg`;
});

const getImagePath = (index) => finalImageURL.value(index);

const wrapper = ref(null);
const scrollBox = ref(null);
let seq = null;

watch(
  () => props.progress,
  (p) => {
    if (!props.useScroll && seq) seq.progress = p;
  }
);

let isUnmounted = false

onMounted(async () => {
  const container = wrapper.value;

  // ====== 按 tar 的方式创建 FastImageSequence ======
  seq = new FastImageSequence(container, {
    frames: props.frames,
    src: [
      {
        tarURL: withCdn(props.tarURL),
        // imageURL 需与 tar 内路径一致，这里不追加 CDN 前缀
        imageURL: getImagePath,
      },
    ],
    loop: props.loop,
    objectFit: props.objectFit,
    clearCanvas: true,
  });

  try {
    await seq.ready;
    if (isUnmounted) return;
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
    logger.error("FastImageSequence 初始化失败", err);
  }
});

onBeforeUnmount(() => {
  isUnmounted = true
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
  position: relative;
}
.fis-wrapper > canvas,
.fis-wrapper > img,
.fis-wrapper > video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: var(--fis-object-fit, cover);
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


</style>
