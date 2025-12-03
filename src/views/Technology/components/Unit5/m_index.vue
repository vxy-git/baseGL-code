<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import l1 from '@/assets/technology/t3/l1.mp4'
import r1 from '@/assets/technology/t3/r1.mp4'
import r2 from '@/assets/technology/t3/r2.mp4'
</script>

<template>
  <div class="relative max-w-[1702px] mt-[100px] mx-auto c_padding">
    <div class="mediaBox shrink-0">
      <MediaAsset
        :src="l1"
        type="video"
        :autoplay="false"
        :muted="true"
        :loop="false"
        :controls="false"
        :view-play="true"
        class="size-full"
        playsinline
        alt=""
      />
    </div>
    <div class="content-wrapper will-change-transform h-max">
      <div class="content1 flex flex-col items-center">
        <div class="title1">
          Built-in Wires
        </div>

        <div class="title2 mt-[23px] tracking-[0.3px]">
          No more dry burning
        </div>

        <div class="title3 mt-[23px]">
          We pay attention to every detail.<br>
          It is only when we use the highest-grade nichrome alloy as the heating coil material, shape it for uniform
          heat distribution, and embed it into the ceramic core, allowing the oil to be heated by the ceramic and not
          by
          exposed hot wires, that we say, "That's it. This is a truly perfect structure!"
        </div>
        <MediaAsset
          :src="r1"
          type="video"
          :autoplay="false"
          :muted="true"
          :loop="false"
          :controls="false"
          :view-play="true"
          class="w-[750px] mt-[66px] max-w-full"
          playsinline
          alt=""
        />
      </div>
      <div class="content2 mt-[60px] flex flex-col items-center">
        <div class="title1">
          RTD Control
        </div>

        <div class="title2 mt-[23px]">
          Consistent Temp
        </div>

        <div class="title3 mt-[25px]">
          Unicore combines smoothness with purity, ensuring efficient THC and terpene extraction without burning, and
          guarantees an exceptional session every time.
        </div>
        <MediaAsset
          :src="r2"
          type="video"
          :autoplay="false"
          :muted="true"
          :loop="false"
          :controls="false"
          :view-play="true"
          class="w-[750px] mt-[66px] max-w-full"
          playsinline
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content1 {
  width: 100%;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 418px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.1; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }


  .text1 {
    max-width: 100%;
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
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
    margin-top: 0px;
  }
}

.content2 {
  width: 100%;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 584px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.14; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }


  .text1 {
    max-width: 100%;
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
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
}
</style>
