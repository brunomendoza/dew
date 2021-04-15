import { Controller } from './Controller.js'

class BoardController extends Controller {
    constructor(parent, view, model) {
        super(view, model);
        this.parent = parent;

        parent.appendChild(this.view.element)
    }

    addComponent = component => this.view.element.appendChild(component)
}

export { BoardController }