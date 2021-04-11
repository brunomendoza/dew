class Board {
    constructor(parent, width, height, x, y) {
        this.board = document.createElement('div')
        this.board.id = 'board'
        this.board.classList.add('board')
        
        this.board.style.width = width + 'px'
        this.board.style.height = height + 'px';
        this.board.style.backgroundColor = 'whitesmoke'
        this.board.style.border = '1px solid silver'
        this.board.style.position = 'relative'

        parent.appendChild(this.board)
    }

    addComponent (element) {
        this.board.appendChild(element);
    }
}

export { Board }