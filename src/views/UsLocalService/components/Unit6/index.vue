<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import ContactFormCard from '@/components/ContactFormCard/index.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit6Data } from '@/data/us_local_service/unit6'
import { data as contactData } from '@/data/contactus/data'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit6Data)
</script>

<template>
  <section id="contact" class="unit6">
    <MediaAsset :src="unitData.bg" type="image" class="contactBg" alt="" />
    <ContactFormCard
      class="centerFormCard"
      :title="unitData.title"
      :submit-text="unitData.submitText"
      :form-data="contactData"
    />
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit6 {
  position: relative;
  min-height: 780px;
  padding-top: 75px;
  overflow: hidden;
  background: #f6f6f6;
}

.contactBg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.centerFormCard {
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit6 {
    min-height: 880px;
    padding: 88px 16px;
  }

  .centerFormCard {
    padding: 34px 24px;
  }
}
</style>
