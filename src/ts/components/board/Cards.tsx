import { Board_I, List_I } from '../../App';
import Card from './Card';

export function Cards(board: Board_I, list: List_I) {
    return <div class="cards">
        {list.cards.map(card => Card.init(board, list, card))}
    </div>;
}