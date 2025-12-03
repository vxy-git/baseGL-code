<script setup>
import MediaAsset from '@/components/MediaAsset.vue'

import videoTemp from '@/assets/product4/3-Temperature-Control.mp4'
import videoBattery from '@/assets/product4/Battery-Life-Monitor.mp4'
import videoPreheat from '@/assets/product4/Preheat-Status-Indication.mp4'
import videoPuff from '@/assets/product4/Puff-Counter.mp4'
</script>

<template>
  <div class="pt-[392px] pb-[215px]">
    <div class="c_1300 mx-auto">
      <div class="justify-between flex">
        <div class="bg-[#D9D9D9] h-[440px] w-[520px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            Dosing Timer
          </div>
          <MediaAsset
            type="video"
            :src="videoPuff"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[440px] w-[695px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            Preheat Status Indication
          </div>
          <MediaAsset
            type="video"
            :src="videoPreheat"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="justify-between flex mt-[15px]">
        <div class="h-[440px] w-[695px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            3-Temperature Control
          </div>
          <MediaAsset
            type="video"
            :src="videoTemp"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-[#D9D9D9] h-[440px] w-[520px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            Battery Life Monitor
          </div>
          <MediaAsset
            type="video"
            :src="videoBattery"
            :autoplay="false"
            :muted="true"
            :loop="true"
            :controls="false"
            :hoverPlay="true"
            class="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.tag{
  padding: 0 30px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
