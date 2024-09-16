import { App_I } from '../App';
import PersonCreator from './people/PersonCreator';
import TreeCreator from './tree/TreeCreator';

export default class Controls {
    static init(app: App_I) {
        const treeCreator = TreeCreator.init(app);
        const personCreator = PersonCreator.init(app);

        return <div class="controls">
            {treeCreator}
            {personCreator}
        </div>;
    }
}