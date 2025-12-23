// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

<<<<<<< HEAD
// Scroll reveal animation
const revealElements = document.querySelectorAll(
  ".event-card, .schedule-item, .practical-item"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 100);
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

=======
>>>>>>> f170275 (done project)
// Load fonts
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;400&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);
