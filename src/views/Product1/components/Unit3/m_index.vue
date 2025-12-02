<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import iconFlavor from '@/assets/img/icon19.png'
import iconDevice from '@/assets/img/icon18.png'
import m1 from '@/assets/product1/unit3/m1.jpg'
import m2 from '@/assets/product1/unit3/m2.jpg'
import m3 from '@/assets/product1/unit3/m3.jpg'
</script>

<template>
  <section class="sequence-wrap relative">
    <div class="size-full flex items-start justify-center">
      <div class="text-layer">
        <div class="text-block c_padding">
          <div class="title">UNICORE<br />POWERED</div>
          <MediaAsset :src="m1" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">Award-Winning</div>
          <div class="wTitle">Simply the best</div>
          <div class="text">In June 2025, UNIT PRO secured 1st place in the Live Resin vape category at the
            2025
            California State Fair Cannabis Awards. This victory is a testament to our product's excellence. With this
            market validation, we are not just confident, but eager to bring this golden standard to more brands using
            Resin and Rosin.
          </div>
          <MediaAsset :src="m2" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">A Significant Breakthrough</div>
          <div class="wTitle">U-shape design<br />Pioneering industry</div>
          <div class="text">Our patented U-shape ceramic design is the result of extensive testing and
            validation of
            various structures. It is the optimal structure for the vast majority of Resin and Rosin oils on the
            market.
          </div>
          <MediaAsset :src="m3" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
        <div class="text-block c_padding">
          <div class="smallTitle">
            100% Rosin-Ready
          </div>
          <div class="wTitle">
            Savor the most natural&nbsp;<br />
            and rich flavors
          </div>
          <div class="text !mt-[28px]">
            Our patented U-shape ceramic design is 30% thinner than ordinary ceramics, which means fewer terpene
            molecules
            are filtered out and the rich, natural flavors are preserved.
          </div>
          <div class="flex justify-center gap-x-[150px] mt-[68px]">
            <div class="flex flex-col items-center justify-center ">
              <div class="text1 h-[40px]">
                30%
              </div>
              <div class="text2">
                Thinner in Structure
              </div>
            </div>
            <div class="flex flex-col items-center h-[40px]">
              <div class="text1 flex">
                45%
                <MediaAsset class="size-[40px]" type="image" :src="iconFlavor" alt="" :lazy="false" />
              </div>
              <div class="text2">
                Flavor Retention
              </div>
            </div>
          </div>
          <MediaAsset :src="iconDevice" type="image" class="mx-auto max-h-[600px]" alt="" :lazy="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sequence-wrap {
  height: max-content;
  // overflow: hidden;
}

.text-layer {
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-block {
  padding-bottom: 150px;
  display: none;
}

.text-block:first-child,
.text-block:nth-child(2),
.text-block:nth-child(3),
.text-block:nth-child(4) {
  display: block;
  // position: absolute;
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 100% */
  background: linear-gradient(180deg, #1CE785 0%, #A8FFD5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.smallTitle {
  padding-right: 10px;
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.wTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 20px;
}

.text {
  max-width: 1200px;
  margin: 20px auto 0;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.text1 {
  color: #1CE785;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  /* 75% */
}

.text2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  margin-top: 0px;
}
</style>
