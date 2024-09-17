import { Card_I, List_I } from '../../data/BoardData';
import { Board_I } from './Board';

export default class List {
    static init(board: Board_I, list: List_I): HTMLElement {
        const title = <button class="listTitle">{list.title}</button>;
        const removeBtn = <button class="listRemoveBtn">X</button>;
        const listWrapper = <div class="listWrapper"></div>;
        const cardInput = <input class="cardInput" type="text" placeholder="New card" />;

        cardInput.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                const card = List.#createCard(cardInput.value);
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
    static #createCard(title: string): Card_I {
        return {
            title,
            color: "#333333"
        };
    }
    static #createCardElement(card: Card_I): HTMLElement {
        return <div class="card" style={{ backgroundColor: card.color }}>
            {card.title}
        </div>;
    }
}