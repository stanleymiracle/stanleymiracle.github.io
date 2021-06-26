
function nightOn() {
    var tab = document.getElementsByClassName("tab-item");
    for (var i = 0; i < tab.length; i++) {
        tab[i].style.color = "grey";
    }
    var bar = document.getElementsByClassName("navbar-default");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor = "#000";
    }
    var title = document.getElementsByClassName("title");
    for (var i = 0; i < title.length; i++) {
        title[i].style.backgroundColor = "#000";
    }
    document.body.style.backgroundColor = "#000";
}

function openTab(tabName) {
    var item = document.getElementsByClassName("tab-item");
    for (var i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "";
    }
    document.getElementById(tabName + "-tab").style.backgroundColor = "#CCCCCC";

    var list = document.getElementsByClassName("list-group-item");
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }

    var tab = document.getElementsByClassName(tabName);
    for (var i = 0; i < tab.length; i++) {
        tab[i].style.display = "block";
    }
}

function sortOn() {
    document.getElementById("tab-bar").style.display = "block";
    document.getElementById("sort-on").style.display = "none";
    document.getElementById("sort-off").style.display = "block";
}

function sortOff() {
    document.getElementById("tab-bar").style.display = "none";
    document.getElementById("sort-on").style.display = "block";
    document.getElementById("sort-off").style.display = "none";
    var item = document.getElementsByClassName("tab-item");
    for (var i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "";
    }
    var list = document.getElementsByClassName("list-group-item");
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "block";
    }
}