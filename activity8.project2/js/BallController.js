import { Ball } from './components/Ball.js'
import { Controller } from './Controller.js'

class BallController extends Controller {
    constructor() {
        this.ball = new Ball()

        this.ball.element.addEventListener('keydown', e => {
            if (e.isComposing || e.key === 229) {
                return
            }

            console.log(e.key)
        })
    }
}