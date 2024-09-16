
import { mdiPlusBoxOutline } from '@mdi/js';

export default class App {
    static init() {
        const element = <div>
            <h1>Vite + TypeScript + SoloJSX</h1>
            <br />
            <br />
            <svg width="24" height="24" viewBox="0 0 24 24"><path d={mdiPlusBoxOutline} />asdf</svg>
        </div>

        const style = {
            backgroundColor: "#ff0"
        }
        const e = <div style={style}> Hello </div>
        document.body.append(element, e)
    }
}