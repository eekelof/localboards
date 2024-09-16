import { mdiPlusBoxOutline } from '@mdi/js';
import { App_I } from '../../App';
import Person from '../../board/Person';

export default class PersonCreator {
    static init(app: App_I): HTMLElement {
        const firstNameInput = <input class="controlsInput" type="text" placeholder="First name" />;
        const lastNameInput = <input class="controlsInput" type="text" placeholder="Last name" />;
        const lastNameAtBirthInput = <input class="controlsInput" type="text" placeholder="Last name at birth" />;

        const onClickAdd = () => {
            const info = {
                firstName: firstNameInput.value.split(" "),
                lastName: lastNameInput.value,
                lastNameAtBirth: lastNameAtBirthInput.value,
            };
            const person = Person.create(info);
            app.board.people.push(person);

            [firstNameInput, lastNameInput, lastNameAtBirthInput, birthInput, deathInput].forEach(i => i.value = "");
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
}