import ControlPad from "./components/ControlPad.js";
import Button from "./components/Button.js";
import Window from "./components/Window.js";
import Playlist from "./components/Playlist.js";
import AudioTrack from "./components/AudioTrack.js";

var rootElem = document.querySelector("#root");
let window = new Window(rootElem, 400, 400, 360, 360);
let controlPad = new ControlPad(window.elem);
let playlist = new Playlist();

window.setTitle("Music Player");
window.addComponent(controlPad)
window.addComponent(playlist);

let track1 = new AudioTrack("../media/Rolemusic - Beach Wedding Dance.mp3");

playlist.addItem(track1, "Rolemusic - Beach Wedding Dance");

let buttons = [
    new Button("play_arrow", "play", "controlpad__button--play"),
    new Button("skip_previous", "skip-previous", "controlpad__button--skip-previous"),
    new Button("skip_next", "skip-next", "controlpad__button--skip-next"),
    new Button("stop", "stop", "controlpad__button--stop"),
];

buttons.forEach(button => {
    controlPad.addComponent(button);
});


