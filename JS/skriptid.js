window.onclick = function(event) { // Registreerib nupuvajutuse "sündmuse" ekraanil
    const navbar = document.getElementById("navbar"); // Muutuja
    const bar = document.getElementById("bar"); // Muutuja
    if (event.target === document.getElementById("nupp")) {
    navbar.style.display = "block"; //kui vajutatud elemendi id on "nupp",
        // siis navbari omadus "display" läheb oma lähteväärtuselt (none) "block"-iks,
        // mistõttu ta kuvatakse
    }
    else {  //ja kui ei vajutatud elemendile "nupp", siis kontrollime, kas vajutati äkki menüüle?
        if (bar.contains(event.target)){
        }
        else { //juhul, kui ei vajutatud menüüle, siis navbari omadus läheb uuesti lähteväärtusele
            navbar.style.display = "none";
        }
    }
}

//google maps, abi sain https://developers.google.com/maps/documentation/javascript/adding-a-google-map
function initMap() {
    // Vali koordinadid
    const gstud = { lat: 58.326036, lng: 26.647291 };
     //loo kaart ja sea suurendus
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: gstud,
    });
    //määra asukoht
    const marker = new google.maps.Marker({
      position: gstud,
      map: map,
    });
  }
 
 