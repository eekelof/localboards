import { Tree_I } from '../../App';

export default class TreeHelper {
    static LOCAL_STORAGE_PREFIX = "tree-";

    static getAllTreeIDs() {
        const ids = Object.keys(localStorage).filter(k => k.startsWith(TreeHelper.LOCAL_STORAGE_PREFIX));
        const res = ids.map(k => k.slice(TreeHelper.LOCAL_STORAGE_PREFIX.length));
        return res;
    }
    static saveTree(tree: Tree_I) {
        if (tree)
            localStorage.setItem(TreeHelper.LOCAL_STORAGE_PREFIX + tree.id, JSON.stringify(tree));
    }
    static loadTree(id: string) {
        const tree = localStorage.getItem(TreeHelper.LOCAL_STORAGE_PREFIX + id);
        const parsed = tree ? JSON.parse(tree) : null;
        if (parsed)
            localStorage.setItem("selectedTree", parsed.id);

        return parsed;
    }
    static getTreeOnStart() {
        const selected = localStorage.getItem("selectedTree")!;
        const tree = TreeHelper.loadTree(selected) || TreeHelper.#getExampleTree();
        TreeHelper.saveTree(tree);
        return tree;
    }
    static #getExampleTree() {
        return {
            id: "Example Tree",
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

