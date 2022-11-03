// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.

function kelaRat(length,money) {

var kelaMoney;


if (length < 10) {
    kelaMoney = 8;
}

else if (length < 20) {
    kelaMoney = 11;
}

else if (length < 30) {
    kelaMoney = 13.50;
}

else if (length < 45) {
    kelaMoney = 16.50;
}

else {
    kelaMoney = 21;
}

if (kelaMoney > money){
    kelaMoney = money;
}

return kelaMoney

}




// Define a function  
function calculate() {
    // Read values from the input fields
    

   var visitLength = parseInt(document.getElementById("length").value);

   var fee = parseInt(document.getElementById("doctorsFee").value);

    // Call the function (1.) which calculates and returns Kela reimbursement // Write the answer on the page, to the answer div, as content of the div
    
    document.getElementById("answer").innerHTML = "Length of visit is " + visitLength + " minutes.<br>Kela reimbursement is " + kelaRat(visitLength, fee).toFixed(2) + " euros."
}