// Typing effect in footer section

const words = [
  "Nathenael-Tamirat",
  "Full-stack Developer",
  "Software Engineer",
];
const colors = ["red", "green", "yellow"];
const text = document.getElementById("typing-text");

function* generator() {
  let index = 0;
  while (true) {
    yield index;
    index = (index + 1) % words.length;
  }
}

let gen = generator();

function typeWord(word) {
  let i = 0;
  text.innerHTML = "";
  text.classList.remove(...colors);
  text.classList.add(colors[words.indexOf(word)]);

  const typingInterval = setInterval(() => {
    if (i < word.length) {
      text.innerHTML += word[i];
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => deleteWord(word), 500);
    }
  }, 100);
}

function deleteWord(word) {
  let i = word.length - 1;

  const deletingInterval = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, i);
      i--;
    } else {
      clearInterval(deletingInterval);
      text.classList.remove(...colors);
      typeWord(words[gen.next().value]);
    }
  }, 50);
}

typeWord(words[gen.next().value]);


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

