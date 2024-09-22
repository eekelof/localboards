import { mdiGithub, mdiThemeLightDark } from "@mdi/js";
import LSUtil from "../../util/LSUtil";

export function Settings() {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        LSUtil.setTheme(document.body.classList.contains("dark"));
    };
    if (LSUtil.getTheme())
        toggleTheme();

    return <div id="settings">
        <div class="themeToggle" onclick={() => toggleTheme()}>
            <svg class="icon iconSmall" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
        </div>
        <a href="https://github.com/eekelof/localboards" target="blank" class="githubLink">
            <svg class="icon iconSmall" viewBox="0 0 24 24"><path d={mdiGithub} /></svg>
        </a>
    </div>;
}