import { App_I } from '../../App';
import { List_I } from '../../data/BoardData';

export interface Board_I {
    id: string;
    lists: List_I[];
}
export default class Board {
    static init(app: App_I) {
        return <div id="board">
            <div id="boardTitle">{app.board.id}</div>
            {/* {app.board.lists.map(list => List.init(app.board, list))} */}
        </div>;
    }
}

