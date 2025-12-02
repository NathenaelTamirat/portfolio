// Typing animation: cycle through short descriptors and animate typing/deleting.
// Keep this behavior small and unobtrusive on the page.
const words = ["Nathenael-Tamirat", "Full-stack Developer", "Coder"];
const colors = ["white", "green", "yellow"];
// `text` is the element that receives the typed characters.
const text = document.getElementById("typing-text"); 

// Simple cyclic index generator — yields 0..N-1 repeatedly.
function* generator() {
  let index = 0;
  while (true) {
    yield index;
    index = (index + 1) % words.length;
  }
}

// Instantiate the generator once and reuse it between cycles.
let gen = generator();


// Type a word one character at a time. After finishing, wait then delete it.
function typeWord(word) {
  let i = 0;
  text.innerHTML = "";
  // Apply a color class that matches the word index.
  text.classList.remove(...colors);
  text.classList.add(colors[words.indexOf(word)]);

  const typingInterval = setInterval(() => {
    if (i < word.length) {
      text.innerHTML += word[i];
      i++;
    } else {
      clearInterval(typingInterval);
      // Small pause before deleting so the word is readable.
      setTimeout(() => deleteWord(word), 500); 
    }
  }, 100); 
}


// Delete the current word one character at a time, then start the next word.
function deleteWord(word) {
  let i = word.length - 1;

  const deletingInterval = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, i);
      i--;
    } else {
      clearInterval(deletingInterval);
      // Clean up color classes before the next word.
      text.classList.remove(...colors);
      typeWord(words[gen.next().value]);
    }
  }, 50); 
}
// Start the animation with the first generated index.
typeWord(words[gen.next().value]);
