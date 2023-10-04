let isRunning = false;
let startTime;
let interval;

function startStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        // Start the stopwatch
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00.000";
    isRunning = false;
    startTime = null;
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor(currentTime % 1000);

    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
    document.getElementById("display").textContent = timeString;
}

function pad(value, length = 2) {
    return value.toString().padStart(length, "0");
}
