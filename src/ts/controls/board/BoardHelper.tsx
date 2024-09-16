import { Board_I } from '../../App';

export default class BoardHelper {
    static LOCAL_STORAGE_PREFIX = "board-";

    static getAllBoardIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(BoardHelper.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(BoardHelper.LOCAL_STORAGE_PREFIX.length));
        return res;
    }
    static saveBoard(board: Board_I) {
        if (board)
            localStorage.setItem(BoardHelper.LOCAL_STORAGE_PREFIX + board.id, JSON.stringify(board));
    }
    static loadBoard(id: string) {
        const board = localStorage.getItem(BoardHelper.LOCAL_STORAGE_PREFIX + id);
        const parsed = board ? JSON.parse(board) : null;
        if (parsed)
            localStorage.setItem("selectedBoard", parsed.id);

        return parsed;
    }
    static getBoardOnStart() {
        const selected = localStorage.getItem("selectedBoard")!;
        const board = BoardHelper.loadBoard(selected) || BoardHelper.#getExampleBoard();
        BoardHelper.saveBoard(board);
        return board;
    }
    static #getExampleBoard() {
        return {
            id: "Example Board",
            people: [{
                id: "1",
                info: {
                    firstName: ["John"],
                    lastName: "Doe",
                    lastNameAtBirth: "Doe",
                    birth: new Date("1980-02-01"),
                    death: null
                },
                mother: "",
                father: ""
            }, {
                id: "2",
                info: {
                    firstName: ["Jane"],
                    lastName: "Doe",
                    lastNameAtBirth: "Smith",
                    birth: new Date("1980-01-01"),
                    death: null
                },
                mother: "",
                father: ""
            }, {
                id: "3",
                info: {
                    firstName: ["Bob"],
                    lastName: "Doe",
                    lastNameAtBirth: "Doe",
                    birth: new Date("2010-01-01"),
                    death: null
                },
                mother: "2",
                father: "1"
            }
            ]
        };
    }
}

