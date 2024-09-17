import { mdiPlusBoxOutline } from '@mdi/js';
import { App_I } from '../App';

export interface Card_I {
    title: string;
    color: string;
}

export interface List_I {
    cards: Card_I[];
}

export default class List {
    static init(app: App_I): HTMLElement {
        const firstNameInput = <input class="sidebarInput" type="text" placeholder="First id" />;
        const lastNameInput = <input class="sidebarInput" type="text" placeholder="Last id" />;
        const lastNameAtBirthInput = <input class="sidebarInput" type="text" placeholder="Last id at birth" />;

        const onClickAdd = () => {
            const info = {
                firstName: firstNameInput.value.split(" "),
                lastName: lastNameInput.value,
                lastNameAtBirth: lastNameAtBirthInput.value,
            };
            // const person = Person.create(info);
            // app.board.people.push(person);

            [firstNameInput, lastNameInput, lastNameAtBirthInput].forEach(i => i.value = "");
        };

        const creator = <div id="personCreatorInner">
            {firstNameInput}
            {lastNameInput}
            {lastNameAtBirthInput}
        </div>;

        const showBtn = <div class="btn personCreatorBtn" onclick={onClickAdd}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlusBoxOutline} /></svg>
        </div>;

        return <div class="personCreator">
            {creator}
            {showBtn}
        </div>;
    }
    static #create() {
        return {
            id: Math.random().toString(36).substring(7),
            firstName: "",
            lastName: "",
            lastNameAtBirth: "",
        };
    }
}