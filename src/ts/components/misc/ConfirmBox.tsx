import { mdiArrowLeft, mdiTrashCan } from "@mdi/js";

export function ConfirmBox(text: string, onConfirm: () => void) {
    const clickedCancel = () => e.remove();
    const clickedConfirm = () => {
        onConfirm();
        e.remove();
    };

    const e = <div class="confirmBox" onclick={clickedCancel}>
        <div class="confirmBoxInner">
            {text}
            <svg class="icon iconSmall confirmBoxCancel" viewBox="0 0 24 24" onclick={clickedCancel}><path d={mdiArrowLeft} /></svg>
            <svg class="icon iconSmall confirmBoxConfirm" viewBox="0 0 24 24" onclick={clickedConfirm}><path d={mdiTrashCan} /></svg>
        </div>
    </div>;
    return e;
}