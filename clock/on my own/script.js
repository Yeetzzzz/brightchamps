const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const information = document.getElementById("info");
const title = document.getElementsByTagName("h1")[0];

function changeToNight() {
    time.style.color = "var(--time-night)";
    ampm.style.color = "var(--ampm-night)";
    information.style.color = "var(--text-night)";
    title.style.color = "var(--text-night)";
    document.body.style.backgroundColor = "var(--bg-night)";
}

function changeToDay() {
    time.style.color = "var(--time-day)";
    ampm.style.color = "var(--ampm-day)";
    information.style.color = "var(--text-day)";
    title.style.color = "var(--text-day)";
    document.body.style.backgroundColor = "var(--bg-day)";
}

function leftPad(num, string, char) {
    while (string.length < num) {
        string = char + string;
    }

    return string;
}

function toTwelveHourClock(hours, mins, secs) {
    if (hours > 13) {
        hours -= 12;
    }

    hours = leftPad(2, hours.toString(), "0");
    mins = leftPad(2, mins.toString(), "0");
    secs = leftPad(2, secs.toString(), "0");

    return hours + ": " + mins + ": " + secs;
}

function amOrPm(hours) {
    if (hours > 12) {
        return "PM";
    } else {
        return "AM";
    }
}

let hours;
let mins;
let secs;

let date;

setInterval(() => {
    date = new Date();

    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    time.innerText = toTwelveHourClock(hours, mins, secs);
    ampm.innerText = amOrPm(hours);

    if (hours > 17) {
        changeToNight();
    } else if (hours > 5) {
        changeToDay();
    }

    console.log("hi");
}, 1000);