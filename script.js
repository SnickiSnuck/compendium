const scrollButton = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Erscheint nach 200px Scrollweg
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});

scrollButton.onclick = function() {
  window.scrollTo({
    top: 0,
  });
};

function toggleCover(colIndex) {
    // Wir suchen alle td-Elemente, die an der Position colIndex in ihrer Zeile stehen
    const cells = document.querySelectorAll(`tbody td:nth-child(${colIndex})`);
    
    cells.forEach(td => {
        td.classList.toggle('covered');
    });
}
