import { App_I } from '../../App';
import { List } from './List';

export function Board(app: App_I) {
    return <div id="board">
        <div id="boardTitle">{app.board.id}</div>
        {Lists(app)}
    </div>;
}

export function Lists(app: App_I) {
    return <div id="lists">
        {app.board.lists.map(list => List(app, list))}
        {List(app)}
    </div>
}