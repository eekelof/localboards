import { App_I } from '../App';
import { Person_I } from './Person';

export default class Board {
    static get(app: App_I) {
        const selected = app.people.get(selectedID);
        const res: Person_I[] = [];
        const roots = Board.#getRoots(app, selected, res);
        // for (const p of app.people) {

        // }
    }
    static #getRoots(app: App_I, p: Person_I, res: Person_I[]) {
        const mother = app.people.get(p.mother);
        const father = app.people.get(p.father);
        if (!mother && !father)
            res.push(p);

        if (mother)
            Board.#getRoots(app, mother, res);
        if (father)
            Board.#getRoots(app, father, res);
    }
    static #buildBoard(app: App_I, id: string) {
        const board = Board.get(app, id);
        const e = <div></div>;
        const hlines = [];
        const hline = {
            offset: 0,
            e: <div class="hline"> </div>
        };
        hlines.push(hline);
        //create viusal board
        // height = partners*340px


        return e;
    }
    static person(person: Person_I): HTMLElement {
        const birth = person.info.birth;
        const death = person.info.death;
        const birthText = [birth.getFullYear(), birth.getMonth(), birth.getDate()].join("-");
        const deathText = death ? [birth.getFullYear(), birth.getMonth(), birth.getDate()].join("-") : "-";

        const e = (
            <div>
                <div>{person.info.firstName.join(" ")} {person.info.lastName}</div>
                <div>⭐️{birthText} </div>
                <div>✝️{deathText} </div>
            </div>
        );
        return e;
    }
}

