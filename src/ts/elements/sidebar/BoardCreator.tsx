import { mdiDeveloperBoard, mdiDownload, mdiPlus, mdiUpload } from '@mdi/js';
import { App_I } from '../../App';
import LSHelper from '../../data/LSHelper';
import { Board_I } from '../board/Board';
import BoardSelector from './BoardSelector';

export default class BoardCreator {
    static init(app: App_I): HTMLElement {
        const boardSelector = BoardSelector.init(app);
        const input = <input class="boardCreatorInput" type="text" placeholder="New board" />;

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

        const themeToggle = BoardCreator.#getThemeToggle();
        themeToggle.onclick = () => document.body.classList.toggle("dark");

        return <div class="sidebar">
            <div class="sidebarTitle">Boards</div>
            {themeToggle}
            {boardSelector}
            <div class="boardCreator">
                {input}
                {btn}
                {uploadBtn}
                {downloadBtn}
            </div>
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
    }
    static #getThemeToggle() {
        return <div class="theme-toggle" title="Toggle theme">
            <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <mask class="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
                <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                <g class="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
            </svg>
        </div>;
    }
}

