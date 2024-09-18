import { mdiArrowLeft, mdiTrashCan } from "@mdi/js";

export function ConfirmBox(text: string, onConfirm: () => void) {
    const onCancel = () => e.remove();
    const onClickConfirm = () => {
        onConfirm();
        e.remove();
    };

    const e =
        <div class="confirmBox">
            <div class="confirmBoxInner">
                {text}
                <svg class="icon iconSmall confirmBoxCancel" viewBox="0 0 24 24" onclick={onCancel}><path d={mdiArrowLeft} /></svg>
                <svg class="icon iconSmall confirmBoxConfirm" viewBox="0 0 24 24" onclick={onClickConfirm}><path d={mdiTrashCan} /></svg>
            </div>
        </div>;

    return e;
}