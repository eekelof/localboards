import { mdiTrashCan } from '@mdi/js';
import BoardData, { Card_I, List_I } from '../../data/BoardData';
import { Board_I } from './Board';

export default class List {
    static init(board: Board_I, list: List_I): HTMLElement {
        const title = <div class="listTitle">{list.title}</div>;
        const removeBtn = <div class="btn listRemoveBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiTrashCan} /></svg>
        </div>;
        const listWrapper = <div class="listWrapper"></div>;
        const cardInput = <input class="cardInput" type="text" placeholder="New Card" />;

        cardInput.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                const card = { title: cardInput.value, color: "#fff" };
                BoardData.addCard(list, card);
                list.cards.push(card);
                listWrapper.append(List.#createCardElement(card));
                cardInput.value = "";
            }
        };

        return <div class="list">
            {title}
            {removeBtn}
            {cardInput}
            {listWrapper}
        </div>;
    }
    static #createCardElement(card: Card_I): HTMLElement {
        return <div class="card" style={{ backgroundColor: card.color }}>
            {card.title}
        </div>;
    }
}