function showMinutes() {

    var hours = Number(document.getElementById("txtHours").value);
    var minutes = Number(document.getElementById("txtMinutes").value);


    var result = (hours * 60) + minutes;

    document.getElementById("pOutput").innerHTML = result + " minutes.";

}