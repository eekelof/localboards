import { Board_I } from '../../App';
import { List } from './List';

export function Board(board: Board_I) {
    return <div id="board">
        <div id="boardTopBar"></div>
        <div id="boardTitle">{board.id}</div>
        <div class="lists">
            {board.lists.map(list => List(board, list))}
            {List(board)}
        </div>
    </div>;
}
