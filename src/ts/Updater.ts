import { App_I, Card_I, List_I } from "./App";
import { Board, Lists } from "./components/board/Board";
import { Card } from "./components/board/Card";
import { Cards, List } from "./components/board/List";
import { BoardSelector } from "./components/sidebar/BoardSelector";
import LSUtil from "./util/LSUtil";

/**
 * Updates DOM elements and saves board to local storage
 */
export default class Updater {
    static boardSelector(app: App_I) {
        Updater.#inner(app, "boardSelector", BoardSelector(app));
    }
    static board(app: App_I) {
        Updater.#inner(app, "board", Board(app));
    }
    static lists(app: App_I) {
        Updater.#inner(app, "lists", Lists(app));
    }
    static list(app: App_I, list: List_I) {
        Updater.#inner(app, "list-" + list.id, List(app, list));
    }
    static cards(app: App_I, list: List_I) {
        Updater.#inner(app, "cards-" + list.id, Cards(app, list));
    }
    static card(app: App_I, list: List_I, card: Card_I) {
        Updater.#inner(app, "card-" + card.id, Card(app, list, card));
    }
    static #inner(app: App_I, id: string, e: HTMLElement) {
        const old = document.getElementById(id)!;

        const scrollTop = old.scrollTop;
        const scrollLeft = old.scrollLeft;
        old.replaceWith(e);
        e.scrollTop = scrollTop;
        e.scrollLeft = scrollLeft;

        LSUtil.set(app.board);
    }
}