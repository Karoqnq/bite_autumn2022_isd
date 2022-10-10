function showComparisonScores() {
	
    var total = Number(document.getElementById("votes").value);
    var candidates = Number(document.getElementById("candidates").value);

    var result = ""
    var score = ""

    for (var i = 1; i <= candidates; i++) {
         score = total /i;
        result += i + ". candidate: " + score.toFixed(0) + "<br/>";
    }

    document.getElementById("answer").innerHTML = result;

}




    // For each candidates
        // Calculate comparison score for candidate
        
    // Show scores
    
