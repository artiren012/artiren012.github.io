function showDialog(name) {
    const dialog = document.getElementById(name);
    dialog.addEventListener('click', (event) => {
        if (event.target.nodeName === 'DIALOG') {
            closeDialog(name);
        }
    });
    dialog.showModal();
}

function closeDialog(name) {
    const dialog = document.getElementById(name);
    dialog.classList.add('close');
    setTimeout(() => {
        dialog.classList.remove('close');
        dialog.close();
    }, 500);
}