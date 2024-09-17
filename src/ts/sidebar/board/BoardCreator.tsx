import { mdiPlusBoxOutline } from '@mdi/js';
import { App_I } from '../../App';
import { Board_I } from '../../board/Board';
import BoardHelper from './BoardHelper';
import BoardList from './BoardList';

export default class BoardCreator {
    static init(app: App_I): HTMLElement {
        const boardSelector = BoardList.init(app);
        const input = <input class="sidebarInput" type="text" placeholder="New board" />;

        const onclick = () => {
            const board = BoardCreator.createBoard(input.value);
            app.board = board || app.board;
            input.value = "";
            BoardCreator.#setCreateBtnOpacity(btn, false);
            BoardList.updateList(app);
        };
        const btn = <div class="btn boardCreatorBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlusBoxOutline} /></svg>
        </div>;
        BoardCreator.#setCreateBtnOpacity(btn, false);

        input.onkeydown = () => {
            setTimeout(() => {
                BoardCreator.#setCreateBtnOpacity(btn, input.value.length > 0);
            });
        };

        return <div class="boardCreator">
            {input}
            {btn}
            {boardSelector}
        </div>;
    }
    static createBoard(id = "Example Board"): Board_I | null {
        if (id.length === 0)
            return null;
        if (BoardHelper.loadBoard(id))
            return null;
        const board = { id, lists: [] };
        BoardHelper.saveBoard(board);
        return board;
    }
    static #setCreateBtnOpacity(btn: HTMLElement, active: boolean) {
        btn.style.opacity = active ? "1" : "0.3";
    }
}

