// Page load fade-in
// Check if the browser supports the scroll restoration feature


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".page-wrapper").classList.add("visible");
    }, );
});

window.addEventListener('load', () => {
    // Use scrollIntoView for a modern, smooth scrolling effect.
    // This scrolls the window to the top (or any element) once the page has fully loaded.
    if ('scrollRestoration' in history) {
        // Turn off the browser's default behavior
        history.scrollRestoration = 'manual';
    }

    // After disabling the browser's behavior, immediately scroll to the top
    window.scrollTo(0, 0);
    behavior: 'smooth'

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