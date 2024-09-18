import { Board_I } from '../../App';
import List from './List';

export default class Board {
    static init(board: Board_I) {
        return <div id="board">
            <div id="boardTopBar"></div>
            <div id="boardTitle">{board.id}</div>
            <div class="lists">
                {board.lists.map(list => List.init(board, list))}
                {List.init(board)}
            </div>
        </div>;
    }
}

