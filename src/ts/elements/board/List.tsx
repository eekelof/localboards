import { mdiTrashCan } from '@mdi/js';
import BoardData, { Card_I, List_I } from '../../data/BoardData';
import { Board_I } from './Board';
import ListCreator from './ListCreator';

export default class List {
    static init(board: Board_I, list?: List_I) {
        if (!list)
            return <div class="list listCreator">
                {ListCreator.init(board)}
            </div>

        const title = <div class="listTitle">{list.title}</div>;
        const removeBtn = <svg class="icon iconRemove" viewBox="0 0 24 24"><path d={mdiTrashCan} /></svg>

        const cards = <div class="cards"></div>;
        const cardInput = <input class="cardInput" type="text" placeholder="New Card" maxlength="512" />;

        cardInput.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                const card = { title: cardInput.value, color: "#fff" };
                BoardData.addCard(list, card);
                list.cards.push(card);
                cards.append(List.#createCardElement(card));
                cardInput.value = "";
            }
        };

        return <div class="list">
            {title}
            {removeBtn}
            {cardInput}
            {cards}
        </div>;
    }
    static #createCardElement(card: Card_I): HTMLElement {
        return <div class="card" style={{ backgroundColor: card.color }}>
            {card.title}
        </div>;
    }
}