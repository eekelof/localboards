import { Board_I } from "../App";
import LsUtil from "./LsUtil";

export default class UiUtil {
    static setBtnOpacity(btn: HTMLElement, active: boolean) {
        btn.style.opacity = active ? "1" : "0.3";
        btn.style.cursor = active ? "pointer" : "default";
    }
    static createBoard(id = "New Board"): Board_I | null {
        if (id.length === 0)
            return null;
        if (LsUtil.load(id))
            return null;
        return LsUtil.getDeafaultBoard(id);
    }
}
