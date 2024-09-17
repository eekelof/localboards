import { mdiThemeLightDark } from '@mdi/js';
import Background from './Background';
import LSHelper from './data/LSHelper';
import Board, { Board_I } from './elements/board/Board';
import SideBar from './elements/sidebar/SideBar';


export interface App_I {
    board: Board_I
}

export default class App {
    static init() {
        const app: App_I = {
            board: LSHelper.getBoardOnStart()
        };

        const themeToggle = <div class="themeToggle" onclick={() => document.body.classList.toggle("dark")}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
        </div>;

        const sideBar = SideBar.init(app);
        const board = Board.init(app);

        document.body.append(Background.init(), board, sideBar, themeToggle);
    }
}

