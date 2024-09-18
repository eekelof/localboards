import { mdiTrashCan } from '@mdi/js';
import { App_I } from '../../App';
import LsUtil from '../../util/LsUtil';

export function BoardSelector(app: App_I) {
    const boards = LsUtil.getAllIDs();
    return <div id="boardSelector">
        {boards.map(id => {
            const onclick = () => {
                const t = LsUtil.load(id);
                app.board = t || app.board;
                BoardSelector.updateList(app);
            };

            const selected = app.board.id === id;
            const className = "btn boardCard" + (selected ? " boardCardSelected" : "");
            return <div class={className} onclick={onclick}>
                <div class="boardCardTitle">{id}</div>
                {selected ? null : <svg class="icon iconSmall" viewBox="0 0 24 24"><path d={mdiTrashCan} /></svg>}
            </div>;
        })}
    </div>;
}

