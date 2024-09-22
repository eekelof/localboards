import { mdiListBoxOutline, mdiPlus } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import { Icon } from '../misc/Icon';

export function ListCreator(app: App_I) {
    const input = <input class="listCreatorInput" type="text" placeholder="New List" maxlength="16" enterkeyhint="done" />;
    const clickedCreate = () => {
        let title = input.value.trim() || "List";
        app.board.lists.push({ id: crypto.randomUUID(), title, cards: [] });
        Updater.lists(app);
    };

    input.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter")
            clickedCreate();
    };

    const btn = <div class="btn listCreatorAddBtn" onclick={clickedCreate}>
        {Icon(mdiListBoxOutline)}
        {Icon(mdiPlus)}
    </div>;


    return <div class="listCreator">
        {input}
        {btn}
    </div>;
}