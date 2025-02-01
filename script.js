document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.querySelector("nav").appendChild(darkModeToggle);
  
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      darkModeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  });
  