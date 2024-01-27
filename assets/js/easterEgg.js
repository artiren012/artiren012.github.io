window.onload = function() {
    if (getRandom(1, 10) != 1) return;
    document.getElementById('pfp').src = './assets/img/GAMING_MAKI.gif';
    document.getElementById('desc').innerHTML += ' with <a href="https:\/\/www.youtube.com\/watch?v=ytB5dELUSLc">Gaming RGB MAKI<\/a>';
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}