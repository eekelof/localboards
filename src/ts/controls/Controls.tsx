import { App_I } from '../App';
import BoardCreator from './board/BoardCreator';
import PersonCreator from './people/PersonCreator';

export default class Controls {
    static init(app: App_I) {
        const boardCreator = BoardCreator.init(app);
        const personCreator = PersonCreator.init(app);

        return <div class="controls">
            {boardCreator}
            {personCreator}
        </div>;
    }
}