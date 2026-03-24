

// Certificate Carousel
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.getElementById('carouselDots');

  // Sync initial index from whichever slide has .active in the DOM
  let current = 0;
  slides.forEach((slide, i) => {
    if (slide.classList.contains('active')) {
      current = i;
    }
  });

  // Safety: ensure only the current slide has .active
  slides.forEach((slide, i) => {
    if (i === current) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  // Build dot indicators (match the detected current)
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === current ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to certificate ' + (i + 1));
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  // Expose globally so onclick attributes work
  window.carouselNext = function () {
    goToSlide((current + 1) % slides.length);
  };

  window.carouselPrev = function () {
    goToSlide((current - 1 + slides.length) % slides.length);
  };
})();

