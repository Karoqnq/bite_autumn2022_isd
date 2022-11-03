// Defne a function (1.) 

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
    
    return kelaMoney;
    
    }
    
    
// Defne a function (2.) 

function amountLeft(fee,reimbursement,officeFee){

var customerPay = fee - reimbursement + officeFee;

return customerPay;

}	
	
// Define a function (3.) 
function calculate() {
    // Read values from the input fields

    var visitLength = parseInt(document.getElementById("length").value);

    var fee = parseInt(document.getElementById("doctorsFee").value);
    
    var officeFee = 15.90;

    // Call the function (1.) which calculates Kela reimbursement 

    var reimbursement = kelaRat(visitLength,fee);

    // Call the function (2.) which calculates amount left for the customer to pay
    
    var toPay = amountLeft(fee,reimbursement,officeFee);

    // Write the answer on the page, to the answer div, as content of the div

    document.getElementById("answer").innerHTML = "Doctor's fee is " + fee.toFixed(2) + " euros.<br>Kela reimbursement is " + reimbursement.toFixed(2)+ " euros.<br>Office fee is " + officeFee.toFixed(2) + " euros.<br>Customer needs to pay " + toPay.toFixed(2)+ " euros."
    
}