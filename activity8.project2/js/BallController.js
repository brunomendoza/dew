import { Ball } from './component/Ball.js'
import { Controller } from './Controller.js'

class BallController extends Controller {
    constructor(view, model) {
        super(view, model)

        document.addEventListener('keydown', e => {
            if (e.isComposing || e.key === 229) {
                return
            }

            console.log(e.key)
        })
    }

    update = (board) => {
        var dx = this.originx + this.size
        var dy = this.y + this.size

        if(dx >= board.width) {
            this.velocityX = -(this.speed)
        }
    }
}

export { BallController }