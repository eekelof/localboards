import { mdiChevronDown, mdiChevronLeft, mdiChevronRight, mdiChevronUp, mdiClose, mdiPaletteOutline } from '@mdi/js';
import { App_I, Card_I, List_I } from '../../App';
import Updater from '../../Updater';
import { CARD_COLORS } from '../../util/Constants';

export function Card(app: App_I, list: List_I, card: Card_I) {
    const clickedColor = () => {
        card.color = (card.color + 1) % CARD_COLORS.length;
        Updater.card(app, list, card);
    };

    const clickedRemove = () => {
        const i = list.cards.indexOf(card);
        list.cards.splice(i, 1);
        Updater.cards(app, list);
    };

    const clickedMove = (dir: number) => {
        const i = list.cards.indexOf(card);
        const j = i + dir;
        if (j < 0 || j >= list.cards.length)
            return;
        list.cards[i] = list.cards[j];
        list.cards[j] = card;
        Updater.cards(app, list);
    };

    const clickedMoveToList = (dir: number) => {
        const i = app.board.lists.indexOf(list);
        const nlist = app.board.lists[i + dir];
        if (!nlist)
            return;
        clickedRemove();
        nlist.cards.push(card);
        Updater.cards(app, nlist);
    };

    const className = card.color == 0 ? "card" : "card cardColored";
    return <div id={"card-" + card.id} class={className} style={{ backgroundColor: CARD_COLORS[card.color] }}>
        {card.title}
        <svg class="icon iconSmall cardIconColor" viewBox="0 0 24 24" onclick={clickedColor}><path d={mdiPaletteOutline} /></svg>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={clickedRemove}><path d={mdiClose} /></svg>
        <svg class="icon iconSmall cardIconUp" viewBox="0 0 24 24" onclick={() => clickedMove(-1)}><path d={mdiChevronUp} /></svg>
        <svg class="icon iconSmall cardIconDown" viewBox="0 0 24 24" onclick={() => clickedMove(1)}><path d={mdiChevronDown} /></svg>
        <svg class="icon iconSmall cardIconLeft" viewBox="0 0 24 24" onclick={() => clickedMoveToList(-1)}><path d={mdiChevronLeft} /></svg>
        <svg class="icon iconSmall cardIconRight" viewBox="0 0 24 24" onclick={() => clickedMoveToList(1)}><path d={mdiChevronRight} /></svg>
    </div >;
}