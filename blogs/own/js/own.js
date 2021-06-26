function openTab(evt, tabName) {

    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablist = document.getElementsByClassName("tab-name");
    for (var i = 0; i < tablist.length; i++) {
        tablist[i].className = tablist[i].className.replace(" active", "");
    }

    var tab = document.getElementById(tabName);
    tab.style.display = "block";
    evt.currentTarget.className += " active";
}

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
