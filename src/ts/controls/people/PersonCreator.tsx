import { mdiPlusBoxOutline } from '@mdi/js';
import { App_I } from '../../App';
import Person from '../../tree/Person';


export default class PersonCreator {
    static init(app: App_I): HTMLElement {
        const firstNameInput = <input class="controlsInput" type="text" placeholder="First name" />;
        const lastNameInput = <input class="controlsInput" type="text" placeholder="Last name" />;
        const lastNameAtBirthInput = <input class="controlsInput" type="text" placeholder="Last name at birth" />;
        const birthInput = <input class="controlsInput" type="date" />;
        const deathInput = <input class="controlsInput" type="date" />;

        const onClickAdd = () => {
            const info = {
                firstName: firstNameInput.value.split(" "),
                lastName: lastNameInput.value,
                lastNameAtBirth: lastNameAtBirthInput.value,
                birth: new Date(birthInput.value),
                death: deathInput.value ? new Date(deathInput.value) : null
            };
            const person = Person.create(info);
            app.tree.people.push(person);

            [firstNameInput, lastNameInput, lastNameAtBirthInput, birthInput, deathInput].forEach(i => i.value = "");
        };

        const creator = <div id="personCreatorInner">
            {firstNameInput}
            {lastNameInput}
            {lastNameAtBirthInput}
            {birthInput}
            {deathInput}
        </div>;

        const showBtn = <div class="btn personCreatorBtn personCreatorBtnAdd" onclick={onClickAdd}>
            <svg class="icon" viewBox="0 0 24 24"><path d={mdiPlusBoxOutline} /></svg>
        </div>;

        return <div class="personCreator">
            {creator}
            {showBtn}
        </div>;
    }
}