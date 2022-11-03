

function calculate() {

    // Read date text from the input field
    var dateText = document.getElementById("date").value;


    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
    //Show price of the repair work per hour during the workdays

    if (!isSunday(dateText)) {
    
        document.getElementById("answer").innerHTML = "<p>Date " + dateText + " (work day).<br>The price of this repair work is 48 euros per hour.</p>";
    
    
        }

        //Show price of the repair work per hour during the workdays
    //otherwise		
    //Show price of the repair work per hour on Sundays
    else {
        document.getElementById("answer").innerHTML = "<p>Date " + dateText + " (Sunday)<br>The price of this repair work is 72 euros per hour.</p>";
        }	
        

}


 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.

function isSunday(dateText) {
	
	// Split the given dateText into day, month and year parts using the substr() method

    var day = dateText.substr(0, 2);
    var month = dateText.substr(3, 2);
    var year = dateText.substr(6, 4);
   
	// Create a new Date object to a variable 

	var asDate = new Date();
    asDate.setFullYear(year);
    asDate.setMonth(parseInt(month)-1);
    asDate.setDate(day);
    
	// Get the day of the week with its getDay() method. Sunday is number 0 .
	var dayOfTheWeek = asDate.getDay(asDate);

	// If day of the week is Sunday 

	if (dayOfTheWeek == 0){
       // return Boolean value true 
       return true;
    }
		
		
	// otherwise	

	else{
    // return Boolean value false
        return false;
    }
       		
	
}

