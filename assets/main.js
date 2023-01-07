if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.dataset.theme = 'dark-mode'
} else {
    document.body.dataset.theme = 'light-mode'
}

const darkmodeBtn = document.querySelector('.darkmode__btn')
darkmodeBtn.addEventListener('click', () => {
    let dataAttr = document.body.dataset;
    dataAttr.theme.match('light-mode') ? dataAttr.theme = 'dark-mode' : dataAttr.theme = 'light-mode'
});