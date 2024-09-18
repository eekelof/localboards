import { Board_I } from "../App";

export default class Util {
    static LOCAL_STORAGE_PREFIX = "board-";

    static getAllIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(Util.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(Util.LOCAL_STORAGE_PREFIX.length));
        return res;
    }
    static save(board: Board_I) {
        if (board)
            localStorage.setItem(Util.LOCAL_STORAGE_PREFIX + board.id, JSON.stringify(board));
    }
    static load(id: string) {
        const board = localStorage.getItem(Util.LOCAL_STORAGE_PREFIX + id);
        const parsed = board ? JSON.parse(board) : null;
        if (parsed)
            localStorage.setItem("selectedBoard", parsed.id);

        return parsed;
    }
    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = Util.load(selected) || Util.#getDeafaultBoard();
        Util.save(board);
        return board;
    }

    static setBtnOpacity(btn: HTMLElement, active: boolean) {
        btn.style.opacity = active ? "1" : "0.3";
        btn.style.cursor = active ? "pointer" : "default";
    }

    static #getDeafaultBoard(id = "New Board"): Board_I {
        const todoList = { title: "Todo", cards: [] };
        const doingList = { title: "Doing", cards: [] };
        const doneList = { title: "Done", cards: [] };
        return {
            id,
            lists: [todoList, doingList, doneList]
        };
    }
}