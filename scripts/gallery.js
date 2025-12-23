// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// Portfolio scroll reveal
const portfolioItems = document.querySelectorAll(".portfolio-item");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  portfolioItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 200);
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Load fonts
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;400&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);
