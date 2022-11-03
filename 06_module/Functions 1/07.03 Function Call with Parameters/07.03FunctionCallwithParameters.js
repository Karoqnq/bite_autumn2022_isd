function addImage(imgUrl) {
  var image = document.createElement("img");
  image.src = imgUrl;

  var imageDiv = document.getElementById("images");    
  imageDiv.appendChild(image);

}

imageDiv= addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png");

imageDiv= addImage("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png");

imageDiv= addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png");

