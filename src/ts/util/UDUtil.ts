import { App_I } from "../App";
import Updater from "../Updater";

export default class UDUtil {
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

                Updater.board(app);
                Updater.boardSelector(app);
            };
            reader.readAsText(file);
        };
        fileInput.click();
    }
    static downloadBoard(app: App_I) {
        const data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(app.board));
        const a = document.createElement("a");
        a.href = data;
        a.download = "board-" + app.board.id + ".json";
        a.click();
    }
}