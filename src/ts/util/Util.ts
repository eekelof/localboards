import { Board_I } from "../App";
import { ConfirmBox } from "../components/misc/ConfirmBox";
import { BG_COLORS } from "./Constants";
import LSUtil from "./LSUtil";

export default class Util {
    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = LSUtil.get(selected) || Util.createBoard();
        LSUtil.set(board);
        return board;
    }
    static createBoard(): Board_I {
        const todoList = { id: crypto.randomUUID(), title: "Todo", cards: [] };
        const doingList = { id: crypto.randomUUID(), title: "Doing", cards: [] };
        const doneList = { id: crypto.randomUUID(), title: "Done", cards: [] };
        return {
            id: Util.getAvailableBoardId("New Board"),
            created: Date.now(),
            color: Math.floor(Math.random() * BG_COLORS.length),
            lists: [todoList, doingList, doneList]
        };
    }
    static getAvailableBoardId(suggestion: string) {
        let id = suggestion;
        const ids = LSUtil.getIDs();
        for (let i = 1; ids.includes(id); i++)
            id = suggestion + " " + i;
        return id;
    }
    static showConfirmBox(text: string, name: string, onConfirm: () => void) {
        document.body.append(ConfirmBox(text, name, onConfirm));
    }
}