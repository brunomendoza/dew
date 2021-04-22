export default class AudioTrack {
    constructor(url) {
        this.elem = document.createElement("source");
        this.elem.type = "audio/mp3";
        this.elem.src = url;
    }
}