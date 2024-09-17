import { mdiPlusBoxOutline } from '@mdi/js';
import { App_I } from '../../App';


export default class ListCreator {
    static init(app: App_I): HTMLElement {
        const firstNameInput = <input class="sidebarInput" type="text" placeholder="First id" />;

        const onClickAdd = () => {
            const info = {
                firstName: firstNameInput.value.split(" "),
            };
            firstNameInput.value = "";
        };

        const creator = <div id="personCreatorInner">
            {firstNameInput}
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