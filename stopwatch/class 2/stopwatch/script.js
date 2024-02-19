let time = 0;
const timeElement = document.getElementById("time");

function leftPad(num, string, char) {
    while (string.length < num) {
        string = char + string;
    }

    return string;
}

function toTimeFormat(val) {
    let secs = val/1000;
    let mins = Math.floor(secs/60);
    secs = Math.floor(secs % 60);
    let ms = (val % 1000) / 10;
    return leftPad(2, mins.toString(), "0") + ": " + leftPad(2, secs.toString(), "0") + "." + leftPad(2, ms.toString(), "0")
}

let timer;

function startTimer() {
    timer = setInterval(() => {
        time += 10;
        timeElement.innerText = toTimeFormat(time);
    }, 10);
}

// startTimer();

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    time = 0;
    clearInterval(timer);
    timeElement.innerText = "00: 00.00";
}

console.log(time);