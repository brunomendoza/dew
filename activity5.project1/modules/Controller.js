import Button from "./components/Button.js";

export default class Controller {
    constructor(view) {
        this.view = view;

        this.view.buttons.forEach(button => {
            button.element.addEventListener('click', (e) => {
                var currentDisplay = this.view.display.element;

                if (e.target.value === 'clear') {
                    currentDisplay.innerHTML = '0';
                } else if (e.target.value === '=') {
                    currentDisplay.innerHTML = eval(currentDisplay.innerHTML);
                } else {
                    if (currentDisplay.innerHTML === '0') {
                        currentDisplay.innerHTML = '';
                    }

                    currentDisplay.innerHTML += e.target.value
                }
            });
        });
    }
}