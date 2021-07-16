'use strict';
const btn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.close-modal');

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btn.forEach(el => {
  el.addEventListener('click', showModal);
});
