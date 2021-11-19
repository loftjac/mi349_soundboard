// var blip = new Audio();
// blip.src = "blip.wav"

// onmousedown ="blip.play()"

function playMusic(audioString){
    console.log(audioString)
    var music = new Audio(audioString);
    music.play();
}
