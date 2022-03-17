function invertColor(source) {
    var chkbox = document.getElementById(source);
    if (chkbox.checked) { // night
        document.body.classList.add("reader-night-mode");
        var elms = document.getElementsByClassName('tooltiptext');
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.classList.add("reader-day-mode");
            elm.classList.remove("reader-night-mode");
        }
    }
    else { // day
        document.body.classList.remove("reader-night-mode");
        var elms = document.getElementsByClassName('tooltiptext');
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.classList.add("reader-night-mode");
            elm.classList.remove("reader-day-mode");
        }        
    }
}