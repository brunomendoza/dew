export default class Playlist {
    constructor(flexOrder) {
        this.elem = document.createElement("div");
        this.innerWrapperElem = document.createElement("ul");
        this.audioElem = document.createElement("audio");
        this.titleElem = document.createElement("h2");

        this.elem.classList.add("mediaplayer__playlist");
        this.titleElem.classList.add("playlist__title");
        this.innerWrapperElem.classList.add("playlist");

        this.titleElem.innerHTML = "Playlist";
        
        this.innerWrapperElem.classList.add("playlist__innerwrapper")
        
        this.elem.appendChild(this.titleElem);
        this.elem.appendChild(this.innerWrapperElem);
        this.elem.appendChild(this.audioElem);
    }

    addItem = (audioTrack, trackName) => {
        let item = document.createElement("li");
        item.classList.add("playlist__item");
        this.elem.appendChild(item);
        item.innerHTML = trackName;

        this.audioElem.appendChild(audioTrack.elem);
        this.innerWrapperElem.appendChild(item);
    };
}