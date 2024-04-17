let count = 0;
let time = 0;
let cps = 0;
let isPlaying = false;

function hikariClick(element) {
    element.classList.add('touched');
    setTimeout(() => {
        element.classList.remove('touched');
    }, 200);
    
    if (!isPlaying) return;
    count++;
    cps = (time >= 1) ? count / time : count;
    document.getElementById("cps-text").innerHTML = `CPS: ${cps.toFixed(2)}`;
    
}

function startClick(element) {
    let interval;

    isPlaying = !isPlaying;
    if (isPlaying) {
        element.innerHTML = "그만하기";
        interval = setInterval(() => time++, 1000);
    } else {
        element.innerHTML = "시작하기";
        clearInterval(interval);
    }
}