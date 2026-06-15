<script setup>
import { ref } from 'vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/customize/unit2'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
const activeIndex = ref(0)

const setActive = index => {
  activeIndex.value = index
}

const goPrev = () => {
  const total = unitData.value.slides.length
  activeIndex.value = (activeIndex.value - 1 + total) % total
}

const goNext = () => {
  const total = unitData.value.slides.length
  activeIndex.value = (activeIndex.value + 1) % total
}
</script>

<template>
  <section class="unit2">
    <div class="c_1300 c_padding">
      <h2>{{ unitData.title }}</h2>
      <div class="demoStage">
        <button type="button" class="navButton navButtonPrev" aria-label="Previous demo" @click="goPrev">
          <span></span>
        </button>
        <div class="viewport">
          <div class="track" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
            <div v-for="slide in unitData.slides" :key="slide.image" class="slide">
              <MediaAsset :src="slide.image" type="image" :alt="slide.alt" class="slideImage" />
            </div>
          </div>
        </div>
        <button type="button" class="navButton navButtonNext" aria-label="Next demo" @click="goNext">
          <span></span>
        </button>
      </div>
      <div class="optionRow">
        <button
          v-for="(option, index) in unitData.options"
          :key="option"
          type="button"
          :class="{ active: activeIndex === index }"
          @click="setActive(index)"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit2 {
  padding: 119px 0 88px;
  background: #fff;
}

h2 {
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: center;
}

.demoStage {
  position: relative;
  margin-top: 45px;
}

.viewport {
  overflow: hidden;
  width: 100%;
  height: 600px;
}

.track {
  display: flex;
  height: 100%;
  transition: transform 0.45s ease;
}

.slide {
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
}

.slideImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navButton {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  transform: translateY(-50%);
  box-shadow: 0 12px 30px rgb(0 0 0 / 10%);
}

.navButton span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  border-top: 2px solid #111;
  border-right: 2px solid #111;
}

.navButtonPrev {
  left: 20px;
}

.navButtonPrev span {
  transform: translate(-35%, -50%) rotate(-135deg);
}

.navButtonNext {
  right: 20px;
}

.navButtonNext span {
  transform: translate(-65%, -50%) rotate(45deg);
}

.optionRow {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 29px;
}

.optionRow button {
  width: 130px;
  height: 40px;
  border: 1px solid transparent;
  background: transparent;
  color: #111;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}

.optionRow button.active {
  border-color: #111;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit2 {
    padding: 70px 0 60px;
  }

  h2 {
    font-size: 34px;
    line-height: 40px;
  }

  .viewport {
    height: auto;
    aspect-ratio: 13 / 6;
  }

  .navButton {
    width: 42px;
    height: 42px;
  }

  .optionRow {
    justify-content: center;
  }
}
</style>
