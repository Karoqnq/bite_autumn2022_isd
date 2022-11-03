function calculateSalary(hours, hourlySalary) {
    // calculate salary
    // return the gross salary with the return statement
    return hours * hourlySalary
    
}

function showGrossSalary() {
    // assign the input field value to the variable hours

    var allHours = Number(document.getElementById("hours").value);

    // assign the second input field value to the variable hourlySalary

    var salaryHour = Number(document.getElementById("hourlySalary").value);

    // call the calculateSalary function
    // write the answer on the html page

    document.getElementById("answer").innerHTML = "Gross salary is " + calculateSalary(allHours, salaryHour).toFixed(2) + " euros."
}
