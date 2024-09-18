import LsUtil from "./LsUtil";

export default class UiUtil {
    static setBtnOpacity(btn: HTMLElement, active: boolean) {
        btn.style.opacity = active ? "1" : "0.3";
        btn.style.cursor = active ? "pointer" : "default";
    }
    static toggleTheme() {
        document.body.classList.toggle("dark");
        LsUtil.setTheme(document.body.classList.contains("dark") ? "dark" : "light");
    }
}
