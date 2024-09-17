import BoardData, { Board_I } from "./BoardData";

export default class LSHelper {
    static LOCAL_LSHelper_PREFIX = "board-";

    static getAllIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(LSHelper.LOCAL_LSHelper_PREFIX));
        const res = ids.map(k => k.slice(LSHelper.LOCAL_LSHelper_PREFIX.length));
        return res;
    }
    static save(board: Board_I) {
        if (board)
            localStorage.setItem(LSHelper.LOCAL_LSHelper_PREFIX + board.id, JSON.stringify(board));
    }
    static load(id: string) {
        const board = localStorage.getItem(LSHelper.LOCAL_LSHelper_PREFIX + id);
        const parsed = board ? JSON.parse(board) : null;
        if (parsed)
            localStorage.setItem("selectedBoard", parsed.id);

        return parsed;
    }
    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = LSHelper.load(selected) || BoardData.init();
        LSHelper.save(board);
        return board;
    }
}

