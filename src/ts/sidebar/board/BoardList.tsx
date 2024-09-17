import { App_I } from '../../App';
import BoardHelper from './BoardHelper';

export default class BoardList {
    static init(app: App_I): HTMLElement {
        const list = <div id="boardSelector"></div>;
        setTimeout(() => BoardList.updateList(app));
        return list;
    }
    static updateList(app: App_I) {
        const list = document.getElementById("boardSelector")!;
        list.innerHTML = "";
        const boards = BoardHelper.getAllBoardIDs();
        for (const id of boards) {
            const onclick = () => {
                const t = BoardHelper.loadBoard(id);
                app.board = t || app.board;
                BoardList.updateList(app);
            };
            const className = "btn boardCard" + (app.board.id === id ? " boardCardSelected" : "");
            const e = <div class={className} onclick={onclick}>{id}</div>;
            list.append(e);
        }
    }
}

