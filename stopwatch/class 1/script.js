let time = 0;
const timeElement = document.getElementById("time");

function toTimeFormat(val) {
    let secs = val/100;
    let mins = Math.floor(secs/60);
    secs = Math.floor(secs % 60);
    let ms = val % 100;
    return mins + ": " + secs + "." + ms
}

let timer;

function startTimer() {
    timer = setInterval(() => {
        time += 10;
        timeElement.innerText = toTimeFormat(time);
    }, 100);
}

// startTimer();

function stopTimer() {
    clearInterval(timer);
}

console.log(time);