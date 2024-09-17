import { mdiListBox, mdiPlus } from '@mdi/js';
import BoardData, { Board_I } from '../../data/BoardData';
import Util from '../../Util';

export default class ListCreator {
    static init(board: Board_I): HTMLElement {
        const input = <input class="listCreatorInput" type="text" placeholder="New List" />;

        const onclick = () => {
            const list = {
                title: input.value,
                cards: []
            };
            BoardData.addList(board, list);
            board.lists.push(list);
            input.value = "";
            Util.setBtnOpacity(btn, false);

            // t.updateList(app);
        };

        const btn = <div class="btn listCreatorAddBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiListBox} /></svg>
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
}