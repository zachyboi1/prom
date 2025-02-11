// Move the "No" button away when clicked
document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.querySelector(".no-btn");
    if (noButton) {
        noButton.addEventListener("click", function () {
            let randomX = Math.random() * window.innerWidth - 100;
            let randomY = Math.random() * window.innerHeight - 100;
            noButton.style.position = "absolute";
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        });
    }

    // Lover Boy music starts at 0:46
    let music = document.getElementById("loverboy-music");
    if (music) {
        music.currentTime = 46;
        music.play();
    }

    // Ensure final video plays without sound
    let video = document.getElementById("happy-video");
    if (video) {
        video.muted = true;
        video.play();
        video.loop = true;
    }
});
