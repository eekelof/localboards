import { mdiChevronLeft, mdiChevronRight, mdiTrashCan } from '@mdi/js';
import { App_I, List_I } from '../../App';
import Updater from '../../Updater';
import Util from '../../util/Util';
import { Card } from './Card';
import { ListCreator } from './ListCreator';

export function List(app: App_I, list?: List_I) {
    if (!list)
        return <div class="list listCreator">{ListCreator(app)}</div>;

    const lists = app.board.lists;

    const cardInput = <input class="cardInput" type="text" placeholder="New Card" maxlength="512" enterkeyhint="done" />;
    cardInput.onkeydown = (e: KeyboardEvent) => {
        if (e.key != "Enter" || cardInput.value.length === 0)
            return;
        const card = { id: crypto.randomUUID(), title: cardInput.value, color: 0 };
        list.cards.unshift(card);
        cardInput.value = "";
        Updater.cards(app, list);
    };

    const clickedRemove = () => {
        const onConfirm = () => {
            const i = lists.indexOf(list);
            lists.splice(i, 1);
            Updater.lists(app);
        };
        Util.showConfirmBox("Delete list '" + list.title + "'?", onConfirm);
    };

    const clickedMove = (dir: number) => {
        const i = lists.indexOf(list);
        const j = i + dir;
        if (j < 0 || j >= lists.length)
            return;
        lists[i] = lists[j];
        lists[j] = list;

        Updater.lists(app);
    };

    return <div id={"list-" + list.id} class="list">
        <div class="listTitle">{list.title}</div>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={clickedRemove}><path d={mdiTrashCan} /></svg>
        <svg class="icon iconSmall listIconLeft" viewBox="0 0 24 24" onclick={() => clickedMove(-1)}><path d={mdiChevronLeft} /></svg>
        <svg class="icon iconSmall listIconRight" viewBox="0 0 24 24" onclick={() => clickedMove(1)}><path d={mdiChevronRight} /></svg>
        {cardInput}
        {Cards(app, list)}
    </div>;
}

export function Cards(app: App_I, list: List_I) {
    return <div id={"cards-" + list.id} class="cards">
        {list.cards.map(card => Card(app, list, card))}
    </div>;
}