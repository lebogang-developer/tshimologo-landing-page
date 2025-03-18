window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    // Add border after scrolling down for a few seconds
    if (window.scrollY > 100) {
        setTimeout(() => {
            navbar.classList.add("border-b-2", "border-gray-300");
        }, 2000); // 2-second delay
    } else {
        navbar.classList.remove("border-b-2", "border-gray-300");
    }
});


document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
});

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ach card appears one after the other when the user scrolls to the Services Section.
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute("data-delay");
                entry.target.classList.add("animate__fadeInUp");
                entry.target.style.animationDelay = `${delay}ms`;
            }
        });
    }, { threshold: 0.3 });

    serviceCards.forEach(card => observer.observe(card));
});