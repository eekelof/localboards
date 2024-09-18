import { mdiChevronDown, mdiChevronUp, mdiClose, mdiPaletteOutline } from '@mdi/js';
import { Board_I, Card_I, List_I } from '../../App';
import Updater from '../../Updater';

export function Card(board: Board_I, list: List_I, card: Card_I) {
    const setColor = () => {
        const colors = ["", "#a33", "#a63", "#aa3", "#3a3", "#3aa", "#66a", "#a3a", "#888"];
        card.color = colors[(colors.indexOf(card.color) + 1) % colors.length];
        Updater.card(board, list, card);
    };

    const remove = () => {
        const i = list.cards.indexOf(card);
        list.cards.splice(i, 1);
        Updater.cards(board, list);
    };

    const move = (dir: number) => {
        const i = list.cards.indexOf(card);
        const j = i + dir;
        if (j < 0 || j >= list.cards.length)
            return;
        list.cards[i] = list.cards[j];
        list.cards[j] = card;
        Updater.cards(board, list);
    };

    const className = card.color == "" ? "card" : "card cardBig";
    return <div id={"card-" + card.id} class={className} style={{ backgroundColor: card.color }}>
        {card.title}
        <svg class="icon iconSmall cardIconColor" viewBox="0 0 24 24" onclick={setColor}><path d={mdiPaletteOutline} /></svg>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={remove}><path d={mdiClose} /></svg>
        <svg class="icon iconSmall cardIconUp" viewBox="0 0 24 24" onclick={() => move(-1)}><path d={mdiChevronUp} /></svg>
        <svg class="icon iconSmall cardIconDown" viewBox="0 0 24 24" onclick={() => move(1)}><path d={mdiChevronDown} /></svg>
    </div >;
}