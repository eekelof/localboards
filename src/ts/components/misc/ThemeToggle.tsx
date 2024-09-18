import { mdiThemeLightDark } from "@mdi/js";
import LSUtil from "../../util/LSUtil";

export function ThemeToggle() {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        LSUtil.setTheme(document.body.classList.contains("dark"));
    };

    if (LSUtil.getTheme())
        toggleTheme();

    return <div class="themeToggle" onclick={() => toggleTheme()}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
    </div>;
}