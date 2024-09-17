import { Board_I } from "../../board/Board";

export default class BoardHelper {
    static LOCAL_STORAGE_PREFIX = "board-";

    static getAllBoardIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(BoardHelper.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(BoardHelper.LOCAL_STORAGE_PREFIX.length));
        return res;
    }
    static saveBoard(board: Board_I) {
        if (board)
            localStorage.setItem(BoardHelper.LOCAL_STORAGE_PREFIX + board.id, JSON.stringify(board));
    }
    static loadBoard(id: string) {
        const board = localStorage.getItem(BoardHelper.LOCAL_STORAGE_PREFIX + id);
        const parsed = board ? JSON.parse(board) : null;
        if (parsed)
            localStorage.setItem("selectedBoard", parsed.id);

        return parsed;
    }
    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = BoardHelper.loadBoard(selected) || BoardHelper.#getExampleBoard();
        BoardHelper.saveBoard(board);
        return board;
    }
    static #getExampleBoard(): Board_I {
        const todoList = { title: "Todo", cards: [] };
        const doingList = { title: "Doing", cards: [] };
        const doneList = { title: "Done", cards: [] };
        return {
            id: "Example Board",
            lists: [todoList, doingList, doneList]
        };
    }
}

