<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import leftVideo from '@/assets/product4/unit5-l.mp4'
import rightVideo from '@/assets/product4/unit5-r.mp4'

const leftContainer = ref(null)
const rightContainer = ref(null)
const leftAsset = ref(null)
const rightAsset = ref(null)

let leftObserver = null
let rightObserver = null

function handleIntersection(entry, assetRef) {
  if (entry.isIntersecting) {
    assetRef.value && assetRef.value.playFromStart()
  } else {
    assetRef.value && assetRef.value.pause()
  }
}

onMounted(() => {
  leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => handleIntersection(e, leftAsset))
  }, { threshold: 0.4 })
  rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => handleIntersection(e, rightAsset))
  }, { threshold: 0.4 })
  if (leftContainer.value) leftObserver.observe(leftContainer.value)
  if (rightContainer.value) rightObserver.observe(rightContainer.value)
})

onBeforeUnmount(() => {
  if (leftObserver) {
    leftObserver.disconnect()
    leftObserver = null
  }
  if (rightObserver) {
    rightObserver.disconnect()
    rightObserver = null
  }
})
</script>

<template>
  <div class="pt-[236px] c_1230 c_padding">
    <div class="title">
      Post-Free Design
    </div>
    <div class="w-[1227px] mx-auto mt-[142px] gap-y-[50px] flex justify-between m_flex_warp max-w-full">
      <div class="pt-[7px] max-w-full">
        <div class="gtext">
          Terpene-Boosted
        </div>
        <div class="title1">
          Get the smoothest and cleanest hit.
        </div>
        <div class="label">
          The Gemco core in dual chamber can release the purest, richest, and most authentic terpene flavors when used individually. When both chambers are engaged, it creates the most perfect flavor collision, allowing the dual aromas to swirl on your taste buds.
        </div>
        <div ref="leftContainer" class="w-[600px] h-[360px] mt-[55px] rounded-[20px] overflow-hidden max-w-full">
          <MediaAsset
            ref="leftAsset"
            type="video"
            :src="leftVideo"
            :controls="false"
            :autoplay="false"
            :muted="true"
            :loop="false"
            class="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
      <div ref="rightContainer" class="w-[500px] h-[650px] rounded-[20px] overflow-hidden">
        <MediaAsset
          ref="rightAsset"
          type="video"
          :src="rightVideo"
          :controls="false"
          :autoplay="false"
          :muted="true"
          :loop="false"
          class="w-full h-full object-cover rounded-[20px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 94px;
  background: linear-gradient(90deg, #1CE785 0%, #10814A 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gtext{
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.title1{
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 18px;
}
.label{
  width: 594px;
  height: 120px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  @apply mt-[18px];
}
</style>