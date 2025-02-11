document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");

    bgMusic.addEventListener("canplay", function () {
        bgMusic.currentTime = 46; // Start at 46 seconds
        bgMusic.play();
    });
});
