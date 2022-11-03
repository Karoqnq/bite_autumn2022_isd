
function showBloodType() {
    var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

    var insertBloodType = document.getElementById("txtBloodType").value;

    var matches = 0;
    var outputText = "";
    
        for (var i = 0; i < bloodTypes.length; i++){

            if (bloodTypes[i] == insertBloodType) {
            matches++;

            } 
       
        }
        
        if ( matches > 0) {
            var percentage = (matches/bloodTypes.length)*100;
            outputText = insertBloodType + " " + percentage +" % ";

        }

        else {

            outputText = "Please enter a valid blood type!";
        }

    document.getElementById("pOutput").innerHTML = outputText;
}

// End