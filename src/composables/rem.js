import { REM_MOBILE, REM_PC } from './fit'

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  function setRemUnit() {
    const viewWidth = document.documentElement.clientWidth || document.body.clientWidth
    if (viewWidth >= REM_PC) {
      const baseFontSize = (viewWidth / 1200) * 10
      document.documentElement.style.setProperty('--rem-base', baseFontSize + 'px')
    } else if (viewWidth <= REM_MOBILE) {
      const baseFontSize = (viewWidth / 380) * 10
      document.documentElement.style.setProperty('--rem-base', baseFontSize + 'px')
    } else {
      document.documentElement.style.removeProperty('--rem-base')
    }
  }

  setRemUnit()

  // 使用 requestAnimationFrame 节流，避免高频 resize 时逐帧执行
  let ticking = false
  function onResize() {
    if (!ticking) {
      requestAnimationFrame(() => {
        setRemUnit()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('resize', onResize)
}
