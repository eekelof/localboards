import { mdiBulletinBoard, mdiChevronLeft } from '@mdi/js';
import { App_I } from '../../App';
import { Icon } from '../misc/Icon';
import { BoardCreator } from './BoardCreator';
import { BoardSelector } from './BoardSelector';

export function SideBar(app: App_I) {
    const clickedHide = () => {
        document.getElementById("sidebar")!.classList.toggle("sidebarHidden");
        document.getElementById("board")!.classList.toggle("boardExpanded");
    };
    const hideToggle = <div class="hideToggle" onclick={clickedHide}>
        {Icon(mdiChevronLeft)}
    </div>;

    const boardSelector = BoardSelector(app);
    const boardCreator = BoardCreator(app);

    return <div id="sidebar">
        <div class="sidebarTitle">
            {Icon(mdiBulletinBoard, "titleIcon")}
            localboards
        </div>
        {hideToggle}
        {boardSelector}
        {boardCreator}
    </div>;
}