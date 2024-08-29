'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClodeModal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');
console.log(btnsOpenmodal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removeHidden = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenmodal.length; i++) {
  btnsOpenmodal[i].addEventListener('click', removeHidden);
}

btnClodeModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
