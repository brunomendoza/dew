import { BoardController } from "./js/BoardController.js"
import { Ball } from "./js/component/Ball.js"
import { Board } from "./js/component/Board.js"

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const rootElem = document.getElementById('root')

        const board = new Board(rootElem, 360, 270, 0 , 0)
        const ball = new Ball(6)
        board.addComponent(ball.element);
    })
})()