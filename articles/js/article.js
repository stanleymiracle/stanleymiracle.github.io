function invertColor(source) {
    var chkbox = document.getElementById(source);
    if (chkbox.checked) { // night
        document.body.classList.add('reader-night-mode');
        setClassBorderBottom('abbr', true);
        setClassBorderBottom('text-to-img', true);
    }
    else { // day
        document.body.classList.remove('reader-night-mode');
        setClassBorderBottom('abbr', false);      
        setClassBorderBottom('text-to-img', false);      
    }
}

function setClassBorderBottom(className, isNight) {
    if (isNight) {
        var elms = document.getElementsByClassName(className);
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.style.borderBottom = '1px dashed #fff';
        }
    }
    else {
        var elms = document.getElementsByClassName(className);
        for (let i = 0; i < elms.length; i++) {
            const elm = elms[i];
            elm.style.borderBottom = '1px dashed #c8c8c8';
        }
    }
}

function addImageBackgroundToModal(path) {
    var elm = document.getElementById('modal-img');
    elm.src = path;
}

(function(){
    var today = new Date();
    if (today.getHours() > 18) {
        document.getElementById('toggle').click();
    }
    var ttis = document.getElementsByClassName('text-to-img');
    for (let i = 0; i < ttis.length; i++) {
        const elm = ttis[i];
        elm.onclick = function() {
            addImageBackgroundToModal(elm.getAttribute('data-path'));
            document.getElementById('page-modal').style.display = 'block';
        };        
    }
    var closeBtn = document.getElementById('modal-close');
    if (closeBtn) {
        closeBtn.onclick = function() {
            document.getElementById('page-modal').style.display = 'none';
        };
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
