function calculateRent() {
	
    var rent = Number(document.getElementById("rent").value);
    var participants = Number(document.getElementById("participants").value);
   
    var result = rent/participants

    document.getElementById("answerDiv").innerHTML=" Rent per participants is " + result.toFixed(2) + " euros. "


   
}