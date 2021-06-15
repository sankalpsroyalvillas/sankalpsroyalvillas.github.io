let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;
let status = "notRunning";
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");



function stopWatch() {
    seconds++
    if (seconds === 60) {
        seconds = 0;
        minutes++
        if (minutes === 60) {
            minutes = 0;
            hours++
        }
    }
    if (seconds < 9) {
        var zseconds = "0" + seconds;
    }
    else {
        zseconds = seconds;
    }
    if (minutes < 9) {
        var zminutes = "0" + minutes;
    }
    else {
        zminutes = minutes;
    }
    if (hours < 9) {
        var zhours = "0" + hours;
    }
    else {
        zhours = hours;
    }
    document.getElementById("displayTime").innerHTML = zhours + ":" + zminutes + ":" + zseconds;
}

//start stop button
startStop.onclick = function () {
    if (status === "notRunning") {
        clearInterval(interval)
        interval = setInterval(stopWatch, 1000)
        startStop.innerHTML = "Stop"
        status = "Running"
    }
    else {
        clearInterval(interval)
        startStop.innerHTML = "Start"
        status = "notRunning"
    }
}
//reset button
reset.onclick = function () {
    clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('displayTime').innerHTML = "00:00:00"
    startStop.innerHTML = "Start"
}