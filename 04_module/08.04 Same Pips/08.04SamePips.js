
// Randomize the pips once

var pips1 = Math.round(Math.random() * 5 + 1);
var pips2 = Math.round(Math.random() * 5 + 1);


// Set the count to be one (now you have randomized once)
var counter = 1;

// Repeat as long as (pips are not equal) 

    while (pips1 !== pips2) {
        pips1 = Math.round(Math.random() * 5 + 1);
        pips2 = Math.round(Math.random() * 5 + 1);
        counter++;
    }

    // Randomize again
    
    // Increment counter by one

    document.getElementById("answer").innerHTML= "There were " + counter + " randomization rounds until we got the same pips."; 
// Write the answer (including the count) to the html page (answer div)