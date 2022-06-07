function toggleOn() {
    var toggle = document.getElementsByClassName("toggle");
    for (var i = 0; i < toggle.length; i++) {
        toggle[i].onclick = function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
            // toggle[i].click();
    }
}

function numberLine() {
    var pre = document.getElementsByTagName('pre');

    for (var i = 0; i < pre.length; i++) {
        var str = pre[i].childNodes[0].innerHTML;
        var each = str.trim().split("\n");
        var eachLen = each.length;
        var out = "";

        for (var l = 0; l < eachLen; l++) {
            if (each[i] != "") {
                var gap = "";
                if (l < 9) {
                    gap += " ";
                }
                out += "<span>" + gap + (l + 1) + "| " + each[l] + "</span>\n";
            }
        }

        pre[i].innerHTML = out;
    }
}

function onReady(yourMethod) {
    if (document.readyState === 'complete') { // or also compare to 'interactive'
        setTimeout(yourMethod, 1); // schedule to run immediately
    } else {
        readyStateCheckInterval = setInterval(function() {
            if (document.readyState === 'complete') { // or also compare to 'interactive'
                clearInterval(readyStateCheckInterval);
                yourMethod();
            }
        }, 10);
    }
}
onReady(numberLine);


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