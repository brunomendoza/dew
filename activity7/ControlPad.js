export default class ControlPad {
    constructor(parent) {
        this.elem = document.createElement("div");
        this.parent = parent;

        this.elem.classList.add("mediaplayer__controlpad");

        this.parent.appendChild(this.elem);
    }

}