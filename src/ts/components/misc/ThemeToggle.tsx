import { mdiThemeLightDark } from "@mdi/js";
import LsUtil from "../../util/LsUtil";

export function ThemeToggle() {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        LsUtil.setTheme(document.body.classList.contains("dark"));
    };

    if (LsUtil.getTheme())
        toggleTheme();

    return <div class="themeToggle" onclick={() => toggleTheme()}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
    </div>;
}