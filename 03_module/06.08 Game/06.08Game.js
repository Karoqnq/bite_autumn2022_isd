
function play() {
    // Read value from the input field
    
    var bet = Number(document.getElementById("bet").value);


    // Randomize dice pips between 1-6

    var pips = Math.round( (Math.random( ) * 5) + 1 );

    

    // Calculate win base on pips

    var result;

    if (pips === 1 || pips === 3 || pips === 5 ) {
        result = "Pips was " + pips + " - no pay";
    }

    else if (pips === 4 || pips === 2) {
        result = "Pips was " + pips + " - Paid back: " + (bet * 1.25).toFixed(2) + "euros";
    }

    else {
        result = "Pips was " + pips + " - Paid back: " + (bet * 1.5).toFixed(2) + "euros"; 
    }

    // Write the answer on the page, to the answer div, as content of the div

    document.getElementById("answer").innerHTML = result;
}