<script setup>
const logo1 = 'https://img.cloudcode.ink/assets/product4/Advanced-Interactivity.jpg';
const logo2 = 'https://img.cloudcode.ink/assets/product4/Dual-Chamber.jpg';
const logo3 = 'https://img.cloudcode.ink/assets/product4/Multiple-Options.jpg';
const logo4 = 'https://img.cloudcode.ink/assets/product4/Post-Free.jpg';
import MediaAsset from '@/components/MediaAsset.vue'
</script>

<template>
  <div class="flex flex-col gap-y-[20px] pt-[110px] c_1230 c_padding">
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">Dual Chamber</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="logo2" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">Post-Free</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="logo4" alt="" />
      </div>
    </div>
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">Multiple Options</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="logo3" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">Advanced Interactivity</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="logo1" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>