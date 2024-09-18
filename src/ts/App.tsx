import { mdiThemeLightDark } from '@mdi/js';
import Background from './components/Background';
import Board from './components/board/Board';
import SideBar from './components/sidebar/SideBar';
import LsUtil from './util/LsUtil';


export interface Card_I {
    title: string;
    color: string;
}

export interface List_I {
    title: string;
    cards: Card_I[];
}

export interface Board_I {
    id: string;
    lists: List_I[];
}

export interface App_I {
    board: Board_I
}

export default class App {
    static init() {
        const app: App_I = { board: LsUtil.getBoardOnStart() };

        document.body.append(
            <div id="app">
                {Background.init()}
                {Board.init(app.board)}
                {SideBar.init(app)}

                <div class="themeToggle" onclick={() => document.body.classList.toggle("dark")}>
                    <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
                </div>
            </div>
        );
    }
    static updateBoard(board: Board_I) {
        document.getElementById("board")!.replaceWith(Board.init(board));
    }
}
