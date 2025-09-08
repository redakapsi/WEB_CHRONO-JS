let timer;
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let isRunning = false;

function updateDisplay() {
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    const ms = String(milliseconds).padStart(2, '0');
    document.getElementById("time").textContent = `${h}:${m}:${s}:${ms}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    pauseTimer();
    hours = minutes = seconds = milliseconds = 0;
    updateDisplay();
}
