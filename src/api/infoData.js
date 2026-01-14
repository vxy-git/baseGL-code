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
 * 根据表单 UUID 和数据智能提取用户名
 *
 * @param {Object} formData - 表单数据对象（动态字段名）
 * @param {string} uuid - 表单 UUID
 * @returns {Promise<string>} 提取的用户名
 */
export async function extractUserNameByUuid(formData, uuid) {
  // 1. 优先级：根据 UUID 查询表单配置，识别 name/email 字段
  if (uuid) {
    try {
      // 动态导入 getFormRuleAndOption 避免循环依赖
      const { getFormRuleAndOption } = await import('./formdesign.js')
      const formResult = await getFormRuleAndOption(uuid)

      if (formResult.success && formResult.rule) {
        const rules = formResult.rule

        console.log('🔍 根据 UUID 查询表单配置，字段数:', rules.length)

        // 查找 name 字段（通过 placeholder 或 info 识别）
        const nameField = rules.find(r =>
          r.props?.placeholder?.toLowerCase().includes('name') ||
          r.info?.toLowerCase().includes('name')
        )

        if (nameField && formData[nameField.field]) {
          console.log('✅ 通过 name 字段提取用户名:', formData[nameField.field])
          return formData[nameField.field]
        }

        // 查找 email 字段
        const emailField = rules.find(r =>
          r.props?.placeholder?.toLowerCase().includes('email') ||
          r.props?.placeholder?.toLowerCase().includes('e-mail')
        )

        if (emailField && formData[emailField.field]) {
          console.log('✅ 通过 email 字段提取用户名:', formData[emailField.field])
          return formData[emailField.field]
        }
      }
    } catch (error) {
      console.warn('⚠️ 根据 UUID 提取用户名失败，使用智能识别:', error.message)
    }
  }

  // 2. 降级：智能识别（查找包含 @ 的字段，可能是 email）
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string' && value.includes('@') && value.trim()) {
      console.log('✅ 通过邮箱格式提取用户名:', value)
      return value
    }
  }

  // 3. 降级：返回第一个非空字符串字段
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string' && value.trim() && value.length < 100) {
      console.log('✅ 通过第一个非空字段提取用户名:', value)
      return value
    }
  }

  console.log('⚠️ 无法提取用户名，使用默认值')
  return '匿名用户'
}

/**
 * 提交 ContactUs 表单数据
 * 这是一个专门为 ContactUs 页面设计的便捷方法
 *
 * @param {Object} formData - ContactUs 表单数据（原始动态字段名）
 * @param {string} formUuid - 表单 UUID（用于提取用户名）
 * @returns {Promise<Object>} API 响应结果
 */
export async function submitContactUsForm(formData, formUuid) {
  console.log('📤 submitContactUsForm 调用:', {
    formDataKeys: Object.keys(formData),
    formUuid: formUuid
  })

  // 提取 userName（支持 UUID 查询和智能识别）
  const userName = await extractUserNameByUuid(formData, formUuid)

  console.log('👤 提取的用户名:', userName)

  // 提交数据（直接提交原始表单数据，不做字段映射）
  return await createInfoDataPublic({
    userName: userName,
    formJson: formData
  })
}
