import { mdiChevronLeft, mdiChevronRight, mdiTrashCan } from '@mdi/js';
import { App_I, List_I } from '../../App';
import Updater from '../../Updater';
import Util from '../../util/Util';
import { SmallIcon } from '../misc/Icon';
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
        Util.showConfirmBox("Delete List", list.title, onConfirm);
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
        {SmallIcon(mdiTrashCan, "", clickedRemove)}
        {SmallIcon(mdiChevronLeft, "listIconLeft", () => clickedMove(-1))}
        {SmallIcon(mdiChevronRight, "listIconRight", () => clickedMove(1))}
        {cardInput}
        {Cards(app, list)}
    </div>;
}

export function Cards(app: App_I, list: List_I) {
    return <div id={"cards-" + list.id} class="cards">
        {list.cards.map(card => Card(app, list, card))}
    </div>;
}