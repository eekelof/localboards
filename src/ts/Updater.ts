import { App_I, Board_I, Card_I, List_I } from "./App";
import { Board } from "./components/board/Board";
import { Card } from "./components/board/Card";
import { Cards, List } from "./components/board/List";
import { BoardSelector } from "./components/sidebar/BoardSelector";
import LsUtil from "./util/LsUtil";

/**
 * Updates DOM elements and saves board to local storage
 */
export default class Updater {
    static boardSelector(app: App_I) {
        document.getElementById("boardSelector")!.replaceWith(BoardSelector(app));
    }
    static board(board: Board_I) {
        document.getElementById("board")!.replaceWith(Board(board));
        LsUtil.set(board);
    }
    static list(board: Board_I, list: List_I) {
        document.getElementById("list-" + list.id)!.replaceWith(List(board, list));
        LsUtil.set(board);
    }
    static cards(board: Board_I, list: List_I) {
        document.getElementById("cards-" + list.id)!.replaceWith(Cards(board, list))
        LsUtil.set(board);
    }
    static card(board: Board_I, list: List_I, card: Card_I) {
        document.getElementById("card-" + card.id)!.replaceWith(Card(board, list, card))
        LsUtil.set(board);
    }
}