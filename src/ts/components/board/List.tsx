import { mdiChevronLeft, mdiChevronRight, mdiTrashCan } from '@mdi/js';
import { Board_I, List_I } from '../../App';
import Updater from '../../Updater';
import { Card } from './Card';
import { ListCreator } from './ListCreator';

export function List(board: Board_I, list?: List_I) {
    if (!list)
        return <div class="list listCreator">{ListCreator(board)}</div>;

    const remove = () => {
        const i = board.lists.indexOf(list);
        board.lists.splice(i, 1);
        Updater.board(board);
    };

    const cardInput = <input class="cardInput" type="text" placeholder="New Card" maxlength="512" />;
    cardInput.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            if (cardInput.value.length === 0)
                return;
            const card = { id: crypto.randomUUID(), title: cardInput.value, color: "" };
            list.cards.unshift(card);
            cardInput.value = "";
            Updater.cards(board, list);
        }
    };


    const move = (dir: number) => {
        const i = board.lists.indexOf(list);
        const j = i + dir;
        if (j < 0 || j >= board.lists.length)
            return;
        board.lists[i] = board.lists[j];
        board.lists[j] = list;

        Updater.board(board);
    };

    return <div id={"list-" + list.id} class="list">
        <div class="listTitle">{list.title}</div>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={remove}><path d={mdiTrashCan} /></svg>
        <svg class="icon iconSmall listIconLeft" viewBox="0 0 24 24" onclick={() => move(-1)}><path d={mdiChevronLeft} /></svg>
        <svg class="icon iconSmall listIconRight" viewBox="0 0 24 24" onclick={() => move(1)}><path d={mdiChevronRight} /></svg>
        {cardInput}
        {Cards(board, list)}
    </div>;
}

export function Cards(board: Board_I, list: List_I) {
    return <div id={"cards-" + list.id} class="cards">
        {list.cards.map(card => Card(board, list, card))}
    </div>;
}