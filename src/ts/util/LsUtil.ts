import { Board_I } from "../App";

export default class LsUtil {
    static LOCAL_STORAGE_PREFIX = "board-";

    static getAllBoardIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(LsUtil.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(LsUtil.LOCAL_STORAGE_PREFIX.length));
        return res.sort((a, b) => LsUtil.load(a)!.created - LsUtil.load(b)!.created);
    }
    static save(board: Board_I) {
        localStorage.setItem(LsUtil.LOCAL_STORAGE_PREFIX + board.id, JSON.stringify(board));
    }
    static load(id: string): Board_I | null {
        const board = localStorage.getItem(LsUtil.LOCAL_STORAGE_PREFIX + id);
        const parsed = board ? JSON.parse(board) : null;
        if (parsed)
            localStorage.setItem("selectedBoard", parsed.id);

        return parsed;
    }
    static remove(id: string) {
        localStorage.removeItem(LsUtil.LOCAL_STORAGE_PREFIX + id);
    }

    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        return LsUtil.load(selected) || LsUtil.createBoard();
    }
    static createBoard(id = "", depth = 0): Board_I {
        const nid = (id.length > 0 ? id : "New Board") + (depth > 0 ? depth : "");
        if (LsUtil.load(nid))
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
}