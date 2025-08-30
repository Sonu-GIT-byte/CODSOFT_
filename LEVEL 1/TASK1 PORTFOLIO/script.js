// Smooth Scroll for Navbar Links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Button Alert
document.getElementById("hireMeBtn").addEventListener("click", () => {
  alert("Thanks for showing interest! Let's work together 🚀");
});

// Contact Form Submission
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Your message has been sent successfully ✅");
  e.target.reset();
});
