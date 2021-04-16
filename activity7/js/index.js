import ControlPad from "../ControlPad.js";
import Button from "./Button.js";
import Window from "./Window.js";

var rootElem = document.querySelector("#root");
let window = new Window(rootElem, 600, 600, 360, 90);
window.setTitle("Music Player");

let controlPad = new ControlPad(window.elem);

let playButton = new Button(controlPad.elem, "play_arrow", "play", "controlpad__button--play");
let skipPreviousButton = new Button(controlPad.elem, "skip_previous", "skip-previous", "controlpad__button--skip-previous");
let skipNextButton = new Button(controlPad.elem, "skip_next", "skip-next", "controlpad__button--skip-next");
let stopButton = new Button(controlPad.elem, "stop", "stop", "controlpad__button--stop");



