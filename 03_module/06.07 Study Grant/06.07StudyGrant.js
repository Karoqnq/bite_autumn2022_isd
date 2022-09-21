function showStudyGrant() {
    
    // Read values from the input fields

    var age = Number(document.getElementById("age").value);
    var withParents = document.getElementById("withParents").value;
    
    // if student is living with parents and his/her age is greater than 20 or equal

     
          //assign text "The study grant is 335.20 euros." to a variable
        
     var result;

     if (age >= 20 && withParents === "n") {
        result = "The study grant is 335.20 euros.";
     } 
     
     else if (age >= 20 && withParents === "y") {
        result = "The study grant is 136.70 euros.";
     }

     else { 
        result = "Ask Kela."
     }

    //otherwise if ....
    
     document.getElementById("answer").innerHTML = result;
    
    // Write the answer on the page, to the answer div, as content of the div
}
