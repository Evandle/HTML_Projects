// pyroxene.js
document.addEventListener("DOMContentLoaded", function () {
    const pyroxeneLink = document.querySelector(".pyroxene a");

    // Initialize or read from localStorage
    let pyroxeneCount = parseInt(localStorage.getItem("pyroxene")) || 0;
    if (pyroxeneLink) {
        pyroxeneLink.textContent = pyroxeneCount;
    }

    // Optional helper to update count
    window.addPyroxene = function (amount) {
        pyroxeneCount += amount;
        localStorage.setItem("pyroxene", pyroxeneCount);
        if (pyroxeneLink) {
            pyroxeneLink.textContent = pyroxeneCount;
        }
    };
});
