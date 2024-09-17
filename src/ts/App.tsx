import { Board_I } from './board/Board';
import BoardHelper from './sidebar/board/BoardHelper';
import SideBar from './sidebar/SideBar';


export interface App_I {
    board: Board_I
}

export default class App {
    static init() {
        const app: App_I = {
            board: BoardHelper.getBoardOnStart()
        };
        const sideBar = SideBar.init(app);
        document.body.append(sideBar);
    }
}

