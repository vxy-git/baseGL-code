<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit3Data } from '@/data/customize/unit3'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit3Data)
</script>

<template>
  <section class="unit3">
    <MediaAsset :src="unitData.background" type="image" alt="" class="bgImage" />
    <div class="content c_padding c_1230">
      <span>{{ unitData.subTitle }}</span>
      <h2>{{ unitData.title }}</h2>
      <p>{{ unitData.description }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit3 {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #111;
}

.bgImage {
  position: relative;
  width: 100%;
  aspect-ratio: 3840 / 1960;
  object-fit: cover;
}

.content {
  position: absolute;
  inset: 0;
  z-index: 1;
  margin: 0 auto;
  padding-top: 147px;
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content span {
  font-size: 20px;
  line-height: 23px;
  color: #1CE785;
  margin-bottom: 10px;
}

h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  white-space: break-spaces;
  max-width: 800px;
}

p {
  margin-top: 24px;
  font-size: 20px;
  line-height: 30px;
  max-width: 762px;
}

@media screen and (max-width: $breakpoint-tablet) {
  .content {
    padding-top: 65px;
  }

  h2 {
    font-size: 24px;
    line-height: 30px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
