import { mdiBulletinBoard, mdiDownload, mdiPlus, mdiUpload } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import UDUtil from '../../util/UDUtil';
import Util from '../../util/Util';

export function BoardCreator(app: App_I) {
    const clickedCreate = () => {
        const board = Util.createBoard();
        app.board = board || app.board;

        Updater.board(app);
        Updater.boardSelector(app);
    };

    const btn = <div class="btn boardCreatorAddBtn" onclick={clickedCreate}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiBulletinBoard} /></svg>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlus} /></svg>
    </div>;

    const uploadBtn = <div class="btn boardCreatorUploadBtn" onclick={() => UDUtil.upload(app)}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiUpload} /></svg>
    </div>;
    const downloadBtn = <div class="btn boardCreatorDownloadBtn" onclick={() => UDUtil.download(app)}>
        <svg class="icon" viewBox="0 0 24 24"><path d={mdiDownload} /></svg>
    </div>;

    return <div class="boardCreator">
        {btn}
        {uploadBtn}
        {downloadBtn}
    </div>;
}