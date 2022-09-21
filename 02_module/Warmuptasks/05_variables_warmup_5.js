 function calculate() {

 var startingBalance = Number(document.getElementById("txtStartingBalance").value);
 var interestRate = Number(document.getElementById("txtInterestRate").value);

 var year1 = startingBalance / interestRate + startingBalance;
 var year2 = year1 / interestRate + year1;
 



 document.getElementById("pOutput").innerHTML = " 1. year: " + year1.toFixed(2) + "</br> 2.year: " + year2.toFixed(2);

 }