document.addEventListener("DOMContentLoaded", function () {
    // Handle 'No' button moving away on index.html
    const noButton = document.getElementById("no-btn");
    if (noButton) {
        noButton.addEventListener("mouseover", function () {
            const randomX = Math.floor(Math.random() * 300) - 150; // Move randomly left or right
            const randomY = Math.floor(Math.random() * 300) - 150; // Move randomly up or down
            noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }

    // Handle background music on page 2 (valentine page)
    const bgMusicValentine = document.getElementById("bg-music-valentine");
    if (bgMusicValentine) {
        document.body.addEventListener("click", function () {
            bgMusicValentine.play().catch(error => console.log("Music autoplay blocked:", error));
        }, { once: true });
    }

    // Handle background music on page 4 (thank you page) and start at 0:46
    const bgMusicLoverBoy = document.getElementById("bg-music-loverboy");
    if (bgMusicLoverBoy) {
        const playMusic = () => {
            if (bgMusicLoverBoy.paused) {
                bgMusicLoverBoy.currentTime = 46; // Start at 0:46
                bgMusicLoverBoy.play().catch(error => console.log("Music autoplay blocked:", error));
            }
        };

        document.body.addEventListener("click", playMusic, { once: true });
    }

    // Ensure video on the last page is muted and loops
    const happyVideo = document.getElementById("happy-video");
    if (happyVideo) {
        happyVideo.muted = true;
        happyVideo.loop = true;
        happyVideo.play().catch(error => console.log("Video autoplay blocked:", error));
    }
});
