var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
    earth.setView([60.20164998588241, 24.933902556905792]); 
    earth.setZoom(18);
   // todo
}

function showCoords() {
    alert(earth.getCenter());
   // todo

}