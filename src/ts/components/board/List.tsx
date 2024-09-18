import { mdiTrashCan } from '@mdi/js';
import { Board_I, List_I } from '../../App';
import Updater from '../../Updater';
import { Cards } from './Cards';
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
            Updater.board(board);
        }
    };

    return <div class="list">
        <div class="listTitle">{list.title}</div>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={remove}><path d={mdiTrashCan} /></svg>
        {cardInput}
        {Cards(board, list)}
    </div>;
}