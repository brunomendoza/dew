class Vaus {
    constructor(parent, width, height, x, y) {
        var board = document.createElement('div')
        board.id = 'board'
        board.class = 'board'

        board.width = width;
        board.height = height;
    }

    get width() { return board.width };
}