<script setup>
import { computed } from 'vue'
import Header from "@/components/Header/index.vue"
import Footer from "@/components/Footer/Footer.vue"
import MediaAsset from '@/components/MediaAsset.vue'
import { contactUsData } from '@/data/contactus/contactus'
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
  handleExternalSubmit
} = useContactForm(FORM_UUID, contactUsData)
</script>

<template>
  <div>
    <div class="contactPage">
      <Header headerClass="white" />

      <!-- Hero Section -->
      <section class="hero mt_nav">
        <div class="heroBackground">
          <MediaAsset :src="contactUsData.heroBanner" type="image" class="heroImage m_hide" alt="" :lazy="false" />
          <MediaAsset :src="contactUsData.heroBannerMobile" type="image" class="heroImage pc_hide" alt="" :lazy="false" />
        </div>
        <div class="size-full absolute top-0 left-0 flex flex-col justify-center">
          <div class="heroContent">
            <h1 class="heroTitle w-full c_1300 c_padding text-right">{{ contactUsData.content.heroTitle }}</h1>
            <div class="divider"></div>
            <div class="w-full c_1300 c_padding m-auto flex flex-col items-end">
              <p class="heroEmail">Email: {{ contactUsData.contact.email }}</p>
              <div class="socialSection mt-[34px] pr-[4px]">
                <p class="followText">{{ contactUsData.content.followText }}</p>
                <a :href="contactUsData.contact.instagramLink" target="_blank" rel="noopener noreferrer">
                  <MediaAsset :src="contactUsData.icons.instagram" type="image" class="socialIcon" alt="Instagram" :lazy="false" />
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
            <h2 class="formTitle">{{ contactUsData.content.formTitle }}</h2>

            <div v-if="loading" class="formLoading">
              Loading form...
            </div>
            <div v-else class="form-wrapper">
              <form-create
                ref="formComponent"
                v-model="formData"
                v-model:api="formApi"
                :rule="formRule"
                :option="formOption"
              />

              <button
                type="button"
                class="submitBtn"
                :disabled="submitting"
                @click="handleExternalSubmit"
              >
                {{ submitting ? 'Submitting...' : contactUsData.content.submitButtonText }}
              </button>
            </div>
          </div>
          <div class="formImage">
            <MediaAsset :src="contactUsData.icons.product" type="image" alt="Product Image" :lazy="false" />
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

.header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: transparent;
  z-index: 100;
  padding: 30px 0;
}

.headerContent {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 310px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.logo {
  width: 187.2px;
  height: 30px;
  object-fit: cover;
}

.nav {
  flex: 1;
  margin-left: 60px;
  font-size: 16px;
}

.contactBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1ce785;
  border-radius: 50px;
  width: 140px;
  height: 40px;
  color: #222;
  font-size: 18px;
  margin-right: 32px;
  cursor: pointer;
}

.headerIcon {
  width: 22px;
  height: 22px;
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
  color: #FFF;
  font-family: Roboto;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.heroEmail {
  color: #FFF;
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
  color: #FFF;
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
  background: #F8F9FC;
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

.formField {
  position: relative;
}

.formField input,
.formField textarea {
  width: 100%;
  padding: 15px 14px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
  box-sizing: border-box;
}

.formField input {
  height: 50px;
}

.formField textarea {
  height: 100px;
  resize: none;
}

.formField input::placeholder,
.formField textarea::placeholder {
  color: #555;
}

/* 自定义下拉选择框 */
.selectField {
  position: relative;
}

.selectInput {
  width: 100%;
  height: 50px;
  padding: 15px 14px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transition: border-color 0.2s;
}

.selectInput:hover {
  border-color: #1ce785;
}

.selectInput.disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.placeholder {
  color: #555;
}

.selectedValue {
  color: #222;
  font-weight: 500;
}

.dropdownIcon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  object-fit: contain;
  pointer-events: none;
  transition: transform 0.2s;
}

.dropdownIcon.rotated {
  transform: translateY(-50%) rotate(180deg);
}

/* 下拉列表 */
.dropdownList {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.dropdownItem {
  padding: 12px 14px;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdownItem:hover {
  background-color: #f8f9fc;
  color: #222;
}

.dropdownItem:active {
  background-color: #e8f5e9;
}

.dropdownList::-webkit-scrollbar {
  width: 6px;
}

.dropdownList::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.dropdownList::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.dropdownList::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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

.footer {
  width: 100%;
  background-color: #fff;
  padding: 60px 0 30px 0;
}

.footerContent {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 310px;
}

.footerColumns {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  margin-bottom: 50px;
}

.footerColumn h3 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 0 0 32px 0;
}

.footerColumn ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footerColumn li {
  font-size: 16px;
  line-height: 32px;
  color: #555;
}

.subscribeText {
  font-size: 16px;
  line-height: 32px;
  color: #555;
  margin: 0 0 17px 0;
}

.subscribeForm {
  display: flex;
  margin-bottom: 17px;
}

.subscribeForm input {
  flex: 1;
  height: 44px;
  padding: 0 17px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #555;
}

.subscribeForm input::placeholder {
  color: #999;
}

.subscribeForm button {
  width: 90px;
  height: 44px;
  background-color: #1ce785;
  border: none;
  color: #000;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
}

.privacyCheckbox {
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
}

.privacyCheckbox input[type="checkbox"] {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 3px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

.privacyCheckbox label {
  font-size: 14px;
  line-height: 22px;
  color: #555;
}

.privacyLink {
  color: #000;
}

.socialIcons {
  display: flex;
  gap: 32px;
}

.socialIcons img {
  width: 18px;
  height: 18px;
}

.footerBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.copyright,
.designer {
  font-size: 14px;
  line-height: 22px;
  color: #555;
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
