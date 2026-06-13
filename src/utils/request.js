/**
 * 统一 HTTP 请求客户端
 *
 * 特性：
 * - 统一 base URL（环境变量 VITE_API_BASE_URL）
 * - 请求超时（默认 15s，支持自定义）
 * - 统一业务状态码处理（code === 0 视为成功）
 * - GET / POST 便捷方法
 *
 * 返回格式：{ success: boolean, data: any, message: string }
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
const DEFAULT_TIMEOUT = 15000 // 15 秒默认超时

/**
 * 发送 HTTP 请求
 *
 * @param {string} url       - 请求路径（相对 baseURL，如 '/cmsnav/getList'）
 * @param {Object} [options] - fetch 选项
 * @param {number} [options.timeout] - 超时毫秒数
 * @param {string} [options.method]  - HTTP 方法
 * @param {Object} [options.headers] - 请求头
 * @param {Object} [options.body]    - 请求体
 * @returns {Promise<{success: boolean, data: any, message: string}>}
 */
export async function request(url, options = {}) {
  const { timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        ...(fetchOptions.method !== 'GET' && { 'Content-Type': 'application/json' }),
        ...fetchOptions.headers
      }
    })

    // HTTP 状态码检查
    if (!response.ok) {
      return {
        success: false,
        data: null,
        message: `HTTP ${response.status}: ${response.statusText}`
      }
    }

    const result = await response.json()

    // 业务状态码检查
    if (result.code === 0) {
      return {
        success: true,
        data: result.data,
        message: result.msg || ''
      }
    }

    return {
      success: false,
      data: null,
      message: result.msg || '请求失败'
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      return {
        success: false,
        data: null,
        message: '请求超时'
      }
    }
    return {
      success: false,
      data: null,
      message: error.message || '网络请求失败'
    }
  } finally {
    clearTimeout(timer)
  }
}

/**
 * GET 请求
 *
 * @param {string} url     - 请求路径
 * @param {Object} [params] - URL 查询参数
 * @param {Object} [options] - 额外 fetch 选项
 */
export function get(url, params, options = {}) {
  const queryParts = []
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      }
    }
  }
  const queryString = queryParts.length ? `?${queryParts.join('&')}` : ''
  return request(`${url}${queryString}`, { ...options, method: 'GET' })
}

/**
 * POST 请求
 *
 * @param {string} url  - 请求路径
 * @param {Object} [data] - 请求体数据
 * @param {Object} [options] - 额外 fetch 选项
 */
export function post(url, data, options = {}) {
  return request(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined
  })
}

// 绑定便捷方法到 request，方便导入时只用一行 `import request from '@/utils/request'`
request.get = get
request.post = post

export default request
