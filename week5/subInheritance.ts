import {WebComponent} from './baseInheritence.js'
//Implement the `Button` Derived Class and override the click()
class Button extends WebComponent {
    constructor(btnSelector: string) {
        super(btnSelector)
    }
    override click(): void {
        console.log("You clicked the Button: " + this.selector)
    }
}
//Implement the `TextInput` Derived Class with `enterText(text: string)` method that sets `value`
class TextInput extends WebComponent {
    value: string = ''
    constructor(txtSelector: string) {
        super(txtSelector)
    }
    enterText(text: string): void {
        this.value = text
        console.log("Simulating text entry for " + this.selector + " as " + this.value)
    }
}
//Define a function testComponent
function testComponents() {
    const btn = new Button("login")
    const input = new TextInput("userName")
    //simulate clicking the button and entering text into the text input.
    btn.click()
    input.enterText("Keerthana")
}
//call the function
testComponents()
