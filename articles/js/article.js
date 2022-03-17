function invertColor(source) {
    var chkbox = document.getElementById(source);
    if (chkbox.checked) {
        var elms = document.getElementsByTagName('body');
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.style.color = 'white';
            elm.style.backgroundColor = 'black';
        }
    }
    else {
        var elms = document.getElementsByTagName('body');
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.style.color = 'black';
            elm.style.backgroundColor = 'white';
        }        
    }
}