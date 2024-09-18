import { Board_I } from '../../App';
import { List } from './List';

export function Board(board: Board_I) {
    const className = document.getElementById("sidebar")?.classList.contains("sidebarHidden") ? "boardExpanded" : "";

    return <div id="board" class={className}>
        <div id="boardTitle">{board.id}</div>
        <div class="lists">
            {board.lists.map(list => List(board, list))}
            {List(board)}
        </div>
    </div>;
}