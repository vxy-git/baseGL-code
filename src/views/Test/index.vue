<template>
  <section class="sequence-section">
    <div class="sequence-sticky">
      <FrameSequence :frames="18" tarURL="/product1.tar" :imageURL="(i) => `product1/frame${i+1}.png`"
        :progress="progress" />
    </div>
    <div ref="scrollBox" class="sequence-box">
      <div class="sequence-content"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import FrameSequence from "@/components/FrameSequence.vue";

const progress = ref(0);
const scrollBox = ref(null);

function updateProgress() {
  const el = scrollBox.value;
  if (!el) return;
  const max = el.scrollHeight - el.clientHeight;
  const top = el.scrollTop;
  progress.value = max > 0 ? Math.min(Math.max(top / max, 0), 1) : 0;
}

onMounted(() => {
  updateProgress();
  scrollBox.value?.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
});

onBeforeUnmount(() => {
  scrollBox.value?.removeEventListener("scroll", updateProgress);
  window.removeEventListener("resize", updateProgress);
});
</script>

<style scoped>
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

.sequence-content {
  height: 200vh;
}

.sequence-sticky {
  width: 100%;
  height: 100vh;
}
</style>