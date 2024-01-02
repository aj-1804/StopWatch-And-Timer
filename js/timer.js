// Countdown Timer logic
let countdown;
const timeLeftDisplay = document.getElementById("time-left");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");

// Function to start the countdown
function startCountdown() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const totalTime = hours * 3600 + minutes * 60 + seconds;

    let remainingTime = totalTime;

    countdown = setInterval(() => {
        const hoursLeft = Math.floor(remainingTime / 3600);
        const minutesLeft = Math.floor((remainingTime % 3600) / 60);
        const secondsLeft = remainingTime % 60;

        const timeString = `${hoursLeft
            .toString()
            .padStart(2, "0")}h ${minutesLeft
            .toString()
            .padStart(2, "0")}m ${secondsLeft.toString().padStart(2, "0")}s`;

        timeLeftDisplay.textContent = timeString;

        if (remainingTime === 0) {
            clearInterval(countdown);
        } else {
            remainingTime--;
        }
    }, 1000);
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdown);
    // Reset timer display
    timeLeftDisplay.textContent = "00h 00m 00s";
    // Clear input fields
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
}

// Event listeners for the start and reset buttons
startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);
