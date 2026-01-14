/**
 * FormDesign API 服务模块
 * 用于从后端获取表单设计器配置数据
 */

/**
 * 获取 API 基础 URL
 * 优先使用环境变量配置,否则使用默认值
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/**
 * 根据 UUID 获取动态表单配置
 *
 * @param {string} uuid - 表单的唯一标识符
 * @returns {Promise<Object>} 包含表单规则和选项的对象
 */
export async function getDynamicForm(uuid) {
  try {
    if (!uuid) {
      throw new Error('UUID 参数不能为空')
    }

    // 发送 GET 请求
    const response = await fetch(
      `${API_BASE_URL}/df/findDynamicFormPublic?uuid=${encodeURIComponent(uuid)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    // 解析 JSON 响应
    const result = await response.json()

    // 检查业务状态码
    if (result.code === 0) {
      console.log('✅ getDynamicForm API 调用成功')
      console.log('📋 表单配置数据:', {
        uuid: uuid,
        formData: result.data.formData
      })

      return {
        success: true,
        data: result.data.formData, // 包含 rule 和 option
        uuid: uuid
      }
    } else {
      console.error('❌ getDynamicForm API 业务错误:', result.msg)
      return {
        success: false,
        message: result.msg,
        data: null
      }
    }
  } catch (error) {
    console.error('❌ getDynamicForm API 请求异常:', error)
    return {
      success: false,
      message: error.message,
      data: null
    }
  }
}

/**
 * 获取表单规则和配置
 * 这是一个便捷方法，用于从完整的表单数据中提取 rule 和 option
 *
 * @param {string} uuid - 表单的唯一标识符
 * @returns {Promise<Object>} 包含 rule 和 option 的对象
 */
export async function getFormRuleAndOption(uuid) {
  const result = await getDynamicForm(uuid)

  if (!result.success) {
    return {
      success: false,
      message: result.message,
      rule: [],
      option: {}
    }
  }

  // 解析 JSON 字符串为对象
  let rule = []
  let option = {}

  try {
    if (result.data.rule) {
      // 如果是字符串，解析为 JSON
      rule = typeof result.data.rule === 'string'
        ? JSON.parse(result.data.rule)
        : result.data.rule
    }

    if (result.data.option) {
      // 如果是字符串，解析为 JSON
      option = typeof result.data.option === 'string'
        ? JSON.parse(result.data.option)
        : result.data.option
    }

    console.log('✅ 表单配置解析完成:')
    console.log('  - Rule 字段数:', rule.length)
    console.log('  - Option 配置:', option)
  } catch (error) {
    console.error('❌ 表单配置解析失败:', error)
    return {
      success: false,
      message: '表单配置数据格式错误',
      rule: [],
      option: {}
    }
  }

  return {
    success: true,
    rule: rule,
    option: option
  }
}
