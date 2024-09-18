import { mdiThemeLightDark } from '@mdi/js';
import { Background } from './components/Background';
import { Board } from './components/board/Board';
import { SideBar } from './components/sidebar/SideBar';
import LsUtil from './util/LsUtil';

export interface App_I {
    board: Board_I
}
export interface Board_I {
    id: string;
    created: number;
    lists: List_I[];
}
export interface List_I {
    id: string;
    title: string;
    cards: Card_I[];
}
export interface Card_I {
    id: string;
    title: string;
    color: string;
}

function App() {
    const app: App_I = { board: LsUtil.getBoardOnStart() };
    return <div id="app">
        {Background()}
        {Board(app.board)}
        {SideBar(app)}

        <div class="themeToggle" onclick={() => document.body.classList.toggle("dark")}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiThemeLightDark} /></svg>
        </div>
    </div>;
}
document.body.append(App());