// Typing effect in footer section

const words = ["Nathenael-Tamirat", "Full-stack Developer", "Software Engineer"];
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
