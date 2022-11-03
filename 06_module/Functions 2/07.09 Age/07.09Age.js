function tellAge() {
    // Read value of yearOfBirth from the input field 
   var yearOfBirth = parseInt(document.getElementById("yearOfBirth").value);

    // Figure out the current date into today variable 
    var currentDate = new Date();

    // Use getFullYear() method to get the current year out from the today variable
    var currentYear = currentDate.getFullYear();

    // Calculate the (rough estimate of the) age
    
    var age = currentYear - yearOfBirth;

    // If age is less than zero
    if (age < 0){
    //  Show an error message
        document.getElementById("answer").innerHTML = "Yet to be born. ERROR.ERROR.ERROR.";
    }
    
    else {
    // otherwise tell the age
        document.getElementById("answer").innerHTML = "You are now " + age + " years old.<br> (Current year is " + currentYear + " .)"
    }
   
}