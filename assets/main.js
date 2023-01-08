let isDark = false;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    isDark = true;
}

window.onload = function () {
    var url = decodeURI(location.href);
    var pm = url.split('?');
    var params = pm[1].split('&');
    for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');
        value = param[1];
    }
    if (value == 'dark') {
        isDark = true;
    }
}

if (isDark) {
    document.body.dataset.theme = 'dark-mode'
} else {
    document.body.dataset.theme = 'light-mode'
}

function toggleDarkMode() {
    let dataAttr = document.body.dataset;
    dataAttr.theme.match('light-mode') ? dataAttr.theme = 'dark-mode' : dataAttr.theme = 'light-mode';
}

function loadPage(link) {
    let mode = 'light';
    if (isDark) mode = 'dark';
    location.href = link + '?theme=' + mode;
}