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
        const scroll = document.getElementById("boardSelector")!.scrollTop;
        document.getElementById("boardSelector")!.replaceWith(BoardSelector(app));
        document.getElementById("boardSelector")!.scrollTop = scroll;
    }
    static board(app: App_I) {
        document.getElementById("board")!.replaceWith(Board(app));
        LSUtil.set(app.board);
    }
    static lists(app: App_I) {
        const scroll = document.getElementById("lists")!.scrollLeft;
        document.getElementById("lists")!.replaceWith(Lists(app));
        document.getElementById("lists")!.scrollLeft = scroll;
        LSUtil.set(app.board);
    }
    static list(app: App_I, list: List_I) {
        document.getElementById("list-" + list.id)!.replaceWith((List(app, list)));
        LSUtil.set(app.board);
    }
    static cards(app: App_I, list: List_I) {
        const scroll = document.getElementById("cards-" + list.id)!.scrollTop;
        document.getElementById("cards-" + list.id)!.replaceWith(Cards(app, list));
        document.getElementById("cards-" + list.id)!.scrollTop = scroll;
        LSUtil.set(app.board);
    }
    static card(app: App_I, list: List_I, card: Card_I) {
        document.getElementById("card-" + card.id)!.replaceWith(Card(app, list, card));
        LSUtil.set(app.board);
    }
}