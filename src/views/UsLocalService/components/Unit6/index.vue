<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit6Data } from '@/data/us-local-service/unit6'

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
    <form class="contactForm">
      <h3>{{ unitData.title }}</h3>
      <input type="text" :placeholder="unitData.fields.name" />
      <input type="email" :placeholder="unitData.fields.email" />
      <select aria-label="Country">
        <option>{{ unitData.fields.country }}</option>
      </select>
      <select aria-label="State">
        <option>{{ unitData.fields.state }}</option>
      </select>
      <input type="tel" :placeholder="unitData.fields.phone" />
      <textarea :placeholder="unitData.fields.message"></textarea>
      <button type="button">{{ unitData.submitText }}</button>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.unit6 {
  position: relative;
  min-height: 1080px;
  padding-top: 170px;
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

.contactForm {
  position: relative;
  z-index: 2;
  width: 440px;
  min-height: 630px;
  margin: 0 auto;
  padding: 48px 40px 44px;
  background: rgba(255, 255, 255, 0.96);

  h3 {
    margin-bottom: 26px;
    color: #000;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 14px;
    color: #555;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 0;
    background: #f3f3f3;
    outline: none;
  }

  input,
  select {
    height: 50px;
  }

  textarea {
    height: 100px;
    padding-top: 14px;
    resize: none;
  }

  button {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    background: #1ce785;
    border: none;
    color: #111;
    font-family: Roboto;
    font-size: 18px;
    cursor: pointer;
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit6 {
    min-height: 880px;
    padding: 88px 16px;
  }

  .contactForm {
    width: min(100%, 440px);
    padding: 34px 24px;
  }
}
</style>
