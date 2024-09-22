import { mdiBulletinBoard, mdiDownload, mdiPlus, mdiUpload } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import UDUtil from '../../util/UDUtil';
import Util from '../../util/Util';
import { Icon } from '../misc/Icon';

export function BoardCreator(app: App_I) {
    const clickedCreate = () => {
        const board = Util.createBoard();
        app.board = board || app.board;

        Updater.board(app);
        Updater.boardSelector(app);
    };

    const btn = <div class="btn boardCreatorAddBtn" onclick={clickedCreate}>
        {Icon(mdiBulletinBoard)}
        {Icon(mdiPlus)}
    </div>;

    const uploadBtn = <div class="btn boardCreatorUploadBtn" onclick={() => UDUtil.upload(app)}> {Icon(mdiUpload)} </div>;
    const downloadBtn = <div class="btn boardCreatorDownloadBtn" onclick={() => UDUtil.download(app)}> {Icon(mdiDownload)} </div>;

    return <div class="boardCreator">
        {btn}
        {uploadBtn}
        {downloadBtn}
    </div>;
}