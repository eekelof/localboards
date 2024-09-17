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

        const sideBar = SideBar.init(app);
        const board = Board.init(app);

        document.body.append(sideBar, board);
    }
}

