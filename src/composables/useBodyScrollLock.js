/**
 * 共享 body 滚动锁定 composable
 * 基于引用计数，确保多个组件同时锁定时不会互相覆盖
 */

const lockStack = []

export function useBodyScrollLock() {
  function lock() {
    const body = document.body
    if (!body) return
    if (lockStack.length === 0) {
      body.style.overflow = 'hidden'
    }
    lockStack.push({})
  }

  function unlock() {
    lockStack.pop()
    if (lockStack.length === 0) {
      const body = document.body
      if (body) body.style.overflow = ''
    }
  }

  function isLocked() {
    return lockStack.length > 0
  }

  return { lock, unlock, isLocked }
}
