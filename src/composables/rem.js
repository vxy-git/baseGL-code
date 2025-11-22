import { REM_MOBILE, REM_PC } from './fit'

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    function setRemUnit() {
        const viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
        if (viewWidth >= REM_PC) {
            const baseFontSize = (viewWidth / 1200) * 10;
            document.documentElement.style.setProperty("--rem-base", baseFontSize + "px");
        } else if (viewWidth <= REM_MOBILE) {
            const baseFontSize = (viewWidth / 380) * 10;
            document.documentElement.style.setProperty("--rem-base", baseFontSize + "px");
        } else {
            document.documentElement.style.removeProperty("--rem-base");
        }
    }

    setRemUnit();
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("orientationchange", setRemUnit);
}