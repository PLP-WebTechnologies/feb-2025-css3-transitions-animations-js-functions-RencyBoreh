document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("themeBtn");
  const animatedBox = document.getElementById("animatedBox");
  const greetingEl = document.getElementById("greeting");

  // Load stored theme preference
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme) {
      document.body.style.backgroundColor = savedTheme;
  }

  // Store theme preference
  themeBtn.addEventListener("click", function () {
      let newColor = document.body.style.backgroundColor === "white" ? "#222" : "white";
      document.body.style.backgroundColor = newColor;
      localStorage.setItem("preferredTheme", newColor);
  });

  // Toggle box animation on click
  animatedBox.addEventListener("click", function () {
      this.classList.toggle("bouncing");
  });

  // Dynamic greeting animation
  setTimeout(() => {
      greetingEl.style.transform = "scale(1.1)";
      greetingEl.style.transition = "transform 0.8s ease-in-out";
  }, 500);
});
