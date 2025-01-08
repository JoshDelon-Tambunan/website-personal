// Add smooth scrolling for links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a, .hero-buttons a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
