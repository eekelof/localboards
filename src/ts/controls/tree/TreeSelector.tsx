import { App_I } from '../../App';
import TreeHelper from './TreeHelper';

export default class TreeSelector {
    static init(app: App_I): HTMLElement {
        const list = <div id="treeSelector"></div>;
        setTimeout(() => TreeSelector.updateList(app));
        return list;
    }
    static updateList(app: App_I) {
        const list = document.getElementById("treeSelector")!;
        list.innerHTML = "";
        const trees = TreeHelper.getAllTreeIDs();
        for (const id of trees) {
            const onclick = () => {
                const t = TreeHelper.loadTree(id);
                app.tree = t || app.tree;
                TreeSelector.updateList(app);
            };
            const className = "btn treeCard" + (app.tree.id === id ? " treeCardSelected" : "");
            const e = <div class={className} onclick={onclick}>{id}</div>;
            list.append(e);
        }
    }
}

