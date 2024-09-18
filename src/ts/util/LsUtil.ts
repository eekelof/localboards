import { Board_I } from "../App";

export default class LsUtil {
    static LOCAL_STORAGE_PREFIX = "board-";

    static getAllIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(LsUtil.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(LsUtil.LOCAL_STORAGE_PREFIX.length));
        return res;
    }
    static save(board: Board_I) {
        if (board)
            localStorage.setItem(LsUtil.LOCAL_STORAGE_PREFIX + board.id, JSON.stringify(board));
    }
    static load(id: string) {
        const board = localStorage.getItem(LsUtil.LOCAL_STORAGE_PREFIX + id);
        const parsed = board ? JSON.parse(board) : null;
        if (parsed)
            localStorage.setItem("selectedBoard", parsed.id);

        return parsed;
    }
    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = LsUtil.load(selected) || LsUtil.getDeafaultBoard();
        LsUtil.save(board);
        return board;
    }
    static getDeafaultBoard(id = "New Board"): Board_I {
        const todoList = { id: crypto.randomUUID(), title: "Todo", cards: [] };
        const doingList = { id: crypto.randomUUID(), title: "Doing", cards: [] };
        const doneList = { id: crypto.randomUUID(), title: "Done", cards: [] };
        return {
            id,
            lists: [todoList, doingList, doneList]
        };
    }
}