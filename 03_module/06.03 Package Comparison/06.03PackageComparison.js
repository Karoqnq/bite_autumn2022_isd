function comparePackages() {
	
    // assign input field values into a variables
    var txtMsg = Number(document.getElementById("textMessages").value);
    var callTime = Number(document.getElementById("callTime").value);
    // calculate the costs of the Special Package
    
    var special = 19.90 + (txtMsg + callTime) * 0.069;
    var allInc = 29.90
    // If the Special package is cheaper than the All-inclusive package 
    
    var result;
    if (special < allInc) {
        result = "The Special package (" +  special.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
    } else { result = "The All-inclusive package (29.90) is cheaper than the Special package (" + special.toFixed(2) + ")";
}
    // to a variable
    document.getElementById("answer").innerHTML = result;
    }
    
        // to a variable

    

        // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
        // to a variable
         
        
    // otherwise
        // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
        // to a variable
    

    
    // write the answer to the web page DOM, in the answer div, as the content
    
