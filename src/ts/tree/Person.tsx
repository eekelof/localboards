export interface PersonInfo_I {
    firstName: string[];
    lastName: string;
    lastNameAtBirth: string;
    birth: Date;
    death: Date | null;
}
export interface Person_I {
    id: string;
    info: PersonInfo_I;
    mother: string;
    father: string;
}

export default class Person {
    static create(info: PersonInfo_I): Person_I {
        return {
            id: crypto.randomUUID(),
            info,
            mother: "",
            father: ""
        };
    }
    static setParent(person: Person_I, parent: Person_I, role: "mother" | "father") {
        person[role] = parent.id;
    }
}