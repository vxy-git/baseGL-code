<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import icon19 from '@/assets/img/icon19.png'
import b3 from '@/assets/technology/b3.mp4'
import m1 from '@/assets/technology/t2/m1.jpg'
import bgVideo from '@/assets/technology/t2/bg.mp4'
</script>

<template>
  <div class="relative mt-[100px] w-full bg-[#111111] overflow-hidden">
    <MediaAsset type="video" :src="bgVideo" :autoplay="false" :muted="true" :loop="false"
      :controls="false" preload="auto" playsinline alt="" class="w-full object-cover" />

    <div class="size-full overflow-hidden c_padding">
      <div class="relative z-[2] h-full w-full pt-[45px]">
        <div class="shrink-0 w-full">
          <div class="w-[600px] max-w-[90vw]">
            <div class="flex flex-col">
              <div class="text1 flex items-center">
                <MediaAsset class="size-[40px] scale-75 -translate-y-[2px] -translate-x-[2px] -ml-[14px]" type="image"
                  :src="icon19" alt="" />
                20% at firing temp
              </div>
            </div>

            <div class="title2 mt-[8px] ">
              Aerospace-grade<br>
              high thermal conductivity.
            </div>

            <div class="title3 mt-[32px]">
              We never let existing rules and regulations hold us back. We pioneered the incorporation of
              aerospace-grade high thermal conductivity materials into ceramics. Through round-the-clock firing and
              suction tests, we have finally succeeded in firing the ceramic at 1832 °F (1000 ℃), surpassing our peers
              by 20%.
            </div>
          </div>
          <MediaAsset type="image" :src="m1" alt="" class="w-[640px] h-[341px] object-contain" />
        </div>
        <div class="w-full shrink-0 mt-[60px]">
          <div class="flex flex-col">
            <div class="text1 flex items-center">
              <MediaAsset class="size-[40px] scale-75 -translate-y-[2px] -translate-x-[2px] -ml-[14px]" type="image"
                :src="icon19" alt="" />
              33% in pore uniformity
            </div>
          </div>

          <div class="title2 mt-[8px] ">
            Ideal for Rosin's molecular structure.
          </div>

          <div class="title3 mt-[32px]">
            UNICORE features an extremely uniform ceramic pore structure that is ideally suited to the molecular
            structure of Resin and Rosin. Not a single pore will ever suffer from dry burning, ensuring the best
            performance from beginning to end.
          </div>
        </div>
        <div class="w-full mt-[60px]">
          <MediaAsset ref="videoAssetRef" type="video" :src="b3" :autoplay="false" :muted="true" :loop="false"
            :controls="false" preload="auto" playsinline alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title1 {
  max-width: 100%;
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}


.text1 {
  max-width: 100%;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}

.title2 {
  max-width: 100%;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.14; // 缩短行间距
  letter-spacing: .8px;
}

.title3 {
  max-width: 100%;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.percentage {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
}

.text2 {
  max-width: 100%;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  margin-top: 5px;
}

@media screen and (max-width: 1600px) {
  .m_fit {
    width: 100px;
  }
}

@media screen and (max-width: 1400px) {
  .m_fit {
    width: 200px;
  }
}

@media screen and (max-width: 1200px) {
  .m_fit {
    width: 300px;
  }
}

@media screen and (max-width: 1000px) {
  .m_fit {
    width: 400px;
  }
}


@media screen and (max-width: 800px) {
  .m_fit {
    width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .m_fit {
    width: 600px;
  }
}
</style>
