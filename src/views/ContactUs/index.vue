<script setup>
import { computed } from 'vue'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
import MediaAsset from '@/components/MediaAsset.vue'
import { data } from '@/data/contactus/data'
import formCreate from '@form-create/element-ui'
import { useContactForm } from '@/composables/useContactForm'

// 表单 UUID 通过环境变量配置，不在源码中硬编码
const FORM_UUID = computed(() => import.meta.env.VITE_FORM_UUID || '')

const {
  formRule,
  formOption,
  loading,
  formComponent,
  formApi,
  formData,
  submitting,
  submitMessage,
  submitSuccess,
  handleExternalSubmit,
} = useContactForm(FORM_UUID, data)
</script>

<template>
  <div>
    <div class="contactPage">
      <Header header-class="white" />

      <!-- Hero Section -->
      <section class="hero mt_nav">
        <div class="heroBackground">
          <MediaAsset
            :src="data.heroBanner"
            type="image"
            class="heroImage m_hide"
            alt=""
            :lazy="false"
          />
          <MediaAsset
            :src="data.heroBannerMobile"
            type="image"
            class="heroImage pc_hide"
            alt=""
            :lazy="false"
          />
        </div>
        <div class="size-full absolute top-0 left-0 flex flex-col justify-center">
          <div class="heroContent">
            <h1 class="heroTitle w-full c_1300 c_padding text-right">
              {{ data.content.heroTitle }}
            </h1>
            <div class="divider"></div>
            <div class="w-full c_1300 c_padding m-auto flex flex-col items-end">
              <p class="heroEmail">Email: {{ data.contact.email }}</p>
              <div class="socialSection mt-[34px] pr-[4px]">
                <p class="followText">{{ data.content.followText }}</p>
                <a
                  :href="data.contact.instagramLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MediaAsset
                    :src="data.icons.instagram"
                    type="image"
                    class="socialIcon"
                    alt="Instagram"
                    :lazy="false"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Form Section -->
      <section class="formSection overflow-hidden c_padding">
        <div class="formContainer">
          <div class="formCard px-[40px] pt-[60px] pb-[60px]">
            <h2 class="formTitle">{{ data.content.formTitle }}</h2>

            <div v-if="loading" class="formLoading">Loading form...</div>
            <div v-else class="form-wrapper">
              <form-create
                ref="formComponent"
                v-model="formData"
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

              <button
                type="button"
                class="submitBtn"
                :disabled="submitting"
                @click="handleExternalSubmit"
              >
                {{ submitting ? 'Submitting...' : data.content.submitButtonText }}
              </button>
            </div>
          </div>
          <div class="formImage">
            <MediaAsset
              :src="data.icons.product"
              type="image"
              alt="Product Image"
              :lazy="false"
            />
          </div>
        </div>
      </section>
    </div>
    <div class="mt-[16px]">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.hero {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.contactPage {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: Roboto, sans-serif;
  color: #555;
}

.heroBackground {
  width: 100%;
  height: 100%;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroContent {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 10;
  padding-bottom: 70px;
}

.heroTitle {
  white-space: nowrap;
  color: #fff;
  font-family: Roboto;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.heroEmail {
  color: #fff;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  margin-top: 18px;
  line-height: 35px;
}

.divider {
  height: 1px;
  background-color: #fff;
  opacity: 0.2;
  margin-top: 2.5px;
  width: 100vw;
}

.socialSection {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 25px;
}

.followText {
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.socialIcon {
  object-fit: contain;
  width: 44px;
  height: 44px;
  margin-right: -5px;
}

/* Form Section */
.formSection {
  width: 100%;
  background-color: #fff;
  padding-top: 100px;
}

.formContainer {
  max-width: 1500px;
  min-height: 780px;
  border-radius: 20px;
  background: #f8f9fc;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3.125vw;
  padding: 75px 30px;
}

.formCard {
  flex-shrink: 0;
  width: 440px;
  min-height: 630px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
}

.formTitle {
  color: #000;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

/* Element Plus 表单样式覆盖 */
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

.formImage {
  width: 687px;
  height: 693.134px;
  margin-top: -45px;
  display: flex;
  align-items: center;
}

.formImage img {
  max-width: 687px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media screen and (max-width: $breakpoint-mobile) {
  .heroContent {
    margin-top: 30vh;
  }

  .socialIcon {
    width: 100px;
    height: 100px;
  }
}
</style>
