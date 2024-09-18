import { mdiBulletinBoard, mdiChevronLeft } from '@mdi/js';
import { App_I } from '../../App';
import BoardCreator from './BoardCreator';
import BoardSelector from './BoardSelector';

export default class SideBar {
    static init(app: App_I) {
        const clickHide = () => {
            document.getElementById("sidebar")!.classList.toggle("sidebarHidden");
            document.getElementById("board")!.classList.toggle("boardExpanded");
        };
        const hideToggle = <div class="hideToggle" onclick={clickHide}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiChevronLeft} /></svg>
        </div>;

        const boardSelector = BoardSelector.init(app);
        const boardCreator = BoardCreator.init(app);

        return <div id="sidebar">
            <div class="sidebarTitle">
                <svg class="icon titleIcon" viewBox="0 0 24 24"><path d={mdiBulletinBoard}></path></svg>
                LocalBoards
            </div>
            {hideToggle}
            {boardSelector}
            {boardCreator}
        </div>;
    }
}