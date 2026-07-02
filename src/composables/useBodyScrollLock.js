/**
 * 共享 body 滚动锁定 composable
 * 基于引用计数，确保多个组件同时锁定时不会互相覆盖
 */

const lockStack = []
let savedStyles = null
let savedScrollY = 0

export function useBodyScrollLock() {
  function lock() {
    const html = document.documentElement
    const body = document.body
    if (!body) return

    if (lockStack.length === 0) {
      savedScrollY = window.scrollY || html.scrollTop || 0
      savedStyles = {
        htmlOverflow: html.style.overflow,
        bodyOverflow: body.style.overflow,
        bodyPosition: body.style.position,
        bodyTop: body.style.top,
        bodyLeft: body.style.left,
        bodyRight: body.style.right,
        bodyWidth: body.style.width,
      }

      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = `-${savedScrollY}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
    }

    lockStack.push({})
  }

  function unlock() {
    lockStack.pop()
    if (lockStack.length === 0) {
      const html = document.documentElement
      const body = document.body
      if (!body || !savedStyles) return

      html.style.overflow = savedStyles.htmlOverflow
      body.style.overflow = savedStyles.bodyOverflow
      body.style.position = savedStyles.bodyPosition
      body.style.top = savedStyles.bodyTop
      body.style.left = savedStyles.bodyLeft
      body.style.right = savedStyles.bodyRight
      body.style.width = savedStyles.bodyWidth

      window.scrollTo(0, savedScrollY)
      savedStyles = null
      savedScrollY = 0
    }
  }

  function isLocked() {
    return lockStack.length > 0
  }

  return { lock, unlock, isLocked }
}
