document.addEventListener("DOMContentLoaded", function () {
    // Move the "No" button away when clicked
    const noButton = document.getElementById("no-button");
    if (noButton) {
        noButton.addEventListener("mouseover", function () {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            noButton.style.position = "absolute";
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        });
    }

    // Make background music in thankyou.html start at 0:46
    const bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
        bgMusic.addEventListener("canplay", function () {
            bgMusic.currentTime = 46;
            bgMusic.play();
        });
    }
});
