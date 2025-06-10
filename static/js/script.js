// marketplace/static/js/script.js

// All code runs only once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded!");

  // ✅ 1. Header hide/show on scroll
  let lastScroll = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 60) {
      header.style.transform = 'translateY(0)';
      header.classList.remove('scrolled-up');
    } else if (currentScroll > lastScroll) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
      header.classList.add('scrolled-up');
    }

    lastScroll = currentScroll;
  });


const fadeInElements = document.querySelectorAll('.box,  .bottom-container, .index-container');
if (fadeInElements.length) {
  const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeInElements.forEach(el => fadeInObserver.observe(el));
}


  // ✅ 7. Copy email to clipboard
  window.copyEmail = function () {
    const email = "your@email.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy email.");
    });
  };
});