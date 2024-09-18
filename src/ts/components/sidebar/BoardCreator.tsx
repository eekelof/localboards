import { mdiBulletinBoard, mdiDownload, mdiPlus, mdiUpload } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import UiUtil from '../../util/UiUtil';

export function BoardCreator(app: App_I) {
    const input = <input class="boardCreatorInput" type="text" placeholder="New Board" maxlength="18" />;

    const onclick = () => {
        const board = UiUtil.createBoard(input.value);
        app.board = board || app.board;
        input.value = "";
        UiUtil.setBtnOpacity(btn, false);

        Updater.board(app.board);
        Updater.boardSelector(app);
    };

    const btn = <div class="btn boardCreatorAddBtn" onclick={onclick}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiBulletinBoard} /></svg>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlus} /></svg>
    </div>;
    UiUtil.setBtnOpacity(btn, false);

    input.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter")
            onclick();
        setTimeout(() => UiUtil.setBtnOpacity(btn, input.value.length > 0));
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

