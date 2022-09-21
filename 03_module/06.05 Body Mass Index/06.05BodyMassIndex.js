function calculateBMI() {


    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    
    var bmi = weight / (height/100.0 * height/100.0);
    var result;

    if (bmi <= 18.4) {
        result = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (Underweight)";
    } 
    
    else {
        result = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (Normal Weight)";
    } 

    if (bmi >= 24.9) {
        result = "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (Overweight)";
    }

    document.getElementById("answer").innerHTML = result;

    }




          
