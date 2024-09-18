import { mdiTrashCan } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import LsUtil from '../../util/LsUtil';

export function BoardSelector(app: App_I) {
    const boards = LsUtil.getAllBoardIDs();
    return <div id="boardSelector">
        {boards.map(id => {
            const select = () => {
                const t = LsUtil.load(id);
                app.board = t || app.board;
                Updater.board(app.board);
                Updater.boardSelector(app);
            };

            const remove = () => {
                LsUtil.remove(id);
                Updater.boardSelector(app);
            };

            const selected = app.board.id === id;
            const className = "btn boardCard" + (selected ? " boardCardSelected" : "");
            return <div class={className} onclick={select}>
                <div class="boardCardTitle">{id}</div>
                {selected ? null : <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={remove}><path d={mdiTrashCan} /></svg>}
            </div>;
        })}
    </div>;
}