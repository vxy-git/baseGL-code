import { REM_BREAKPOINT, REM_BASE } from './fit'

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    function setRemUnit() {
        const viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
        if (viewWidth <= REM_BREAKPOINT) {
            const baseFontSize = (viewWidth / REM_BASE) * 10;
            document.documentElement.style.setProperty("--rem-base", baseFontSize + "px");
        } else {
            document.documentElement.style.removeProperty("--rem-base");
        }
    }

    setRemUnit();
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("orientationchange", setRemUnit);
}