import { mdiTrashCan } from '@mdi/js';
import App from '../../App';
import { List_I } from '../../data/BoardData';
import { Board_I } from './Board';
import Card from './Card';
import ListCreator from './ListCreator';

export default class List {
    static init(board: Board_I, list?: List_I) {
        if (!list)
            return <div class="list listCreator">{ListCreator.init(board)}</div>;

        const title = <div class="listTitle">{list.title}</div>;
        const removeBtn = <svg class="icon iconSmall" viewBox="0 0 24 24"><path d={mdiTrashCan} /></svg>

        const cardInput = <input class="cardInput" type="text" placeholder="New Card" maxlength="512" />;

        cardInput.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (cardInput.value.length === 0)
                    return;
                const card = { title: cardInput.value, color: "" };
                list.cards.unshift(card);
                cardInput.value = "";
                App.updateBoard(board);
            }
        };

        return <div class="list">
            {title}
            {removeBtn}
            {cardInput}

            <div class="cards">
                {list.cards.map(card => Card.init(board, list, card))}
            </div>;
        </div>;
    }
}