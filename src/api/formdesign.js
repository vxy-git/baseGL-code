/**
 * FormDesign API 服务模块
 * 用于从后端获取表单设计器配置数据
 */

import request from '@/utils/request'

/**
 * 根据 UUID 获取动态表单配置
 *
 * @param {string} uuid - 表单的唯一标识符
 * @returns {Promise<Object>} 包含表单规则和选项的对象
 */
export async function getDynamicForm(uuid) {
  if (!uuid) {
    return {
      success: false,
      message: 'UUID 参数不能为空',
      data: null
    }
  }

  const result = await request.get('/df/findDynamicFormPublic', { uuid })

  if (!result.success) {
    console.error('❌ getDynamicForm API 错误:', result.message)
    return {
      success: false,
      message: result.message,
      data: null
    }
  }

  console.log('✅ getDynamicForm API 调用成功')
  console.log('📋 表单配置数据:', { uuid, formData: result.data?.formData })

  return {
    success: true,
    data: result.data?.formData,
    uuid: uuid
  }
}

/**
 * 获取表单规则和配置
 * 便捷方法，从完整的表单数据中提取 rule 和 option
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
      rule = typeof result.data.rule === 'string'
        ? JSON.parse(result.data.rule)
        : result.data.rule
    }

    if (result.data.option) {
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
