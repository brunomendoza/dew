import Calculator from "./modules/Calculator.js";
import Controller from "./modules/Controller.js";

var opts = {
    width: 270,
    height: 360,
    posX: 50,
    posY: 50
}

const view = new Calculator(opts);
new Controller(view);