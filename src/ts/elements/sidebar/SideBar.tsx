import { mdiChevronLeft, mdiDeveloperBoard, mdiThemeLightDark } from '@mdi/js';
import { App_I } from '../../App';
import BoardCreator from './BoardCreator';
import BoardSelector from './BoardSelector';

export default class SideBar {
    static init(app: App_I) {
        const boardSelector = BoardSelector.init(app);

        // onclick={() => document.body.classList.toggle("dark")}

        const hideToggleIcon = <svg class="icon" viewBox="0 0 24 24"><path d={mdiChevronLeft} /></svg>
        const hideToggle = <div class="hideToggle">{hideToggleIcon}</div>;
        hideToggle.onclick = () => document.getElementById("sidebar")!.classList.toggle("sidebarHidden");

        const themeToggle = <div class="themeToggle" onclick={() => document.body.classList.toggle("dark")}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
        </div>;

        const boardCreator = BoardCreator.init(app);

        return <div id="sidebar">
            <div class="sidebarTitle">
                <svg class="icon titleIcon" viewBox="0 0 24 24"><path d={mdiDeveloperBoard}></path></svg>
                LocalBoard
            </div>
            {hideToggle}
            {themeToggle}
            {boardSelector}
            {boardCreator}
        </div>;
    }
}