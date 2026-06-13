<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/Footer.vue";
import MediaAsset from '@/components/MediaAsset.vue'
import { contactUsData } from '@/data/contactus/contactus'
import { getFormRuleAndOption } from '@/api/formdesign'
import { submitContactUsForm } from '@/api/infoData'
import formCreate from '@form-create/element-ui'
import { ElMessage } from 'element-plus'
import { logger } from '@/utils/logger'

// 表单配置
const formRule = ref([])
const formOption = ref({})
const loading = ref(true)
const formComponent = ref(null)
const formApi = ref(null) // form-create API 对象

// 表单数据
const formData = ref({})

// 提交状态
const submitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const lastSubmitTime = ref(0)    // 上次提交时间戳
const SUBMIT_COOLDOWN = 5000     // 提交冷却时间（毫秒）

// 初始化：从后端加载表单配置
// 表单 UUID 通过环境变量 VITE_FORM_UUID 配置，不在源码中硬编码
const FORM_UUID = import.meta.env.VITE_FORM_UUID || ''

onMounted(async () => {
  await loadFormConfig()
})

// 加载表单配置
async function loadFormConfig() {
  try {
    loading.value = true
    logger.log('📋 正在加载表单配置... UUID:', FORM_UUID)

    const result = await getFormRuleAndOption(FORM_UUID)

    if (result.success) {
      // 详细调试日志
      logger.log('✅ 原始 rule:', result.rule)
      logger.log('✅ 原始 option:', result.option)
      logger.log('✅ rule 类型:', typeof result.rule)
      logger.log('✅ rule 是否为数组:', Array.isArray(result.rule))
      logger.log('✅ rule 长度:', result.rule?.length)

      formRule.value = result.rule
      formOption.value = result.option

      // 验证赋值后的值
      logger.log('📋 formRule.value:', formRule.value)
      logger.log('📋 formOption.value:', formOption.value)
      logger.log('✅ 表单配置加载成功')
    } else {
      logger.error('❌ 表单配置加载失败:', result.message)
      // 如果加载失败，使用本地静态表单
      useLocalForm()
      // 显示降级提示
      ElMessage({
        message: 'Using offline form. Some features may be limited.',
        type: 'warning',
        duration: 3000,
        showClose: true
      })
    }
  } catch (error) {
    logger.error('❌ 表单配置加载异常:', error)
    // 如果加载失败，使用本地静态表单
    useLocalForm()
    // 显示降级提示
    ElMessage({
      message: 'Using offline form. Some features may be limited.',
      type: 'warning',
      duration: 3000,
      showClose: true
    })
  } finally {
    loading.value = false
  }
}

// 降级方案：使用本地静态表单配置（与文档对齐：5个字段）
function useLocalForm() {
  logger.log('⚠️ 使用本地静态表单配置')
  formRule.value = [
    {
      type: 'input',
      field: 'name',
      title: 'Your name',
      value: '',
      props: {
        placeholder: 'Your name*'
      },
      validate: [
        { required: true, message: 'name is required' }
      ]
    },
    {
      type: 'input',
      field: 'email',
      title: 'Email Address',
      value: '',
      props: {
        placeholder: 'Email Address*'
      },
      validate: [
        { required: true, message: 'email is required' },
        {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
          message: 'Please enter a valid email address'
        }
      ]
    },
    {
      type: 'select',
      field: 'country',
      title: 'Country',
      value: '',
      options: contactUsData.formData.countries.map(country => ({
        label: country,
        value: country
      })),
      props: {
        placeholder: 'Country*'
      },
      validate: [
        { required: true, message: 'country is required' }
      ]
    },
    {
      type: 'input',
      field: 'phone',
      title: 'Phone Number',
      value: '',
      props: {
        placeholder: 'Phone Number'
      },
      validate: [
        {
          pattern: /^(?=.*\d)[\d\s\-+()]+$/,
          message: 'Please enter a valid phone number'
        }
      ]
    },
    {
      type: 'textarea',
      field: 'message',
      title: 'Message',
      value: '',
      props: {
        placeholder: 'Message',
        rows: 4
      }
    }
  ]

  formOption.value = {
    submitBtn: false,
    resetBtn: false,
    form: {
      labelWidth: '0px'
    }
  }
}

