import { App_I, Board_I } from "../App";
import Updater from "../Updater";

export default class UDUtil {
    static downloadBoard(board: Board_I) {
        const data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(board));
        const a = document.createElement("a");
        a.href = data;
        a.download = "board-" + board.id + ".json";
        a.click();
    }

    static uploadBoard(app: App_I) {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".json";
        fileInput.onchange = () => {
            const file = fileInput.files?.item(0);
            if (!file)
                return;

            const reader = new FileReader();
            reader.onload = () => {
                const board = JSON.parse(reader.result as string);
                app.board = board;

                Updater.board(app.board);
                Updater.boardSelector(app);
            };
            reader.readAsText(file);
        };
        fileInput.click();
    }
}
