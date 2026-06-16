<script setup>
import { computed } from 'vue'
import formCreate from '@form-create/element-ui'
import { useContactForm } from '@/composables/useContactForm'
import { data as contactData } from '@/data/contactus/data'

const props = defineProps({
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

const FORM_UUID = computed(() => import.meta.env.VITE_FORM_UUID || '')

const {
  formRule,
  formOption,
  loading,
  formComponent,
  formApi,
  formData: formModel,
  submitting,
  submitMessage,
  submitSuccess,
  handleExternalSubmit,
} = useContactForm(FORM_UUID, props.formData)
</script>

<template>
  <div class="contactForm">
    <h2 class="formTitle">{{ title }}</h2>

    <div v-if="loading" class="formLoading">Loading form...</div>
    <div v-else class="form-wrapper">
      <form-create
        ref="formComponent"
        v-model="formModel"
        v-model:api="formApi"
        :rule="formRule"
        :option="formOption"
      />

      <div
        v-if="submitMessage"
        class="submit-message"
        :class="{ success: submitSuccess, error: !submitSuccess }"
      >
        {{ submitMessage }}
      </div>

      <button type="button" class="submitBtn" :disabled="submitting" @click="handleExternalSubmit">
        {{ submitting ? 'Submitting...' : submitText }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contactForm {
  width: 100%;
}

.formTitle {
  color: #000;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-wrapper {
  margin-top: 26px;
}

.formLoading {
  margin-top: 26px;
  text-align: center;
  color: #999;
  padding: 40px 0;
}

.form-wrapper :deep(.el-form-item) {
  margin-bottom: 20px;
}

.form-wrapper :deep(.el-input__wrapper) {
  padding: 9px 14px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  box-shadow: none;
  border-radius: 0;
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

.form-wrapper :deep(.el-input__wrapper):hover {
  border-color: #1ce785;
}

.form-wrapper :deep(.el-input__wrapper.is-focus) {
  border-color: #1ce785;
}

.form-wrapper :deep(.el-input__inner) {
  color: #555;
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

.form-wrapper :deep(.el-textarea__inner::placeholder),
.form-wrapper :deep(.el-input__inner::placeholder) {
  color: #555;
}

.form-wrapper :deep(.el-textarea__inner) {
  box-shadow: none;
  padding: 15px 14px;
  outline: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 0;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
  resize: none;
  min-height: 100px;
}

.form-wrapper :deep(.el-textarea__inner):hover {
  box-shadow: none;
  outline: 1px solid #1ce785;
}

.form-wrapper :deep(.el-textarea__inner):focus {
  outline: 1px solid #1ce785;
  box-shadow: none;
}

.form-wrapper :deep(.el-select .el-input__wrapper) {
  cursor: pointer;
}

.form-wrapper :deep(.el-select:hover .el-input__wrapper) {
  border-color: #1ce785;
}

.form-wrapper :deep(.el-select__placeholder) {
  color: #555;
}

.form-wrapper :deep(.el-select__selected-item) {
  color: #222;
  font-weight: 500;
}

.form-wrapper :deep(.el-select-dropdown__item) {
  font-size: 16px;
  color: #555;
  padding: 12px 14px;
}

.form-wrapper :deep(.el-select-dropdown__item:hover) {
  background-color: #f8f9fc;
  color: #222;
}

.form-wrapper :deep(.el-select-dropdown__item.selected) {
  color: #1ce785;
  font-weight: 500;
}

.submit-message {
  margin-top: 15px;
  padding: 12px 14px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
}

.submit-message.success {
  background-color: #f0f9ff;
  color: #0284c7;
  border: 1px solid #bae6fd;
}

.submit-message.error {
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.submitBtn {
  margin-top: 5px;
  width: 100%;
  height: 50px;
  background-color: #1ce785;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  color: #111;
  cursor: pointer;
  transition: all 0.3s;
}

.submitBtn:hover:not(:disabled) {
  opacity: 0.9;
}

.submitBtn:active:not(:disabled) {
  transform: scale(0.98);
}

.submitBtn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

</style>
