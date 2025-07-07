// script.js

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const loginBtns = [
    document.getElementById("loginBtn"),
    document.getElementById("loginBtn2")
  ];
  const closeModal = document.getElementById("closeModal");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const themeToggle = document.getElementById("themeToggle");

  // Show modal on login button click
  loginBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });
    }
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Scroll to top button
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // FAQ Toggle
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Login Form Validation
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='email']").value.trim();
    const password = loginForm.querySelector("input[type='password']").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Login successful (mock)");
      modal.style.display = "none";
      loginForm.reset();
    }
  });

  // Newsletter Form Validation
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address to subscribe.");
    } else {
      alert("Subscribed successfully (mock)");
      newsletterForm.reset();
    }
  });

  // Contact Form Validation
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = contactForm.querySelector("input[placeholder='Your Name']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email format.");
    } else {
      alert("Message sent (mock)");
      contactForm.reset();
    }
  });

  // theme toggle button
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


  // Dark mode toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "🌙";
    } else {
      themeToggle.textContent = "☀️";
    }
  });
});