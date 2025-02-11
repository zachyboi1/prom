document.getElementById("yesButton").addEventListener("click", function () {
    window.location.href = "page2.html";
});

document.getElementById("noButton").addEventListener("mouseover", function () {
    this.style.position = "absolute";
    this.style.left = Math.random() * 80 + "vw";
    this.style.top = Math.random() * 80 + "vh";
});
