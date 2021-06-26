
function nightOn() {
    document.body.style.color = "lightgrey";
    document.body.style.backgroundColor = "#000";
}

function autoNightOn() {
    var now = new Date();

    if (now.getHours() < 8 || now.getHours() > 20) {
        nightOn();
    }
}

window.onload = function () { autoNightOn(); }