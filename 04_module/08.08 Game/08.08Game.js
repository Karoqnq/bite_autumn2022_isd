
 function calculateProfit() {

        var rounds = Number(document.getElementById("rounds").value);
        result=""
        
        for (var i = 1; i <= rounds; i++){

         var pips = Math.round( (Math.random( ) * 5) + 1 );

        if (pips === 1 || pips === 3 || pips === 5 ) {
            result += pips;
        }
    
        else if (pips === 4 || pips === 2) {
            result += pips * 1.25;
        }
    
        else {
            result +=  pips * 1.5; 

        }
        }

        var profit = rounds - result;

        document.getElementById("answer").innerHTML ="Bets were altogether " + rounds.toFixed(2) + " euros " + "<br/>" + "Wins were " + result.toFixed(2) + " euros" + "<br/>" + "Profit was " + profit.toFixed(2) + " euros";
     }
    
    

    // Read value of rounds from the input field
    

   
    // Make a loop which is executed as many times as was set through the input field. 
    // Let win counter cumulating during every round of the loop. 
    
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
     

        // If the randomized pips is 1, 3 or 5,  no pay
        
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
       

        // Otherwise the pips 6 returns the inserted bet 150%	
        
    

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
   

    // Write the answer on the page, to the answer div, as content of the div
   


