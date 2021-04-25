let currentTrack = 0;

const playButton = document.querySelector(".play");
const skipPreviousButton = document.querySelector(".backward");
const skipNextButton = document.querySelector(".forward");
const audioElem = document.querySelector("audio");
const audioSourceElem = audioElem.querySelector("source");

audioSourceElem.src = "../media/rolemusic0.mp3";
audioElem.load();


playButton.addEventListener("click", e => {
    let playlistItem = document.querySelector(`ol > li:nth-child(${currentTrack + 1})`);
   if (audioElem.paused) {
       audioElem.play();
       playlistItem.classList.add("playing-now");
    } else {
        audioElem.pause();
        playlistItem.classList.remove("playing-now");
   }
});

console.log(document.querySelector("ol > li:nth-child(1)"));
skipNextButton.addEventListener("click", e => {
    let playlistItem = document.querySelector(`ol > li:nth-child(${currentTrack + 1})`);
    playlistItem.classList.remove("playing-now");
    
    currentTrack = (currentTrack === 2) ? 0 : currentTrack + 1;
    
    playlistItem = document.querySelector("ol > li:nth-child(" + (currentTrack + 1) + ")");
    playlistItem.classList.add("playing-now");
    
    if(!audioElem.paused) {
        audioElem.pause();
    }
    
    loadTrack(currentTrack)
    
    audioElem.load();
    audioElem.play();
});

skipPreviousButton.addEventListener("click", e => {
    let playlistItem = document.querySelector(`ol > li:nth-child(${currentTrack + 1})`);
    playlistItem.classList.remove("playing-now");
    
    currentTrack = (currentTrack === 0) ? 2 : currentTrack - 1;

    playlistItem = document.querySelector("ol > li:nth-child(" + (currentTrack + 1) + ")");
    playlistItem.classList.add("playing-now");

    if(!audioElem.paused) {
        audioElem.pause();
    }

    loadTrack(currentTrack);

    audioElem.load();
    audioElem.play();
});

audioElem.addEventListener("ended", e => {
    currentTrack = (currentTrack === 3) ? 0 : currentTrack + 1;
    loadTrack(currentTrack);
    audioElem.load();
    audioElem.play();
});

function loadTrack(trackNumber) {
    switch (trackNumber) {
        case 0:
            audioElem.src = "../media/rolemusic0.mp3";
            break;
    
        case 1:
            audioElem.src = "../media/rolemusic1.mp3";
            break;
    
        case 2:
            audioElem.src = "../media/rolemusic2.mp3";
            break;
    
        case 3:
            audioElem.src = "../media/rolemusic3.mp3";
            break;
    
        default:
            break;
    }
}
