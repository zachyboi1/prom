document.addEventListener("DOMContentLoaded", function () {
    // Redirect function
    function goToPage(url) {
        window.location.href = url;
    }

    // Moving "No" button
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

    // Start "Loverboy" at 0:46
    let music = document.getElementById("loverboy-music");
    if (music) {
        music.addEventListener("canplay", function () {
            music.currentTime = 46;
            music.play();
        });
    }

    // Autoplay & loop final video
    let video = document.getElementById("happy-video");
    if (video) {
        video.muted = true;
        video.play();
        video.loop = true;
    }
});
