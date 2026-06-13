/**
 * 统一日志工具
 * 开发环境输出详细日志，生产环境自动静默（terser 构建时也会移除 console.log）
 */
const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development'

export const logger = {
  log: (...args) => {
    if (isDev) console.log(...args)
  },
  warn: (...args) => {
    if (isDev) console.warn(...args)
  },
  error: (...args) => {
    // 错误日志在生产环境也保留，便于排查问题
    console.error(...args)
  },
  debug: (...args) => {
    if (isDev) console.debug(...args)
  }
}
