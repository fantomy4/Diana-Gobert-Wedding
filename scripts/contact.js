// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", () => {
  successMessage.classList.add("show");

  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 5000);
});


// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all items
    faqItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".faq-answer").style.maxHeight = null;
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Scroll reveal for FAQ items
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  faqItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 100);
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
