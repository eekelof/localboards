import { App_I, Board_I } from "../App";
import { Board } from "../components/board/Board";
import { BoardSelector } from "../components/sidebar/BoardSelector";

export default class Updater {
    static boardSelector(app: App_I) {
        Updater.#update(document.getElementById("boardSelector")!, BoardSelector(app));
    }
    static board(board: Board_I) {
        Updater.#update(document.getElementById("board")!, Board(board));
    }
    static #update(oldComponent: HTMLElement, newComponent: HTMLElement) {
        oldComponent.replaceWith(newComponent);
    }
}
