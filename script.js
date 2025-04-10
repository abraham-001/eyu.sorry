const noText = document.getElementById('no-text');

noText.addEventListener('click', () => {
  // Get a random position within the viewport
  const x = Math.random() * (window.innerWidth - noText.offsetWidth);
  const y = Math.random() * (window.innerHeight - noText.offsetHeight);
  
  // Set the new position of the element
  noText.style.left = `${x}px`;
  noText.style.top = `${y}px`;
});
