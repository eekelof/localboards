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

    static getTheme() {
        return JSON.parse(localStorage.getItem("theme") ?? "false");
    }
    static setTheme(isDark: boolean) {
        localStorage.setItem("theme", isDark.toString());
    }
}