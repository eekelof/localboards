import { mdiTrashCan } from '@mdi/js';
import App, { Board_I, List_I } from '../../App';
import Card from './Card';
import ListCreator from './ListCreator';

export default class List {
    static init(board: Board_I, list?: List_I) {
        if (!list)
            return <div class="list listCreator">{ListCreator.init(board)}</div>;

        const remove = () => {
            const i = board.lists.indexOf(list);
            board.lists.splice(i, 1);
            App.updateBoard(board);
        };

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
            <div class="listTitle">{list.title}</div>
            <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={remove}><path d={mdiTrashCan} /></svg>
            {cardInput}
            <div class="cards">
                {list.cards.map(card => Card.init(board, list, card))}
            </div>
        </div>;
    }
}