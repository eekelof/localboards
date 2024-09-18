import { mdiArrowLeft, mdiTrashCan } from "@mdi/js";

export function ConfirmBox(text: string, onConfirm: () => void) {
    const onCancel = () => e.remove();
    const e = <div class="confirmBox">
        <div class="confirmBoxText">{text}</div>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={onCancel}><path d={mdiArrowLeft} /></svg>
        <svg class="icon iconSmall" viewBox="0 0 24 24" onclick={onConfirm}><path d={mdiTrashCan} /></svg>
    </div>;

    return e;
}