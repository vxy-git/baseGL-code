<script setup>
import { computed } from 'vue'
import { whyCaleafUnit8Data } from '@/data/why-caleaf/why-caleaf-unit8'

const props = defineProps({
  data: { type: Object, default: null }
})

const unitData = computed(() => {
  if (props.data) return { ...whyCaleafUnit8Data, ...props.data }
  return whyCaleafUnit8Data
})
</script>

<template>
  <section class="why-caleaf-connect">
    <div class="connect-container">
      <h2 class="connect-title">{{ unitData.title }}</h2>
      <div class="connect-icon">
        <img :src="unitData.instagramIcon" alt="Instagram" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-caleaf-connect {
  width: 100%;
  display: flex;
  justify-content: center;
}

.connect-container {
  max-width: $breakpoint-design;
  width: 100%;
  padding: 165px 0 0; // 6899 - end of services section
  text-align: center;
}

.connect-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 30px;
  color: #111111;
  margin-bottom: 48px; // 6977 - 6899 - 30
}

.connect-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

// 移动端适配
@media (max-width: $breakpoint-tablet) {
  .connect-container {
    padding: 80px 20px;
  }

  .connect-title {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 30px;
  }
}
</style>
