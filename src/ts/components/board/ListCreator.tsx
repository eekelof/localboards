import { mdiListBoxOutline, mdiPlus } from '@mdi/js';
import Updater from '../../Updater';
import Util from '../../util/Util';
import { App_I } from '../../App';

export function ListCreator(app: App_I) {
    const input = <input class="listCreatorInput" type="text" placeholder="New List" maxlength="16" enterkeyhint="done" />;

    const onclick = () => {
        const title = input.value.trim();
        if (title.length === 0)
            return;
        app.board.lists.push({ id: crypto.randomUUID(), title, cards: [] });

        Updater.lists(app);
    };

    const btn = <div class="btn listCreatorAddBtn" onclick={onclick}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiListBoxOutline} /></svg>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlus} /></svg>
    </div>;
    Util.setBtnVisibility(btn, false);

    input.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter")
            onclick();
        setTimeout(() => Util.setBtnVisibility(btn, input.value.length > 0));
    };

    return <div class="listCreator">
        {input}
        {btn}
    </div>;
}