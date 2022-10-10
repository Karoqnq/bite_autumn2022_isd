 function add() {

var first = Number(document.getElementById("txtFirst").value);
var second = Number(document.getElementById("txtSecond").value);

var result = (first + second);

document.getElementById("pOutput").innerHTML = " 1 + 2 = " + result;

}