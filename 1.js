function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}
const scrollButton = document.getElementById("scrollButton");
// Show button when scrolling down a bit
// window.onscroll = function () {
//     if (window.scrollY > 100) {
//         scrollButton.style.display = "block";
//     } else {
//         scrollButton.style.display = "none";
//     }
// };
// function changeText() {
//     document.getElementById("scrollButton").textContent = &#x2193;
// }
// Scroll to top or bottom based on current position
function scrollToPosition() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // If at the bottom, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
        changeText()
    } else {
        // If not at the bottom, scroll to bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
}
const toggleButton = document.getElementById('toggle-dark-mode');
// Function to toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Optionally save the user's preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme','light');
    }
});
// Load the preferred theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
