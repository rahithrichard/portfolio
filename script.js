function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Function to add animations on scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Call the reveal function on initial load
reveal();

var tags = ['Java', 'Python', '.Net']; // List of tags
var currentIndex = 0;

function updateDeveloperRole() {
    currentIndex = (currentIndex + 1) % tags.length;
    document.getElementById('developerRole').textContent = tags[currentIndex] + ' Developer';
}

// Start cycling through tags every 2 seconds
var roleInterval = setInterval(updateDeveloperRole, 2000);

// Optional: Clear interval if needed (e.g., when navigating away from the page)
// clearInterval(roleInterval);
