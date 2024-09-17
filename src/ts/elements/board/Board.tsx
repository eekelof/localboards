import { App_I } from '../../App';
import { List_I } from '../../data/BoardData';
import List from './List';

export interface Board_I {
    id: string;
    lists: List_I[];
}
export default class Board {
    static init(app: App_I) {
        return <div class="board">
            {app.board.lists.map(list => List.init(app.board, list))}
        </div>;
    }
}

