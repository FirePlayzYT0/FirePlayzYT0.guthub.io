// Form submission handling (no backend, just UI feedback + console log)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const name = this.elements[0].value;
  const email = this.elements[1].value;
  const message = this.elements[2].value;

  // Show a personalized success message
  const feedback = document.getElementById("message");
  feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
  feedback.style.color = "#00ff88";

  // Log user input for debugging (optional)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Clear the form
  this.reset();
});
