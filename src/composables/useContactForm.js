import { ref, computed, onMounted } from 'vue'
import { getFormRuleAndOption } from '@/api/formdesign'
import { submitContactUsForm } from '@/api/infoData'
import { ElMessage } from 'element-plus'
import { logger } from '@/utils/logger'

const SUBMIT_COOLDOWN = 5000

/**
 * ContactUs 表单逻辑 composable
 *
 * @param {import('vue').Ref<string>} formUuid - 表单 UUID（来自环境变量）
 * @param {Object} contactUsData - 静态表单数据（用于降级方案的 country 列表等）
 * @returns {Object} 表单状态和方法
 */
export function useContactForm(formUuid, contactUsData) {
  // ========== 表单配置 ==========
  const formRule = ref([])
  const formOption = ref({})
  const loading = ref(true)
  const formComponent = ref(null)
  const formApi = ref(null)

  // ========== 表单数据 ==========
  const formData = ref({})

  // ========== 提交状态 ==========
  const submitting = ref(false)
  const submitMessage = ref('')
  const submitSuccess = ref(false)
  const lastSubmitTime = ref(0)

  // ========== 初始化 ==========
  onMounted(async () => {
    await loadFormConfig()
  })

  // ========== 加载表单配置 ==========
  async function loadFormConfig() {
    try {
      loading.value = true
      logger.log('📋 正在加载表单配置... UUID:', formUuid.value)

      const result = await getFormRuleAndOption(formUuid.value)

      if (result.success) {
        formRule.value = result.rule
        formOption.value = result.option
        logger.log('✅ 表单配置加载成功')
      } else {
        logger.error('❌ 表单配置加载失败:', result.message)
        useLocalForm()
        ElMessage({
          message: '正在使用离线表单，部分功能可能受限',
          type: 'warning',
          duration: 3000,
          showClose: true
        })
      }
    } catch (error) {
      logger.error('❌ 表单配置加载异常:', error)
      useLocalForm()
      ElMessage({
        message: '正在使用离线表单，部分功能可能受限',
        type: 'warning',
        duration: 3000,
        showClose: true
      })
    } finally {
      loading.value = false
    }
  }

  // ========== 降级方案：本地静态表单 ==========
  function useLocalForm() {
    logger.log('⚠️ 使用本地静态表单配置')
    formRule.value = [
      {
        type: 'input', field: 'name', title: 'Your name', value: '',
        props: { placeholder: 'Your name*' },
        validate: [{ required: true, message: 'name is required' }]
      },
      {
        type: 'input', field: 'email', title: 'Email Address', value: '',
        props: { placeholder: 'Email Address*' },
        validate: [
          { required: true, message: 'email is required' },
          { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: 'Please enter a valid email address' }
        ]
      },
      {
        type: 'select', field: 'country', title: 'Country', value: '',
        options: contactUsData.formData.countries.map(country => ({ label: country, value: country })),
        props: { placeholder: 'Country*' },
        validate: [{ required: true, message: 'country is required' }]
      },
      {
        type: 'input', field: 'phone', title: 'Phone Number', value: '',
        props: { placeholder: 'Phone Number' },
        validate: [{ pattern: /^(?=.*\d)[\d\s\-+()]+$/, message: 'Please enter a valid phone number' }]
      },
      {
        type: 'textarea', field: 'message', title: 'Message', value: '',
        props: { placeholder: 'Message', rows: 4 }
      }
    ]

    formOption.value = { submitBtn: false, resetBtn: false, form: { labelWidth: '0px' } }
  }

  // ========== 表单提交处理 ==========
  async function handleSubmit(formData_) {
    try {
      submitting.value = true
      submitMessage.value = ''
      submitSuccess.value = false

      logger.log('📤 正在提交表单数据...', formData_)

      const result = await submitContactUsForm(formData_, formUuid.value)

      if (result.success) {
        submitSuccess.value = true
        submitMessage.value = 'Thank you! Your message has been sent successfully.'
        logger.log('✅ 表单提交成功')

        ElMessage({
          message: 'Thank you! Your message has been sent successfully.',
          type: 'success',
          duration: 3000,
          showClose: true
        })

        setTimeout(() => {
          if (formApi.value) formApi.value.resetFields()
          submitMessage.value = ''
        }, 3000)
      } else {
        submitSuccess.value = false
        const errorMsg = result.message || 'Submission failed. Please try again.'
        submitMessage.value = errorMsg
        logger.error('❌ 表单提交失败:', result.message)

        ElMessage({ message: errorMsg, type: 'error', duration: 5000, showClose: true })
      }
    } catch (error) {
      submitSuccess.value = false
      const errorMsg = 'An error occurred. Please try again later.'
      submitMessage.value = errorMsg
      logger.error('❌ 表单提交异常:', error)

      ElMessage({ message: errorMsg, type: 'error', duration: 5000, showClose: true })
    } finally {
      submitting.value = false
    }
  }

  // ========== 外部按钮提交处理 ==========
  async function handleExternalSubmit() {
    if (!formApi.value) {
      logger.error('❌ Form API not ready')
      return
    }

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
      await formApi.value.submit(
        (formData_) => {
          logger.log('✅ 表单验证通过')
          lastSubmitTime.value = Date.now()
          handleSubmit(formData_)
        },
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

  return {
    // 状态
    formRule,
    formOption,
    loading,
    formComponent,
    formApi,
    formData,
    submitting,
    submitMessage,
    submitSuccess,

    // 方法
    handleExternalSubmit,
    loadFormConfig
  }
}
