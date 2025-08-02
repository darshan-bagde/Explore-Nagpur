/**
 * Smooth scrolling for internal anchor links
 * (e.g., links that begin with "#")
 */

document.addEventListener("DOMContentLoaded", () => {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent instant jump

      const targetID = this.getAttribute("href");
      const targetElement = document.querySelector(targetID);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});