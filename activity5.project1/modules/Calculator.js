import Button from "./components/Button.js";
import Display from "./components/Display.js";
import Numpad from "./components/Numpad.js";
import Window from "./components/Window.js";

class Calculator extends Window {
    constructor(options) {
        super(options);

        this.display = new Display();
        this.numpad = new Numpad();

        this.buttons = [
            new Button('+', '+', 'operator'),
            new Button('-', '-', 'operator'),
            new Button('*', '*', 'operator'),
            new Button('/', '/', 'operator')
        ]

        this.buttons.forEach((oper) => this.numpad.element.append(oper.element));
    
        ['.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse().forEach((n) => {
            var buttonElem = new Button(n, n);
            this.buttons.push(buttonElem)
            this.numpad.element.appendChild(buttonElem.element);
        });
    
        this.clearButton = new Button('ce', 'clear', 'operator');
        this.buttons.push(this.clearButton);
        this.numpad.element.append(this.clearButton.element);
        
        this.equalsButton = new Button('=', '=', 'equals');
        this.buttons.push(this.equalsButton);
        this.numpad.element.appendChild(this.equalsButton.element);
        
        this.window.append(this.display.element);
        this.window.append(this.numpad.element);
    }
}

export default Calculator;