import { mdiListBoxOutline, mdiPlus } from '@mdi/js';
import { Board_I } from '../../App';
import Updater from '../../Updater';
import Util from '../../util/Util';

export function ListCreator(board: Board_I) {
    const input = <input class="listCreatorInput" type="text" placeholder="New List" maxlength="16" enterkeyhint="done" />;

    const onclick = () => {
        const title = input.value.trim();
        if (title.length === 0)
            return;
        board.lists.push({ id: crypto.randomUUID(), title, cards: [] });
        Updater.board(board);
        document.querySelector(".listCreator")!.scrollIntoView();
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