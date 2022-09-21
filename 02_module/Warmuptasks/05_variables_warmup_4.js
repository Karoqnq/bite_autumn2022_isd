function showHoursAndMinutes() {

var minutes = Number(document.getElementById("txtMinutes").value);

var hours = minutes / 60;

var leftMinutes = minutes % 60

document.getElementById("pOutput").innerHTML = hours.toFixed(0) + " hours " + leftMinutes + " minutes" ;


}