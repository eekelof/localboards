import Controls from './controls/Controls';
import TreeHelper from './controls/tree/TreeHelper';
import { Person_I } from './tree/Person';

export interface Tree_I {
    id: string;
    people: Person_I[];
}
export interface App_I {
    tree: Tree_I
}

export default class App {
    static init() {
        const app: App_I = {
            tree: TreeHelper.getTreeOnStart()
        };
        const controls = Controls.init(app);

        document.body.append(controls);
    }
}

