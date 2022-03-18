function invertColor(source) {
    var chkbox = document.getElementById(source);
    if (chkbox.checked) { // night
        document.body.classList.add('reader-night-mode');
        var elms = document.getElementsByTagName('abbr');
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.style.borderBottom = '1px dashed #fff';
        }
    }
    else { // day
        document.body.classList.remove('reader-night-mode');
        var elms = document.getElementsByTagName('abbr');
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.style.borderBottom = '1px dashed #c8c8c8';
        }       
    }
}

(function(){
    var today = new Date();
    if (today.getHours() > 18) {
        document.getElementById('toggle').click();
    }
})();

// document.body.addEventListener('click', function(e) {
//     var elms = document.getElementsByClassName('tooltip');
//     for (let i = 0; i < elms.length; i++) {
//         const elm = elms[i];
//         if (e.target == elm) {
//             elm.children[0].style.visibility = 'visible';
//         }
//         else {
//             elm.children[0].style.visibility = 'hidden';
//         }
//     }
// });
