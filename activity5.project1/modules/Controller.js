import Button from "./components/Button.js";

export default class Controller {
    constructor(view) {
        this.view = view;
        
        this.view.title.addEventListener('mousedown', downEvent => {
            let shiftX = downEvent.clientX - downEvent.target.getBoundingClientRect().left;
            let shiftY = downEvent.clientY - downEvent.target.getBoundingClientRect().top;

            const moveAt = (pageX, pageY) => {
                this.view.window.style.left = pageX - shiftX + 'px';
                this.view.window.style.top = pageY - shiftY + 'px';
            }

            moveAt(downEvent.pageX, downEvent.pageY);

            const onMouseMove = moveEvent => moveAt(moveEvent.pageX, moveEvent.pageY);
            
            document.addEventListener('mousemove', onMouseMove);

            downEvent.target.addEventListener('mouseup', () => document.removeEventListener('mousemove', onMouseMove));
        });
        
        this.view.buttons.forEach(button => {
            button.element.addEventListener('click', e => {
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