document.addEventListener("DOMContentLoaded", function () {
    // Handle 'No' button moving away (works on mobile)
    const noButtons = document.querySelectorAll(".no-btn");
    if (noButtons) {
        noButtons.forEach(noButton => {
            noButton.addEventListener("mouseenter", moveButton);
            noButton.addEventListener("touchstart", moveButton);
        });

        function moveButton(event) {
            const button = event.target;
            const randomX = Math.floor(Math.random() * 200) - 100; // Move left/right
            const randomY = Math.floor(Math.random() * 200) - 100; // Move up/down
            button.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    }

    // Play background music on page 2
    const bgMusicValentine = document.getElementById("bg-music-valentine");
    if (bgMusicValentine) {
        document.body.addEventListener("click", function () {
            bgMusicValentine.play().catch(error => console.log("Music autoplay blocked:", error));
        }, { once: true });
    }

    // Play background music on page 4 starting at 0:46
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

    // Ensure final video is properly sized, muted, and loops
    const happyVideo = document.getElementById("happy-video");
    if (happyVideo) {
        happyVideo.muted = true;
        happyVideo.loop = true;
        happyVideo.style.width = "90%"; // Responsive size for mobile
        happyVideo.style.maxWidth = "400px"; // Prevents being too big
        happyVideo.play().catch(error => console.log("Video autoplay blocked:", error));
    }
});
