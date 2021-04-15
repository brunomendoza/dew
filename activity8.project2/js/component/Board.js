class Board {
    constructor(parent, width, height) {
        this.element = document.createElement('div');

        this.element.id = 'board';
        this.element.classList.add('arkanoid__board');
        
        this.element.style.width = width + 'px'
        this.element.style.height = height + 'px';

        this.parent = parent;
        parent.appendChild(this.element);
    }

    addComponent = (component) => {
        this.element.appendChild(component);
    }
}

export { Board }