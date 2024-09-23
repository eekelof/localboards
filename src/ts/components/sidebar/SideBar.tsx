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

    return <div id="sidebar">
        <div class="sidebarTitle"> {Icon(mdiBulletinBoard)} Localboards </div>
        <div class="hideToggle" onclick={clickedHide}> {Icon(mdiChevronLeft)} </div>
        {BoardSelector(app)}
        {BoardCreator(app)}
    </div>;
}