// Page load fade-in
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".page-wrapper").classList.add("visible");
    }, 300);
});

// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

document.getElementById("special").style.padding = 0;
