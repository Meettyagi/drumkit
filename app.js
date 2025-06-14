let buttons = document.querySelectorAll("button");

// Function to play sound
function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

// Handle button clicks
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.key.toUpperCase();
        playSound(key);
    });
});

// Handle key presses
document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    playSound(key);
});
