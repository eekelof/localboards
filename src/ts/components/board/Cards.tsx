import { Board_I, List_I } from '../../App';
import { Card } from './Card';

export function Cards(board: Board_I, list: List_I) {
    return <div id={"cards-" + list.id} class="cards">
        {list.cards.map(card => Card(board, list, card))}
    </div>;
}