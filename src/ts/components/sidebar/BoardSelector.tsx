import { mdiPalette, mdiPencil, mdiTrashCan } from '@mdi/js';
import { App_I } from '../../App';
import Updater from '../../Updater';
import { BG_COLORS } from '../../util/Constants';
import LSUtil from '../../util/LSUtil';
import Util from '../../util/Util';

export function BoardSelector(app: App_I) {
    const ids = LSUtil.getIDs();
    const boards = ids.map(id => {
        const input = <input class="boardCardInput" type="text" maxlength="18" enterkeyhint="done" />;
        input.onclick = (e: MouseEvent) => e.stopPropagation();
        input.onkeydown = (e: KeyboardEvent) => {
            if (e.key != "Escape" && e.key != "Enter")
                return;
            LSUtil.remove(app.board.id);
            app.board.id = (e.key == "Enter") ? Util.getAvailableBoardId(input.value.trim()) || app.board.id : app.board.id;
            Updater.board(app);
            Updater.boardSelector(app);
        };

        const clickedSelect = () => {
            const t = LSUtil.get(id);
            app.board = t || app.board;
            Updater.board(app);
            Updater.boardSelector(app);
        };

        const clickedEdit = (e: MouseEvent) => {
            e.stopPropagation();
            input.style.display = "block";
            input.focus();
        };

        const clickedColor = (e: MouseEvent) => {
            e.stopPropagation();
            app.board.color = (app.board.color + 1) % BG_COLORS.length;

            Updater.board(app);
            Updater.boardSelector(app);
        };

        const clickedRemove = (e: MouseEvent) => {
            e.stopPropagation();
            const onConfirm = () => {
                LSUtil.remove(id);
                Updater.boardSelector(app);
            };
            Util.showConfirmBox("Delete board '" + id + "'?", onConfirm);
        };

        const selected = app.board.id === id;
        const className = "btn boardCard" + (selected ? " boardCardSelected" : "");

        return <div class={className} onclick={clickedSelect}>
            <div class="boardCardTitle">{id}</div>
            {input}
            {selected ? [
                <svg class="icon iconSmall boardCardEdit" viewBox="0 0 24 24" onclick={clickedEdit}><path d={mdiPencil} /></svg>,
                <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={clickedColor}><path d={mdiPalette} /></svg>
            ] : <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={clickedRemove}><path d={mdiTrashCan} /></svg>}
        </div>;
    });
    return <div id="boardSelector">{boards}</div>;
}