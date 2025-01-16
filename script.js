// Set the countdown end time in local storage if it doesn't exist
if (!localStorage.getItem('countdownEndTime')) {
    const countdownEndTime = Date.now() + (60 * 60 * 1000); // Set to 1 hour from now (you can change this)
    localStorage.setItem('countdownEndTime', countdownEndTime);
}

// Function to update the countdown timer
function updateTimer() {
    const countdownEndTime = parseInt(localStorage.getItem('countdownEndTime'));
    const currentTime = Date.now();
    const timeLeft = countdownEndTime - currentTime;

    if (timeLeft <= 0) {
        // If the countdown has ended
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        clearInterval(timerInterval); // Stop the timer
    } else {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the remaining time
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to display the timer as soon as the page loads
updateTimer();

const container = document.getElementById("masterclass-container");
const eventDate = new Date("January 19, 2025 11:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = localStorage.getItem("timeLeft") || (eventDate - now);

  if (timeLeft > 0) {
    // Calculate time components
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the countdown inside the targeted container
    container.querySelector("#hours").textContent = hours.toString().padStart(2, "0");
    container.querySelector("#minutes").textContent = minutes.toString().padStart(2, "0");
    container.querySelector("#seconds").textContent = seconds.toString().padStart(2, "0");

    // Save the updated timeLeft in localStorage
    localStorage.setItem("timeLeft", timeLeft - 1000);
  } else {
    // If time is up, clear the countdown
    container.querySelector("#hours").textContent = "00";
    container.querySelector("#minutes").textContent = "00";
    container.querySelector("#seconds").textContent = "00";
    clearInterval(countdownInterval);
  }
}

// Start the countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
