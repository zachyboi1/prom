document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-btn");

    if (noButton) {
        noButton.addEventListener("mouseover", function () {
            const x = Math.random() * (window.innerWidth - noButton.clientWidth);
            const y = Math.random() * (window.innerHeight - noButton.clientHeight);
            noButton.style.position = "absolute";
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");

    if (audio) {
        audio.addEventListener("canplay", function () {
            audio.currentTime = 46; // Start at 46 seconds
            audio.play();
        });
    }
});
