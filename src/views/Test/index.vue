<template>
  <FrameSequence
    :frames="18"
    tarURL="/product1.tar"
    :imageURL="(i) => `product1/frame${i+1}.png`"
    :progress="progress"
  />

  <input type="range" min="0" max="1" step="0.001" v-model.number="progress" />
</template>

<script setup>
import { ref } from "vue";
import FrameSequence from "@/components/FrameSequence.vue";

const progress = ref(0);
</script>