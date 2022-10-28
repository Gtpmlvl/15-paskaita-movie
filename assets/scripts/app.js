'use strict';
console.log('app.js');

//

const els = {
  addMovieBtn: document.getElementById('add-movie-btn'),
  addMovieModal: document.getElementById('add-modal'),
  backdrop: document.getElementById('backdrop'),
  cancelMovieBtn: document.querySelector('.btn--passive'),
  addMovieForm: document.getElementById('add-movie-form')

};

console.log('els ===', els);


// EVENET LISTENERES==================================================
// ==================================================

els.addMovieBtn.addEventListener('click', () => {

  els.addMovieModal.classList.add('visible')
  
  // els.backdrop.style.display = 'block';
  els.backdrop.classList.add('visible')

})

els.backdrop.addEventListener('click' , closeMovieModal)

els.cancelMovieBtn.addEventListener('click', closeMovieModal)



// klausomes formos isiuntimi

els.addMovieForm.addEventListener('submit', (event) => {
event.preventDefault();
console.log('add movie')

})

// MAIN FUNCTIONS========================================================
// +=======================================

function closeMovieModal() {

console.log('close movie modal')

els.addMovieModal.classList.remove('visible')  

els.backdrop.classList.remove('visible')
}