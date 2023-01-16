
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.dataset.theme = 'dark-mode'
} else {
    document.body.dataset.theme = 'light-mode'
}

function toggleDarkMode() {
    let dataAttr = document.body.dataset;
    dataAttr.theme.match('light-mode') ? dataAttr.theme = 'dark-mode' : dataAttr.theme = 'light-mode';
    isDark = !isDark;
}

function openDialog(id) {
    const dialog = document.getElementById(id);
	dialog.showModal();
}

function closeDialog(id) {
    const dialog = document.getElementById(id);
	dialog.close();
}