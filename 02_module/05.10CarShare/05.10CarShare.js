function calculateCosts() {

 var kilometers = Number(document.getElementById("kilometers").value);
 var participants = Number(document.getElementById("participants").value);
 var consumption = Number(document.getElementById("consumption").value);
 var price = Number(document.getElementById("price").value);

 var result = (consumption / 100 * price * kilometers / participants);

 document.getElementById("answerId").innerHTML = " Fuel costs per participant is " + result.toFixed(2) + " euros.";


}