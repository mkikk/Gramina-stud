window.onclick = function(event) {
    const navbar = document.getElementById("navbar");
    const bar = document.getElementById("bar");
    if (event.target === document.getElementById("nupp")) {
    navbar.style.display = "block";
    }
    else {
        if (bar.contains(event.target)){
        }
        else {
            navbar.style.display = "none";
        }
    }
}

//google maps
function initMap() {
    // Muuda koordinaadid õigeks
    const gstud = { lat: 58.326036, lng: 26.647291 };
     
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: gstud,
    });
    
    const marker = new google.maps.Marker({
      position: gstud,
      map: map,
    });
  }
