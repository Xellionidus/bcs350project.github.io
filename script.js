const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// FAQ accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.style.maxHeight = null;
      });
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Testimonial slider
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  testimonials[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

prevBtn.addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const dog = document.getElementById("dog");
  const message = document.getElementById("message");

  let isValid = true;

  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "Name is required.");
    isValid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required.");
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    showError(email, "Please enter a valid email address.");
    isValid = false;
  }

  if (dog.value.trim() === "") {
    showError(dog, "Dog's name is required.");
    isValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Please enter a message.");
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = "Thank you! Your message has been sent successfully.";
    contactForm.reset();
  } else {
    formSuccess.textContent = "";
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");
  errorMessage.textContent = message;
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => {
    msg.textContent = "";
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
