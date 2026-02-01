// Extracted from index.html on 2026-02-01
// Handles fade-up animation on scroll

document.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-up');
  const appearOptions = { threshold: 0.2 };
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.classList.add('appear');
      observer.unobserve(entry);
    });
  }, appearOptions);
  faders.forEach(fader => { appearOnScroll.observe(fader); });
});
