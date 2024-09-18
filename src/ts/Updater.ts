import { App_I, Board_I, Card_I, List_I } from "./App";
import { Board } from "./components/board/Board";
import { Card } from "./components/board/Card";
import { Cards, List } from "./components/board/List";
import { BoardSelector } from "./components/sidebar/BoardSelector";

export default class Updater {
    static boardSelector(app: App_I) {
        Updater.#update(document.getElementById("boardSelector")!, BoardSelector(app));
    }
    static board(board: Board_I) {
        Updater.#update(document.getElementById("board")!, Board(board));
    }
    static list(board: Board_I, list: List_I) {
        Updater.#update(document.getElementById("list-" + list.id)!, List(board, list));
    }
    static cards(board: Board_I, list: List_I) {
        Updater.#update(document.getElementById("cards-" + list.id)!, Cards(board, list));
    }
    static card(board: Board_I, list: List_I, card: Card_I) {
        Updater.#update(document.getElementById("card-" + card.id)!, Card(board, list, card));
    }

    static #update(oldElement: HTMLElement, newElement: HTMLElement) {
        oldElement.replaceWith(newElement);
    }
}
