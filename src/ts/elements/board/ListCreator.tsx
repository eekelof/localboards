import { mdiListBoxOutline, mdiPlus } from '@mdi/js';
import App, { Board_I } from '../../App';
import Util from '../../util/Util';

export default class ListCreator {
    static init(board: Board_I) {
        const input = <input class="listCreatorInput" type="text" placeholder="New List" maxlength="16" />;
        const onclick = () => {
            ListCreator.#createList(board, input);
            Util.setBtnOpacity(btn, false);
        };

        const btn = <div class="btn listCreatorAddBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiListBoxOutline} /></svg>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlus} /></svg>
        </div>;
        Util.setBtnOpacity(btn, false);

        input.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter")
                onclick();
            setTimeout(() => Util.setBtnOpacity(btn, input.value.length > 0));
        };

        return <div class="listCreator">
            {input}
            {btn}
        </div>;
    }
    static #createList(board: Board_I, input: HTMLInputElement) {
        const title = input.value.trim();
        if (title.trim().length === 0)
            return;

        const list = {
            title,
            cards: []
        };
        board.lists.push(list);
        input.value = "";
        App.updateBoard(board);
    };
}