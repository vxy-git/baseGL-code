<script setup>
import ContactForm from '@/components/ContactForm/index.vue'
import { data as contactData } from '@/data/contactus/data'

defineProps({
  title: {
    type: String,
    default: contactData.content.formTitle,
  },
  submitText: {
    type: String,
    default: contactData.content.submitButtonText,
  },
  formData: {
    type: Object,
    default: () => contactData,
  },
})
</script>

<template>
  <div class="contactFormCard">
    <ContactForm :title="title" :submit-text="submitText" :form-data="formData" />
  </div>
</template>

<style scoped lang="scss">
.contactFormCard {
  flex-shrink: 0;
  width: 440px;
  min-height: 630px;
  padding: 60px 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgb(0 0 0 / 5%);
}

@media screen and (max-width: $breakpoint-mobile) {
  .contactFormCard {
    width: 100%;
    max-width: 440px;
  }
}
</style>
