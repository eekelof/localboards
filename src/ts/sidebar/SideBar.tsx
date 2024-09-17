import { App_I } from '../App';
import BoardCreator from './board/BoardCreator';

export default class SideBar {
    static init(app: App_I) {
        const boardCreator = BoardCreator.init(app);

        return <div class="sideBar">
            {boardCreator}
        </div>;
    }
}