import BoardHelper from './controls/board/BoardHelper';
import Controls from './controls/Controls';

export interface Card_I {
    id: string;
    title: string;
}
export interface List_I {
    id: string;
    cards: Card_I[];
}
export interface Board_I {
    id: string;
    lists: List_I[];
}
export interface App_I {
    board: Board_I
}

export default class App {
    static init() {
        const app: App_I = {
            board: BoardHelper.getBoardOnStart()
        };
        const controls = Controls.init(app);

        const d = new Date();
        const test = <div>
            <div>0</div>
            <div>{d}</div>
        </div>;
        document.body.append(controls, test);
    }
}

