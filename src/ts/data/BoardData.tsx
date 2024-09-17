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
    static init(id = "Example Board"): Board_I {
        const todoList = { title: "Todo", cards: [] };
        const doingList = { title: "Doing", cards: [] };
        const doneList = { title: "Done", cards: [] };
        return {
            id,
            lists: [todoList, doingList, doneList]
        };
    }
    static addList(board: Board_I, list: List_I) {
        board.lists.push(list);
    }
    static removeList(board: Board_I, list: List_I) {
        board.lists = board.lists.filter(l => l !== list);
    }
    static addCard(list: List_I, card: Card_I) {
        list.cards.push(card);
    }
    static removeCard(list: List_I, card: Card_I) {
        list.cards = list.cards.filter(c => c !== card);
    }
}

