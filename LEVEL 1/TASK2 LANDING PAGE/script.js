// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// CTA button click
document.getElementById("cta-btn").addEventListener("click", () => {
  alert("Welcome! 🎉 Let's get started.");
});
