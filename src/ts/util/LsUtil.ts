import { Board_I } from "../App";

export default class LsUtil {
    static LOCAL_STORAGE_PREFIX = "board-";

    static getAllBoardIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(LsUtil.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(LsUtil.LOCAL_STORAGE_PREFIX.length));
        return res.sort((a, b) => LsUtil.get(b)!.created - LsUtil.get(a)!.created);
    }
    static set(board: Board_I) {
        localStorage.setItem(LsUtil.LOCAL_STORAGE_PREFIX + board.id, JSON.stringify(board));
        localStorage.setItem("selectedBoard", board.id);
    }
    static get(id: string): Board_I | null {
        const board = localStorage.getItem(LsUtil.LOCAL_STORAGE_PREFIX + id);
        return board ? JSON.parse(board) : null;
    }
    static remove(id: string) {
        localStorage.removeItem(LsUtil.LOCAL_STORAGE_PREFIX + id);
    }

    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = LsUtil.get(selected) || LsUtil.createBoard();
        LsUtil.set(board);
        return board;
    }
    static createBoard(id = "", depth = 0): Board_I {
        const nid = (id.length > 0 ? id : "New Board") + (depth > 0 ? depth : "");
        if (LsUtil.get(nid))
            return LsUtil.createBoard(id, depth + 1);

        const todoList = { id: crypto.randomUUID(), title: "Todo", cards: [] };
        const doingList = { id: crypto.randomUUID(), title: "Doing", cards: [] };
        const doneList = { id: crypto.randomUUID(), title: "Done", cards: [] };
        return {
            id: nid,
            created: Date.now(),
            lists: [todoList, doingList, doneList]
        };
    }

    static getTheme() {
        return localStorage.getItem("theme");
    }
    static setTheme(theme: "dark" | "light") {
        localStorage.setItem("theme", theme);
    }
}