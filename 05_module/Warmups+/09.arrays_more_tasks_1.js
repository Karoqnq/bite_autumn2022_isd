function showArray(){

var array = ["Life do be it.", "The end is near...", "Well shit. Hmm.", "EEEEEHHH, it's fine", "MEOW for me :)"]

var random = Math.floor(Math.random() * array.length);

document.getElementById("pOutput").innerHTML = array[random];

}