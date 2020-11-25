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



