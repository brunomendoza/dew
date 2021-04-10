class Ball {
    constructor(parent, width, height) {
        this.ball = document.createElement('div')

        ball.id = 'ball'
        ball.class = 'ball'

        ball.width = width
        ball.height = height
    }

    get element() {
        return this.ball;
    }
}

export { Ball }