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
    <div class="content c_padding">
      <h2>{{ unitData.title }}</h2>
      <p>{{ unitData.description }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit3 {
  position: relative;
  width: 100%;
  height: 980px;
  overflow: hidden;
  background: #111;
}

.bgImage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 1;
  max-width: 842px;
  margin: 0 auto;
  padding-top: 147px;
  color: #fff;
  text-align: center;
}

h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
}

p {
  margin-top: 24px;
  font-size: 20px;
  line-height: 30px;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit3 {
    height: 720px;
  }

  .bgImage {
    object-position: center bottom;
  }

  .content {
    padding-top: 90px;
  }

  h2 {
    font-size: 34px;
    line-height: 40px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
