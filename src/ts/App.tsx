import { Background } from './components/Background';
import { Board } from './components/board/Board';
import { SideBar } from './components/sidebar/SideBar';
import { ThemeToggle } from './components/ThemeToggle';
import Util from './util/Util';

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
    const app: App_I = { board: Util.getBoardOnStart() };
    return <div id="app">
        {Background()}
        {Board(app.board)}
        {SideBar(app)}
        {ThemeToggle()}
    </div>;
}
document.body.append(App());