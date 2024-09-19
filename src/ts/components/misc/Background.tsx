export const BG_COLORS = [
    ["#012", "#059", "#58c", "#5ef"],
    ["#020", "#090", "#5c8", "#4e0"],
    ["#210", "#c60", "#850", "#520"],
    ["#200", "#810", "#800", "#500"],
    ["#201", "#814", "#804", "#502"],
    ["#222", "#666", "#444", "#222"],
] as const;

export function Background() {
    return <div id="background">
        <div class="blob one"></div>
        <div class="blob two"></div>
        <div class="blob three"></div>
    </div>;
}