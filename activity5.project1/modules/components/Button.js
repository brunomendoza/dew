export default class Button {
    constructor(text, val, type) {
        this.button = document.createElement('button');

        this.button.setAttribute('value', val);
        this.button.innerHTML = text;
        this.button.classList.add('numpad__button');
        
        if (type === 'operator') {
            this.button.classList.add('numpad__button--operator');
        }

        if (type === 'equals') {
            this.button.classList.add('numpad__button--equals');
        }
    }

    get element() { return this.button; };
}
