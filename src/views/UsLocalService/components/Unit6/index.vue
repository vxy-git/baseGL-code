<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import ContactForm from '@/components/ContactForm/index.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit6Data } from '@/data/us-local-service/unit6'
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
    <div class="formCard">
      <ContactForm
        :title="unitData.title"
        :submit-text="unitData.submitText"
        :form-data="contactData"
      />
    </div>
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

.formCard {
  position: relative;
  z-index: 2;
  width: 440px;
  min-height: 630px;
  margin: 0 auto;
  padding: 60px 40px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit6 {
    min-height: 880px;
    padding: 88px 16px;
  }

  .formCard {
    width: min(100%, 440px);
    padding: 34px 24px;
  }
}
</style>
