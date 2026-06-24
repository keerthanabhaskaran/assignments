 //Implement the `WebComponent` Base Class with click and focus method
export class WebComponent {
    selector: string
    constructor(sel: string) {
        this.selector = sel
    }
    click(): void {
        console.log("Simulating a click on: " + this.selector)
    }
    focus(): void {
        console.log("Simulating focus on: " + this.selector)
    }
}
