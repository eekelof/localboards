import { mdiTrashCan } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import LSUtil from '../../util/LSUtil';
import Util from '../../util/Util';

export function BoardSelector(app: App_I) {
    const ids = LSUtil.getIDs();

    return <div id="boardSelector">
        {ids.map(id => {
            const select = () => {
                const t = LSUtil.get(id);
                app.board = t || app.board;
                Updater.board(app);
                Updater.boardSelector(app);
            };

            const remove = (e: MouseEvent) => {
                e.stopPropagation();
                const onConfirm = () => {
                    LSUtil.remove(id);
                    Updater.boardSelector(app);
                };
                Util.showConfirmBox("Delete board '" + id + "'?", onConfirm);
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