import { App_I } from "../../App";

export const BG_COLORS = [
    ["#012", "#059", "#5c8", "#5ef"],
    ["#020", "#090", "#5c8", "#5ef"]
] as const;

export function Background(app: App_I) {
    const c = BG_COLORS[app.board.color ?? 0];
    var r = document.querySelector(':root')! as HTMLElement;
    r.style.setProperty('--bg', c[0]);
    r.style.setProperty('--bgBlob1', c[1]);
    r.style.setProperty('--bgBlob2', c[2]);
    r.style.setProperty('--bgBlob3', c[3]);

    return <div id="background">
        <div class="blob one"></div>
        <div class="blob two"></div>
        <div class="blob three"></div>
    </div>;
}