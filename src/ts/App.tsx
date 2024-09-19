import { Board } from './components/board/Board';
import { Background } from './components/misc/Background';
import { ThemeToggle } from './components/misc/ThemeToggle';
import { SideBar } from './components/sidebar/SideBar';
import Util from './util/Util';

export interface App_I {
    board: Board_I
}
export interface Board_I {
    id: string;
    created: number;
    color: number;
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
    const app: App_I = { board: Util.getBoardOnStart() };
    return <div id="app">
        {Background()}
        {Board(app)}
        {SideBar(app)}
        {ThemeToggle()}
    </div>;
}
document.body.append(App());