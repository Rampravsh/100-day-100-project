// Function to handle the sticky header
function stickyHeader() {
  const header = document.getElementById("main-header");
  const stickyClass = "sticky"; // Class name defined in CSS

  // Check if the user has scrolled past the header's original position
  if (window.scrollY > header.offsetHeight) {
    header.classList.add(stickyClass);
  } else {
    header.classList.remove(stickyClass);
  }
}

// Attach the function to the scroll event
window.onscroll = function () {
  stickyHeader();
};

// Optional: Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
