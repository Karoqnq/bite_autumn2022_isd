function showWeightGoals() 
{ 
    // read the original weight to a variable 

    var ogWeight = Number(document.getElementById("weight").value);

    var weightLoss = (ogWeight * 0.1 / 7);
    var result = ""
    // calculate how many kgs one should get lighter each week = weight * 0.1 / 7
    
    // initialize output text variable to start from empty text: "" 
    

    // it will be used later to gather all the output lines. (String can hold also line breaks) 
    
    for (var i = 1; i <= 7; i++) {
        ogWeight = (ogWeight - weightLoss);
        result += "After " + i + ". week " + ogWeight.toFixed(1) +  " kg <br/>";
        
    }

    document.getElementById("answer").innerHTML = result;
}   
    
    // for (var i = 1; i <= 7; i++) { 
     	// give the weight variable a new value which is weight after last
        // measurement reduced by the how much to lose this week.
        // add this week’s text + line break to the output text variable 
      
    
    // write the whole output text to the HTML page at once 
