export interface Card_I {
    title: string;
    color: string;
}
export interface List_I {
    title: string;
    cards: Card_I[];
}
export interface Board_I {
    id: string;
    lists: List_I[];
}

export default class BoardData {
    static init(id = "New Board"): Board_I {
        const todoList = { title: "Todo", cards: [] };
        const doingList = { title: "Doing", cards: [] };
        const doneList = { title: "Done", cards: [] };
        return {
            id,
            lists: [todoList, doingList, doneList]
        };
    }
}

