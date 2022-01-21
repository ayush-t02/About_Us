function showExpandedDiv() {
    var x = document.getElementById("expanded-audience-hidden");
    var y = document.getElementById("first-item");
    var z = document.getElementById("first-item-arrow");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.color = "#000";
        z.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.color = "#00446F";
        z.style.transform = "rotate(180deg)";
    }
}