document.addEventListener("DOMContentLoaded", function () {
  const words = ["Em breve...", "Novidades..."];
  const typingElement = document.getElementById("typing");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 80;
  const pauseAfterTyping = 1000; // ms para esperar depois de digitar toda palavra
  const pauseAfterDeleting = 500; // ms para esperar depois de apagar

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, pauseAfterDeleting);
        return;
      }
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pauseAfterTyping);
        return;
      }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
});
