class Block {
    constructor(width, height, life) {
        this.element = document.createElement('div');
        
        this.width = width;
        this.height = height;
        this.life = life;

        this.element.classList.add('arkanoid__block');

        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
    }
}

export { Block };