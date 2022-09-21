function checkAge() {
    // assign the age input field value into a variable


    var age = Number(document.getElementById("age").value)


    //if age smaller than 18
    
        var result;
     if (age < 18){
        result = "Adolescents are not allowed to play.";   
     } else {
        result = "Old enough to play.";
     }

        // assign text "Adolescents are not allowed to play." to a variable
        
        


    // otherwise 
    


        // assign text "Old enough to play." to a variable  
        
     document.getElementById("answer").innerHTML = result;

    }
    
    // Write the answer to the web page DOM, in the answer div, as the content
    
