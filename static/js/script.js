// marketplace/static/js/script.js

// Print a credit text in the console
console.log(
  '%cThis website has been created by Axel Giret for free %cLinkedIn: https://www.linkedin.com/in/axel-giret-b3b1a016a/\nEmail: giretaxel@gmail.com\n\n%cThe photos have been compressed and cropped by 11zion',
  'background: #333; color: rgb(248, 239, 73); padding: 15px 15px; font-weight: bold; border-radius: 4px; font-size: 40px;', 
  'color: #0077b5; font-style: italic; font-size: 20px;', 
  'color: gray; font-size: 12px; font-style: italic;'
);

// All code runs only once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

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