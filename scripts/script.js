// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Carousel functionality
const slides = document.querySelectorAll(".carousel-slide");
const counter = document.getElementById("carouselCounter");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
let currentSlide = 0;
let autoplayInterval;

function updateCounter() {
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  updateCounter();
  resetAutoplay();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Services scroll reveal
const serviceCards = document.querySelectorAll(".service-card");
const reasonCards = document.querySelectorAll(".reason-card");
const allRevealElements = [...serviceCards, ...reasonCards];

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  allRevealElements.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 200);
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Load fonts
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;400&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);
