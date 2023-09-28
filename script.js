// JavaScript to change the navbar style on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "linear-gradient(to right, #ff6600, #ff33cc)"; // New gradient background on scroll
    } else {
        navbar.style.background = "linear-gradient(to right, #0073e6, #00b3b3)"; // Initial gradient background when scrolled back to top
    }
});
