
import { mdiPlusBoxOutline } from '@mdi/js';

export default class App {
    static init() {
        const element = <div>
            <h1>Vite + TypeScript + SoloJSX</h1>
            <br />
            <br />
            <svg width="24" height="24" viewBox="0 0 24 24"><path d={mdiPlusBoxOutline} />asdf</svg>
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="45" cx="50" cy="50" fill="red" />
            </svg>
        </div>

        const style = {
            backgroundColor: "#ff0"
        }
        const e = <div style={style}> Hello </div>
        document.body.append(element, e)
    }
}