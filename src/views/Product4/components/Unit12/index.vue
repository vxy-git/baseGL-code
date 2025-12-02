<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import icon41 from '@/assets/img/icon41.png'
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-[#F8F9FD]">
    <div class="title flex justify-center items-center">
      GO
      <div class="size-[261px] relative">
        <div
          class="size-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="min-w-full min-h-full">
            <MediaAsset
              class="size-full object-cover"
              type="image"
              :src="icon41"
              alt=""
              :lazy="false"
            />
          </div>
        </div>
      </div>
      Creative
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 150px;
  font-style: normal;
  font-weight: 700;
  line-height: 261px;
  /* 53.333% */
  display: flex;
  justify-content: center;
  gap: 32px;
}
</style>
