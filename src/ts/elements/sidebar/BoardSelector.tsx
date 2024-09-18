import { mdiTrashCan } from '@mdi/js';
import { App_I } from '../../App';
import Util from '../../util/Util';

export default class BoardSelector {
    static init(app: App_I) {
        const list = <div id="boardSelector"></div>;
        setTimeout(() => BoardSelector.updateList(app));
        return list;
    }
    static updateList(app: App_I) {
        const list = document.getElementById("boardSelector")!;
        list.innerHTML = "";
        const boards = Util.getAllIDs();
        for (const id of boards) {
            const onclick = () => {
                const t = Util.load(id);
                app.board = t || app.board;
                BoardSelector.updateList(app);
            };
            const className = "btn boardCard" + (app.board.id === id ? " boardCardSelected" : "");
            const e = <div class={className} onclick={onclick}>
                <div class="boardCardTitle">{id}</div>
                <svg class="icon iconSmall" viewBox="0 0 24 24"><path d={mdiTrashCan} /></svg>
            </div>;
            list.append(e);
        }
    }
}

