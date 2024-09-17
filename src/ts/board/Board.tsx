import { App_I } from '../App';
import { List_I } from './List';

export interface Board_I {
    id: string;
    lists: List_I[];
}
export default class Board {
    static init(app: App_I) {

    }
}

