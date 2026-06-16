<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit5Data } from '@/data/extro/unit5'
import { useUnitData } from '@/composables/useUnitData'

const props = defineProps({
  data: { type: Object, default: null },
})

const unitData = useUnitData(props, unit5Data)
</script>

<template>
  <section class="unit5 mt-[202px] pb-[202px]">
    <div class="c_1230 c_padding">
      <h2 class="title">{{ unitData.mainTitle }}</h2>

      <div class="cards mx-auto mt-[60px] scrollbar-hide">
        <div class="row">
          <div class="card">
            <div class="tag">{{ unitData.upgradeCards[0].tag }}</div>
            <div class="card-img">
              <MediaAsset
                type="video"
                :src="unitData.upgradeCards[0].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="card card--wide">
            <div class="tag">{{ unitData.upgradeCards[1].tag }}</div>
            <div class="card-img">
              <MediaAsset
                type="video"
                :src="unitData.upgradeCards[1].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="row row--swap">
          <div class="card card--wide">
            <div class="tag">{{ unitData.upgradeCards[2].tag }}</div>
            <div class="card-img">
              <MediaAsset
                type="video"
                :src="unitData.upgradeCards[2].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="card">
            <div class="tag">{{ unitData.upgradeCards[3].tag }}</div>
            <div class="card-img">
              <MediaAsset
                type="video"
                :src="unitData.upgradeCards[3].video"
                :autoplay="false"
                :muted="true"
                :loop="true"
                :controls="false"
                :hover-play="true"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  color: #1ce785;
}

.tag {
  position: relative;
  z-index: 1;
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.35);
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

.unit5 {
  background: #000;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 15px;
}

.row--swap {
  grid-template-columns: 1.35fr 1fr;
}

.card {
  position: relative;
  min-height: 440px;
  border-radius: 20px;
  padding: 25px 21px 21px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-img {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  overflow: hidden;

  :deep(video),
  :deep(.media-video) {
    transition: transform 0.3s ease-in-out;
  }
}

@media screen and (max-width: $breakpoint-medium) {
  .title {
    font-size: 64px;
  }
}

@media screen and (max-width: $breakpoint-tablet) {
  .unit5 {
    margin-top: 160px;
    padding-bottom: 150px;
  }

  .row,
  .row--swap {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit5 {
    margin-top: 120px;
    padding-bottom: 120px;
  }

  .title {
    font-size: 40px;
  }

  .row,
  .row--swap {
    display: contents;
  }

  .card {
    flex-shrink: 0;
    scroll-snap-align: start;
  }
}
</style>
