import { mdiChevronDown, mdiChevronUp, mdiClose, mdiPaletteOutline, mdiTrashCan } from '@mdi/js';
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
        const removeBtn = <svg class="icon iconSmall" viewBox="0 0 24 24"><path d={mdiTrashCan} /></svg>

        const cards = <div class="cards"></div>;
        const cardInput = <input class="cardInput" type="text" placeholder="New Card" maxlength="512" />;

        cardInput.onkeydown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                if (cardInput.value.length === 0)
                    return;

                const card = { title: cardInput.value, color: "" };
                BoardData.addCard(list, card);
                list.cards.unshift(card);
                cards.prepend(List.#createCardElement(cards, card));
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
    static #createCardElement(list: HTMLElement, card: Card_I): HTMLElement {
        const e = <div class="card" style={{ backgroundColor: card.color }}>{card.title}</div>;

        const setColor = () => {
            const colors = ["", "#b55", "#bb5", "#5b5", "#5bb", "#55b", "#b5b", "#b95", "#999"];
            card.color = colors[(colors.indexOf(card.color) + 1) % colors.length];
            e.style.backgroundColor = card.color;
            e.className = e.style.backgroundColor == "" ? "card" : "card cardBig";
        };
        e.append(<svg class="icon iconSmall cardIconColor" viewBox="0 0 24 24" onclick={setColor}><path d={mdiPaletteOutline} /></svg>);
        e.append(<svg class="icon iconSmall" viewBox="0 0 24 24" onclick={() => e.remove()}><path d={mdiClose} /></svg>);

        const move = (dir: number) => {
            const index = Array.from(list.children).indexOf(e);
            const newIndex = index + (dir > 0 ? 2 : -1);
            if (newIndex < 0 || newIndex > list.children.length)
                return;
            list.insertBefore(e, list.children[newIndex]);
        };

        e.append(<svg class="icon iconSmall cardIconUp" viewBox="0 0 24 24" onclick={() => move(-1)}><path d={mdiChevronUp} /></svg>);
        e.append(<svg class="icon iconSmall cardIconDown" viewBox="0 0 24 24" onclick={() => move(1)}><path d={mdiChevronDown} /></svg>);
        return e;
    }
}