// 表单提交处理
async function handleSubmit(formData) {
  try {
    submitting.value = true
    submitMessage.value = ''
    submitSuccess.value = false

    logger.log('📤 正在提交表单数据...', formData)
    logger.log('📋 表单 UUID:', FORM_UUID)

    // 调用 API 提交表单（传递 UUID 和原始表单数据）
    const result = await submitContactUsForm(formData, FORM_UUID)

    if (result.success) {
      submitSuccess.value = true
      submitMessage.value = 'Thank you! Your message has been sent successfully.'
      logger.log('✅ 表单提交成功')

      // 显示成功提示
      ElMessage({
        message: 'Thank you! Your message has been sent successfully.',
        type: 'success',
        duration: 3000,
        showClose: true
      })

      // 提交成功后重置表单
      setTimeout(() => {
        if (formApi.value) {
          formApi.value.resetFields()
        }
        submitMessage.value = ''
      }, 3000)
    } else {
      submitSuccess.value = false
      const errorMsg = result.message || 'Submission failed. Please try again.'
      submitMessage.value = errorMsg
      logger.error('❌ 表单提交失败:', result.message)

      // 显示错误提示
      ElMessage({
        message: errorMsg,
        type: 'error',
        duration: 5000,
        showClose: true
      })
    }
  } catch (error) {
    submitSuccess.value = false
    const errorMsg = 'An error occurred. Please try again later.'
    submitMessage.value = errorMsg
    logger.error('❌ 表单提交异常:', error)

    // 显示错误提示
    ElMessage({
      message: errorMsg,
      type: 'error',
      duration: 5000,
      showClose: true
    })
  } finally {
    submitting.value = false
  }
}

// 外部按钮提交处理
async function handleExternalSubmit() {
  if (!formApi.value) {
    logger.error('❌ Form API not ready')
    return
  }

  // 客户端频率限制
  const now = Date.now()
  if (now - lastSubmitTime.value < SUBMIT_COOLDOWN) {
    ElMessage({
      message: 'Please wait a moment before submitting again.',
      type: 'warning',
      duration: 3000
    })
    return
  }

  try {
    // 使用 form-create 的 submit 方法
    // 会自动验证表单，验证通过后调用 success 回调
    await formApi.value.submit(
      // success 回调：验证通过
      (formData) => {
        logger.log('✅ 表单验证通过')
        lastSubmitTime.value = Date.now()
        handleSubmit(formData)  // 调用原有的提交逻辑
      },
      // fail 回调：验证失败
      () => {
        logger.log('❌ 表单验证失败')
        ElMessage({
          message: 'Please fill in all required fields correctly.',
          type: 'warning',
          duration: 3000
        })
      }
    )
  } catch (error) {
    logger.error('❌ 提交异常:', error)
  }
}

// 本地静态表单的旧逻辑（降级使用）
const showCountryDropdown = ref(false)
const showStateDropdown = ref(false)

const availableStates = computed(() => {
  return contactUsData.formData.statesByCountry[formData.value.country] || []
})

const selectCountry = (country) => {
  formData.value.country = country
  formData.value.state = ''
  showCountryDropdown.value = false
}

const selectState = (state) => {
  formData.value.state = state
  showStateDropdown.value = false
}

const toggleCountryDropdown = () => {
  showCountryDropdown.value = !showCountryDropdown.value
  showStateDropdown.value = false
}

const toggleStateDropdown = () => {
  if (availableStates.value.length > 0) {
    showStateDropdown.value = !showStateDropdown.value
    showCountryDropdown.value = false
  }
}

const closeDropdowns = () => {
  showCountryDropdown.value = false
  showStateDropdown.value = false
}
</script>

<template>
  <div @click="closeDropdowns">
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
          <div class="formCard px-[40px] pt-[60px]">
            <h2 class="formTitle">{{ contactUsData.content.formTitle }}</h2>

            <!-- 动态表单 -->
            <div v-if="loading" class="formLoading">
              Loading form...
            </div>
            <div v-else class="form-wrapper" @click.stop>
              <form-create
                ref="formComponent"
                v-model="formData"
                v-model:api="formApi"
                :rule="formRule"
                :option="formOption"
              />

              <!-- 提交消息 -->
              <!-- <div v-if="submitMessage" :class="['submit-message', submitSuccess ? 'success' : 'error']">
                {{ submitMessage }}
              </div> -->

              <!-- 自定义提交按钮 -->
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

/* Main Container */
.contactPage {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: Roboto, sans-serif;
  color: #555;
}

/* Header */
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
  // position: absolute;
  // top: 0;
  // left: 0;
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
  height: 780px;
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
  height: 630px;
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

/* 提交消息样式 */
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

/* 下拉列表滚动条样式 */
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

/* Footer */
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