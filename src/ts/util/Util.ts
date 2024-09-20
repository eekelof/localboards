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
    static createBoard(id = "", depth = 0): Board_I {
        const nid = (id.length > 0 ? id : "New Board") + (depth > 0 ? depth : "");
        if (LSUtil.get(nid))
            return Util.createBoard(id, depth + 1);

        const todoList = { id: crypto.randomUUID(), title: "Todo", cards: [] };
        const doingList = { id: crypto.randomUUID(), title: "Doing", cards: [] };
        const doneList = { id: crypto.randomUUID(), title: "Done", cards: [] };
        return {
            id: nid,
            created: Date.now(),
            color: Math.floor(Math.random() * BG_COLORS.length),
            lists: [todoList, doingList, doneList]
        };
    }

    static setBtnVisibility(btn: HTMLElement, active: boolean) {
        btn.style.transform = active ? "scale(1)" : "scale(0)";
        btn.style.opacity = active ? "1" : "0";
    }

    static showConfirmBox(text: string, onConfirm: () => void) {
        document.body.append(ConfirmBox(text, onConfirm));
    }
}