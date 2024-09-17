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
            {false ? <div></div> : undefined}
            {false ? <div></div> : null}
            {false ? <div></div> : false}
            <div>0</div>
            <div>{d}</div>
            {[<div>hh</div>, <div>0 ms</div>]}
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
            </svg>
        </div>;
        // test.textContent = "1234";
        document.body.append(controls, test);
        const l = [1, 2, 3, [4, [5, 6]]]
        console.log(...l.flat(Infinity))
    }
}

