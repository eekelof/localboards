import { mdiChevronDown, mdiChevronUp, mdiClose, mdiPaletteOutline } from '@mdi/js';
import { Board_I, Card_I, List_I } from '../../App';
import Updater from '../../util/Updater';

export default class Card {
    static init(board: Board_I, list: List_I, card: Card_I) {

        const setColor = () => {
            const colors = ["", "#b55", "#bb5", "#5b5", "#5bb", "#55b", "#b5b", "#b95", "#999"];
            card.color = colors[(colors.indexOf(card.color) + 1) % colors.length];
            Updater.board(board);
        };

        const remove = () => {
            const i = list.cards.indexOf(card);
            list.cards.splice(i, 1);
            Updater.board(board);
        };

        const move = (dir: number) => {
            const i = list.cards.indexOf(card);
            const j = i + dir;
            if (j < 0 || j >= list.cards.length)
                return;
            list.cards[i] = list.cards[j];
            list.cards[j] = card;
            Updater.board(board);
        };

        return <div class={card.color == "" ? "card" : "card cardBig"} style={{ backgroundColor: card.color }}>
            {card.title}
            <svg class="icon iconSmall cardIconColor" viewBox="0 0 24 24" onclick={setColor}><path d={mdiPaletteOutline} /></svg>
            <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={remove}><path d={mdiClose} /></svg>
            <svg class="icon iconSmall cardIconUp" viewBox="0 0 24 24" onclick={() => move(-1)}><path d={mdiChevronUp} /></svg>
            <svg class="icon iconSmall cardIconDown" viewBox="0 0 24 24" onclick={() => move(1)}><path d={mdiChevronDown} /></svg>
        </div >;
    }
}