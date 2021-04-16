export default class Button {
    constructor(parent, materialIconName, funcName, flexOrderClass) {
        this.elem = document.createElement("div");
        this.parent = parent;

        this.elem.dataset.mediaplayer = funcName;
        this.elem.classList.add(flexOrderClass);
        this.elem.classList.add("controlpad__button");
        
        this.iconElem = document.createElement("span");
        this.iconElem.classList.add("material-icons-outlined");
        this.iconElem.innerHTML = materialIconName;
        
        this.elem.appendChild(this.iconElem);
        this.parent.appendChild(this.elem);
    }
}