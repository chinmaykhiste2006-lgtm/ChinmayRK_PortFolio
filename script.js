// ---------------------------
// PAGE FADE-IN (no black delay)
// ---------------------------

window.addEventListener("load", () => {
    const wrapper = document.querySelector(".page-wrapper");
    if (wrapper) wrapper.classList.add("visible");
});

// ---------------------------
// ALWAYS START AT TOP
// ---------------------------

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// ---------------------------
// SMOOTH NAVBAR SCROLL
// ---------------------------

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ---------------------------
// FADE-IN SECTIONS ON SCROLL
// ---------------------------

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

// ---------------------------
// SPECIAL ELEMENT FIX
// ---------------------------

const special = document.getElementById("special");
if (special) {
    special.style.padding = "0";
}
