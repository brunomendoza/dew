class Ball {
    constructor(radius) {
        this.ball = document.createElement('div')

        this.ball.id = 'ball'
        this.ball.classList.add('ball')

        this.ball.style.width = radius * 2 + 'px'
        this.ball.style.height = radius * 2 + 'px'
        this.ball.style.borderRadius = '50%'
        this.ball.style.backgroundColor = 'grey'

        this.ball.style.position = 'absolute'
        this.ball.style.top = 20 + 'px'
        this.ball.style.left = 20 + 'px'
    }

    get element() {
        return this.ball;
    }
}

export { Ball }