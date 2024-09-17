import { App_I } from '../../App';
import LSHelper from '../../data/LSHelper';

export default class BoardSelector {
    static init(app: App_I): HTMLElement {
        const list = <div id="boardSelector"></div>;
        setTimeout(() => BoardSelector.updateList(app));
        return list;
    }
    static updateList(app: App_I) {
        const list = document.getElementById("boardSelector")!;
        list.innerHTML = "";
        const boards = LSHelper.getAllIDs();
        for (const id of boards) {
            const onclick = () => {
                const t = LSHelper.load(id);
                app.board = t || app.board;
                BoardSelector.updateList(app);
            };
            const className = "btn boardCard" + (app.board.id === id ? " boardCardSelected" : "");
            const e = <div class={className} onclick={onclick}>{id}</div>;
            list.append(e);
        }
    }
}

