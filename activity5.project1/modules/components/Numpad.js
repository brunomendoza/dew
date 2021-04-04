export default class Numpad {
    constructor() {
        this.numpad = document.createElement('div');
        this.numpad.classList.add('numpad');
        this.numpad.id = "numpad";
    }

    get element() { return this.numpad; }
}