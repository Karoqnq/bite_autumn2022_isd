function tellInfractionFine() {
		
   var dSpeed = Number(document.getElementById("drivingSpeed").value);
   var sLimit = Number(document.getElementById("speedLimit").value);


   var speedPlus = dSpeed - sLimit;

   var result;
     

      if (speedPlus <= 0) {
         result = "No speeding, no fine.";
      }

      else if (sLimit >= 10 && sLimit <= 60 && speedPlus <= 15 ) {
      result = "Infraction fine is 85 euros.";

   }
       else if (sLimit >= 10 && sLimit <= 60 && speedPlus > 15 && speedPlus <= 20) {
      result = "Infraction fine is 115 euros.";
    }
   
      else if ( sLimit >= 70  && sLimit <= 120 && speedPlus <= 15) {
      result = "Infraction fine is 70 euros.";
   }

      else if (sLimit >= 70  && sLimit <= 120 && speedPlus > 15 && speedPlus <= 20) {
      result = " Infraction fine is 100 euros.";
   }

      else {
      result = " Income-based unit fine.";
   }

   document.getElementById("answer").innerHTML = result;

}


     