export default class Display {
    constructor() {
        this.display = document.createElement('div');
        this.display.classList.add('display');
        this.display.id = 'display';
        this.display.innerHTML = '0';
    }

    get element() {
        return this.display;
    }
}