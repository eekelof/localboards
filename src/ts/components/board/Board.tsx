import { App_I } from '../../App';
import { BG_COLORS } from '../../util/Constants';
import Util from '../../util/Util';
import { List, List_I } from './List';
import { ListCreator } from './ListCreator';

export interface Board_I {
    id: string;
    created: number;
    color: number;
    lists: List_I[];
}

export function BoardObject(id: string, color: number, lists: List_I[]): Board_I {
    return { id: Util.getAvailableBoardId(id), created: Date.now(), color, lists };
}

export function Board(app: App_I) {
    const c = BG_COLORS[app.board.color % BG_COLORS.length];
    const r = document.querySelector(":root")! as HTMLElement;
    r.style.setProperty('--bg', c[0]);
    r.style.setProperty('--bgBlob1', c[1]);
    r.style.setProperty('--bgBlob2', c[2]);
    r.style.setProperty('--bgBlob3', c[3]);

    return <div id="board">
        <div id="boardTitle">{app.board.id}</div>
        {Lists(app)}
    </div>;
}

export function Lists(app: App_I) {
    return <div id="lists">
        {app.board.lists.map(list => List(app, list))}
        {ListCreator(app)}
    </div>;
}