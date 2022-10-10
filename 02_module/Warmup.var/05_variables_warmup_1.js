function showEmail() {
    var givenName = document.getElementById("txtGivenName").value;

    var surname = document.getElementById("txtSurname").value;

     document.getElementById('pOutput').innerHTML = " The email is " + givenName + "." + surname + "@myy.haaga-helia.fi";
}