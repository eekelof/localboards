import { mdiDeveloperBoard, mdiDownload, mdiPlus, mdiUpload } from '@mdi/js';
import { App_I } from '../../App';
import LSHelper from '../../data/LSHelper';
import { Board_I } from '../board/Board';
import BoardSelector from './BoardSelector';

export default class BoardCreator {
    static init(app: App_I): HTMLElement {
        const input = <input class="boardCreatorInput" type="text" placeholder="New Board" />;

        const onclick = () => {
            const board = BoardCreator.createBoard(input.value);
            app.board = board || app.board;
            input.value = "";
            BoardCreator.#setCreateBtnOpacity(btn, false);
            BoardSelector.updateList(app);
        };
        const btn = <div class="btn boardCreatorAddBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiDeveloperBoard} /></svg>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlus} /></svg>
        </div>;
        BoardCreator.#setCreateBtnOpacity(btn, false);

        input.onkeydown = () => {
            setTimeout(() => BoardCreator.#setCreateBtnOpacity(btn, input.value.length > 0));
        };


        const uploadBtn = <div class="btn boardCreatorUploadBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiUpload} /></svg>
        </div>;
        const downloadBtn = <div class="btn boardCreatorDownloadBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiDownload} /></svg>
        </div>;

        return <div class="boardCreator">
            {input}
            {btn}
            {uploadBtn}
            {downloadBtn}
        </div>;
    }
    static createBoard(id = "Example Board"): Board_I | null {
        if (id.length === 0)
            return null;
        if (LSHelper.load(id))
            return null;
        const board = { id, lists: [] };
        LSHelper.save(board);
        return board;
    }
    static #setCreateBtnOpacity(btn: HTMLElement, active: boolean) {
        btn.style.opacity = active ? "1" : "0.3";
        btn.style.cursor = active ? "pointer" : "default";
    }
}

