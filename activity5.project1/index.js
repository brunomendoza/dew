import Calculator from "./modules/Calculator.js";
import Controller from "./modules/Controller.js";

var opts = {
    width: '270px',
    height: '360px',
    posX: '50px',
    posY: '50px'
}

const view = new Calculator(opts);
new Controller(view);