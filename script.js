// Form submission handling (no backend, just UI feedback)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show a fake success message
  document.getElementById("message").textContent = "Thanks! Your message has been sent.";
  document.getElementById("message").style.color = "#00ff88";

  // Optional: Clear form
  this.reset();
});