import { MOBILE_BREAKPOINT } from './fit'

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    function setRemUnit() {
        const viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
        const designWidth = viewWidth > MOBILE_BREAKPOINT ? 1920 : MOBILE_BREAKPOINT;
        const baseFontSize = (viewWidth / designWidth) * (viewWidth > MOBILE_BREAKPOINT ? 10 : 16);

        // ✅ 更新 CSS 变量，而不是直接改 style
        document.documentElement.style.setProperty("--rem-base", baseFontSize + "px");
    }

    setRemUnit();
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("orientationchange", setRemUnit);
}