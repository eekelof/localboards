import { mdiPlusBoxOutline } from '@mdi/js';
import { App_I, Tree_I } from '../../App';
import TreeHelper from './TreeHelper';
import TreeSelector from './TreeSelector';

export default class TreeCreator {
    static init(app: App_I): HTMLElement {
        const treeSelector = TreeSelector.init(app);
        const input = <input class="controlsInput" type="text" placeholder="New tree name" />;

        const onclick = () => {
            const tree = TreeCreator.createTree(input.value);
            app.tree = tree || app.tree;
            input.value = "";
            TreeCreator.#setCreateBtnOpacity(btn, false);
            TreeSelector.updateList(app);
        };
        const btn = <div class="btn treeCreatorBtn" onclick={onclick}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlusBoxOutline} /></svg>
        </div>;
        TreeCreator.#setCreateBtnOpacity(btn, false);

        input.onkeydown = () => {
            setTimeout(() => {
                TreeCreator.#setCreateBtnOpacity(btn, input.value.length > 0);
            });
        };

        return <div class="treeCreator">
            {input}
            {btn}
            {treeSelector}
        </div>;
    }
    static createTree(id = "Family Tree"): Tree_I | null {
        if (id.length === 0)
            return null;
        if (TreeHelper.loadTree(id))
            return null;
        const tree = { id, people: [] };
        TreeHelper.saveTree(tree);
        return tree;
    }
    static #setCreateBtnOpacity(btn: HTMLElement, active: boolean) {
        btn.style.opacity = active ? "1" : "0.3";
    }
}

