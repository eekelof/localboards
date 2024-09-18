import { mdiThemeLightDark } from "@mdi/js";
import LsUtil from "../util/LsUtil";
import UiUtil from "../util/UiUtil";

export function ThemeToggle() {
    if (LsUtil.getTheme() === "dark")
        UiUtil.toggleTheme();

    return <div class="themeToggle" onclick={() => UiUtil.toggleTheme()}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
    </div>;
}