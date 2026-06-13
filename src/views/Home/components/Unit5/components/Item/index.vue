<script setup>
import MediaAsset from '@/components/MediaAsset.vue'

defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="item rounded-[20px] flex-shrink-0 overflow-hidden relative">
    <MediaAsset
      class="w-full h-full object-cover"
      :type="data.type || 'image'"
      :src="data.img"
      :alt="data.alt || ''"
      :lazy="false"
    />
    <div class="titleBox">
      <div class="title">
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  height: 480px;
  width: 860px;
  max-width: 100%;
}

.titleBox {
  width: 100%;
  position: absolute;
  bottom: 0;

  // height: 96px;
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 100%;
    flex-shrink: 0;
    border-radius: 0 0 20px 20px;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
  }

  .title {
    position: absolute;
    bottom: 30px;
    z-index: 1;
    color: #fff;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    padding-left: 35px;
    padding-right: 35px;
  }
}
</style>
