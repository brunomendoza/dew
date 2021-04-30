import { Ball } from "./js/component/Ball.js"
import { Board } from "./js/component/Board.js"
import { Block } from "./js/component/Block.js"

const rootElem = document.getElementById('root')

let level = [
    [{ life: 0 }, { life: 0 }, { life: 0 }, { life: 0 }],
    [{ life: 1 }, { life: 1 }, { life: 1 }, { life: 1 }],
    [{ life: 2 }, { life: 2 }, { life: 2 }, { life: 2 }],
    [{ life: 3 }, { life: 3 }, { life: 3 }, { life: 3 }]
];

const ball = new Ball(20, 20, 12);
const board = new Board(rootElem, 360, 270);

level.forEach(r => r.forEach(obj => board.addComponent(new Block(90, 18, obj.life).element)));

// (() => {
//     document.addEventListener('DOMContentLoaded', () => {
//     })
// })()