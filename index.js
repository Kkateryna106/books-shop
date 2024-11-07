const textElement = document.getElementById('text');
  const text = "Відкрийте для себе нові горизонти з нашими книгами";
  let index = 0;
  let typingInterval;

  function typeText() {
    textElement.textContent = '';
    index = 0;

    typingInterval = setInterval(() => {
      textElement.textContent += text.charAt(index);
      index++;

      if (index >= text.length) {
        clearInterval(typingInterval);
      }
    }, 100); 
  }

  textElement.addEventListener('mouseover', () => {
    clearInterval(typingInterval); 
    typeText();
  });

  typeText();

  const image = document.getElementById('image');
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      image.style.transform = 'scale(1.2) rotate(10deg)';
      setTimeout(() => {
        image.style.transform = 'scale(1) rotate(0deg)';
      }, 500);
    }
  });

 