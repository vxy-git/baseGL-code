/**
 * InfoData API 服务模块
 * 用于提交表单数据到后端 custom 插件的 info_data 接口
 */

/**
 * 获取 API 基础 URL
 * 优先使用环境变量配置,否则使用默认值
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/**
 * 提交表单数据到公开接口（无需鉴权）
 * 用于 C 端用户提交表单数据
 *
 * @param {Object} data - 表单数据
 * @param {string} data.userName - 用户名称（必填）
 * @param {Object} data.formJson - 表单数据（JSON 对象）
 * @returns {Promise<Object>} API 响应结果
 */
export async function createInfoDataPublic(data) {
  try {
    // 验证必填字段
    if (!data.userName) {
      throw new Error('userName 字段不能为空')
    }

    if (!data.formJson || typeof data.formJson !== 'object') {
      throw new Error('formJson 字段必须是一个有效的对象')
    }

    // 构建请求数据
    const requestData = {
      userName: data.userName,
      formJson: data.formJson
    }

    console.log('📤 准备提交表单数据:', {
      userName: requestData.userName,
      formJsonKeys: Object.keys(requestData.formJson)
    })

    // 发送 POST 请求
    const response = await fetch(
      `${API_BASE_URL}/infoData/createInfoPublicData`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      }
    )

    // 解析 JSON 响应
    const result = await response.json()

    // 检查业务状态码
    if (result.code === 0) {
      console.log('✅ createInfoDataPublic API 调用成功')
      console.log('📊 提交结果:', result.msg)

      return {
        success: true,
        message: result.msg || '提交成功',
        data: result.data
      }
    } else {
      console.error('❌ createInfoDataPublic API 业务错误:', result.msg)
      return {
        success: false,
        message: result.msg || '提交失败',
        data: null
      }
    }
  } catch (error) {
    console.error('❌ createInfoDataPublic API 请求异常:', error)
    return {
      success: false,
      message: error.message || '网络请求失败',
      data: null
    }
  }
}

/**
 * 从表单数据中提取 userName
 * 这是一个辅助函数，用于从表单数据中智能提取用户名
 *
 * @param {Object} formData - 表单数据对象
 * @returns {string} 提取的用户名
 */
export function extractUserName(formData) {
  // 优先级顺序：
  // 1. name 字段
  // 2. username 字段
  // 3. email 字段
  // 4. phone 字段
  // 5. 组合 name 和 email
  // 6. 匿名用户

  if (formData.name) {
    return formData.name
  }

  if (formData.username) {
    return formData.username
  }

  if (formData.email) {
    return formData.email
  }

  if (formData.phone) {
    return formData.phone
  }

  // 尝试组合字段
  if (formData.firstName && formData.lastName) {
    return `${formData.firstName} ${formData.lastName}`
  }

  // 默认值
  return '匿名用户'
}

/**
 * 提交 ContactUs 表单数据
 * 这是一个专门为 ContactUs 页面设计的便捷方法
 *
 * @param {Object} formData - ContactUs 表单数据
 * @returns {Promise<Object>} API 响应结果
 */
export async function submitContactUsForm(formData) {
  // 提取 userName
  const userName = extractUserName(formData)

  // 提交数据
  return await createInfoDataPublic({
    userName: userName,
    formJson: formData
  })
}
