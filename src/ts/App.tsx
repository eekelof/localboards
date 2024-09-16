export default class App {
    static init() {
        const onClick = (text: string) => alert(text)
        const element = <div>
            <h1>Vite + TypeScript + SoloJSX</h1>
            <br />
            <div style="cursor: pointer" onclick={() => onClick("Hello")}>Click me</div>
            <br />
            <img src="/vite.svg" alt="" />
        </div>
        document.body.append(element)
    }
}