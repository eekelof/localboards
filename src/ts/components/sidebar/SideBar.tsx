import { mdiBulletinBoard, mdiChevronLeft } from '@mdi/js';
import { App_I } from '../../App';
import { BoardCreator } from './BoardCreator';
import { BoardSelector } from './BoardSelector';

export function SideBar(app: App_I) {
    const clickedHide = () => {
        document.getElementById("sidebar")!.classList.toggle("sidebarHidden");
        document.getElementById("board")!.classList.toggle("boardExpanded");
    };
    const hideToggle = <div class="hideToggle" onclick={clickedHide}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiChevronLeft} /></svg>
    </div>;

    const boardSelector = BoardSelector(app);
    const boardCreator = BoardCreator(app);

    return <div id="sidebar">
        <div class="sidebarTitle">
            <svg class="icon titleIcon" viewBox="0 0 24 24"><path d={mdiBulletinBoard}></path></svg>
            localboards
        </div>
        {hideToggle}
        {boardSelector}
        {boardCreator}
    </div>;
}