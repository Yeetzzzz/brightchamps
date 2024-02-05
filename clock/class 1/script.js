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