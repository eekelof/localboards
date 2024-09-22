import { mdiGithub, mdiThemeLightDark } from "@mdi/js";
import LSUtil from "../../util/LSUtil";
import { SmallIcon } from "./Icon";

export function Settings() {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        LSUtil.setTheme(document.body.classList.contains("dark"));
    };
    if (LSUtil.getTheme())
        toggleTheme();

    return <div id="settings">
        <div class="themeToggle" onclick={() => toggleTheme()}>
            {SmallIcon(mdiThemeLightDark, "themeToggleIcon")}
        </div>
        <a href="https://github.com/eekelof/localboards" target="blank" class="githubLink">
            {SmallIcon(mdiGithub, "githubLinkIcon")}
        </a>
    </div>;
}